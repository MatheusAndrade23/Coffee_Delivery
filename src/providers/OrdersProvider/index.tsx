import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { toast } from 'react-toastify';

import { getNewOrderInfo } from '../../utils/get-new-order-info';

export type CoffeeType = {
  title: string;
  tags: string[];
  amount: number;
  description: string;
  srcImg: string;
  price: string;
  id: string;
};

type OrderData = {
  CEP: string;
  road: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  estate: string;
  date: string;
  id: string;
  paymentPreference: string;
};

interface OrderProps {
  totalPrice: number;
  cart: CoffeeType[];
  date: string;
  paymentPreference: string;
  road: string;
  number: string;
  city: string;
  estate: string;
  id: string;
  district: string;
}

interface OrdersContextProps {
  orders: OrderProps[];
  cart: CoffeeType[];
  productsPrice: number;
  deliveryPrice: number;
  totalPrice: number;
  addCoffeeToCart: (coffee: CoffeeType, amount: number) => void;
  removeCoffeeFromCart: (coffeeId: string) => void;
  completeCurrentOrder: (orderData: OrderData) => void;
}

export const OrdersContext = createContext({} as OrdersContextProps);

interface OrdersContextProviderProps {
  children: ReactNode;
}

export const OrdersProvider = ({ children }: OrdersContextProviderProps) => {
  const [ordersState, dispatch] = useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case 'ADD_COFFEE_TO_CART': {
          const { orders, currentOrder } = state;
          const { cart } = currentOrder;

          let newCart = cart.filter((coffee: CoffeeType) => {
            return coffee.id !== action.payload.id;
          });

          newCart.push(action.payload);

          const newCurrentOrder = getNewOrderInfo(newCart);
          toast.success('Café adicionado ao carrinho com sucesso!');
          return { orders, currentOrder: newCurrentOrder };
        }

        case 'REMOVE_COFFEE_FROM_CART': {
          const { orders, currentOrder } = state;
          const { cart } = currentOrder;

          let newCart = cart.filter((coffee: CoffeeType) => {
            return coffee.id !== action.payload.id;
          });

          const newCurrentOrder = getNewOrderInfo(newCart);
          toast.success('Café removido do carrinho com sucesso!');
          return { orders, currentOrder: newCurrentOrder };
        }

        case 'COMPLETE_CURRENT_ORDER':
          const { orders, currentOrder } = state;
          const { cart, totalPrice } = currentOrder;

          const newCompleteOrder = {
            cart,
            totalPrice,
            ...action.payload.orderData,
          };

          window.location.href = '/order/success';
          return {
            orders: [...orders, newCompleteOrder],
            currentOrder: {
              cart: [],
              totalPrice: 0,
              deliveryPrice: 0,
              productsPrice: 0,
            },
          };

        default:
          return state;
      }
    },
    {
      orders: [],
      currentOrder: {
        cart: [],
        totalPrice: 0,
        deliveryPrice: 0,
        productsPrice: 0,
      },
    },
    () => {
      const storedStateAsJSON = localStorage.getItem('@coffee-delivery/orders');

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return {
        orders: [],
        currentOrder: {
          cart: [],
          totalPrice: 0,
          deliveryPrice: 0,
          productsPrice: 0,
        },
      };
    },
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(ordersState);

    localStorage.setItem('@coffee-delivery/orders', stateJSON);
  }, [ordersState]);

  const { orders, currentOrder } = ordersState;
  const { cart, totalPrice, deliveryPrice, productsPrice } = currentOrder;

  const addCoffeeToCart = (coffee: CoffeeType, amount: number) => {
    dispatch({
      type: 'ADD_COFFEE_TO_CART',
      payload: {
        ...coffee,
        amount,
      },
    });
  };

  const removeCoffeeFromCart = (coffeeId: string) => {
    dispatch({
      type: 'REMOVE_COFFEE_FROM_CART',
      payload: {
        id: coffeeId,
      },
    });
  };

  const completeCurrentOrder = (orderData: OrderData) => {
    dispatch({
      type: 'COMPLETE_CURRENT_ORDER',
      payload: {
        cart,
        orderData,
      },
    });
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        cart,
        totalPrice,
        deliveryPrice,
        productsPrice,
        addCoffeeToCart,
        removeCoffeeFromCart,
        completeCurrentOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
