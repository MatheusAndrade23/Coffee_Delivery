import { CoffeeType } from '../providers/OrdersProvider';

export const getNewOrderInfo = (cart: CoffeeType[]) => {
  const productsPrice = cart.reduce(
    (previousValue: number, coffee: CoffeeType) => {
      return (
        previousValue +
        parseFloat(coffee.price.replace(',', '.')) * coffee.amount
      );
    },
    0,
  );

  const deliveryPrice = cart.length * 2;
  const totalPrice = productsPrice + deliveryPrice;

  return { deliveryPrice, productsPrice, totalPrice, cart };
};
