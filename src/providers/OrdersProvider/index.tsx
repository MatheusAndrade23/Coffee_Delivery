import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';

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
  paymentPreference: string;
};

interface OrderProps {
  totalPrice: number;
  order: CoffeeType[];
  date: string;
  paymentPreference: string;
  data: OrderData;
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

          return { orders, currentOrder: newCurrentOrder };
        }

        case 'REMOVE_COFFEE_FROM_CART': {
          const { orders, currentOrder } = state;
          const { cart } = currentOrder;

          let newCart = cart.filter((coffee: CoffeeType) => {
            return coffee.id !== action.payload.id;
          });

          const newCurrentOrder = getNewOrderInfo(newCart);

          return { orders, currentOrder: newCurrentOrder };
        }

        case 'COMPLETE_CURRENT_ORDER':
          console.log('jj');
          return state;

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
    const { title, srcImg, price, id } = coffee;
    dispatch({
      type: 'ADD_COFFEE_TO_CART',
      payload: {
        id,
        title,
        amount,
        price,
        srcImg,
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
        ...orderData,
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
