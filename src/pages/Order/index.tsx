import { OrderContainer } from './styles';

import { CartInfo } from './components/CartInfo';
import { PaymentForm } from './components/PaymentForm';

export const Order = () => {
  return (
    <OrderContainer>
      <PaymentForm />
      <CartInfo />
    </OrderContainer>
  );
};
