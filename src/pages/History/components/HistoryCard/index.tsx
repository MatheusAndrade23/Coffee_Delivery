import { HistoryCardContainer } from './styles';

import { GiShoppingBag } from 'react-icons/gi';
import { CoffeeType } from '../../../../providers/OrdersProvider';
import { getPaymentPreference } from '../../../../utils/get-payment-preference';

interface HistoryCardProps {
  date: string;
  cart: CoffeeType[];
  city: string;
  estate: string;
  totalPrice: number;
  paymentPreference: string;
}

export const HistoryCard = ({
  date,
  cart,
  estate,
  city,
  totalPrice,
  paymentPreference,
}: HistoryCardProps) => {
  const translatedPaymentPreference = getPaymentPreference(paymentPreference);

  return (
    <HistoryCardContainer>
      <div>
        <GiShoppingBag />
        <p>{date}</p>
      </div>
      <p>
        Sabores: <span>{cart.length}</span>
      </p>
      <p>{`${city}, ${estate}`}</p>
      <div>
        <p>
          <span>{`R$ ${totalPrice},00`}</span>
          {` - Pago com ${translatedPaymentPreference}`}
        </p>
      </div>
    </HistoryCardContainer>
  );
};
