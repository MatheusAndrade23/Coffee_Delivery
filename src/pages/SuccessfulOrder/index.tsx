import {
  SuccessfulOrderContainer,
  Info,
  InfoTag,
  NoCompleteOrderMessage,
} from './styles';

import { BsClockFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { FaMoneyBill, FaMoneyCheck } from 'react-icons/fa';
import { AiFillBank } from 'react-icons/ai';

import { useContext } from 'react';

import { OrdersContext } from '../../providers/OrdersProvider';

import { getPaymentPreference } from '../../utils/get-payment-preference';

import successfulOrderImage from '../../assets/successful-order-image.png';
import { toast } from 'react-toastify';

export const SuccessfulOrder = () => {
  const { orders } = useContext(OrdersContext);
  const lastPosition = orders.length - 1;

  const { district, city, estate, road, number, paymentPreference, cart } =
    orders[lastPosition];

  const translatedPaymentPreference = getPaymentPreference(paymentPreference);

  if (cart.length > 0) {
    toast.success('Pedido completado com sucesso!');
  }

  return (
    <SuccessfulOrderContainer>
      {cart.length === 0 ? (
        <NoCompleteOrderMessage>
          <h2>Você ainda não completou nenhum pedido!</h2>
        </NoCompleteOrderMessage>
      ) : (
        <>
          <Info>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você!</p>
            <div>
              <InfoTag>
                <IoLocationSharp />
                <div>
                  <p>
                    Entrega em <span>{`${road}, ${number}`}</span>
                  </p>
                  <p>{`${district} - ${city}, ${estate}`}</p>
                </div>
              </InfoTag>
              <InfoTag>
                <BsClockFill />
                <div>
                  <p>Previsão de entrega</p>
                  <span>20 min - 30 min</span>
                </div>
              </InfoTag>
              <InfoTag>
                {translatedPaymentPreference === 'Dinheiro' && <FaMoneyBill />}
                {translatedPaymentPreference === 'Cartão de Crédito' && (
                  <FaMoneyCheck />
                )}
                {translatedPaymentPreference === 'Cartão de Débito' && (
                  <AiFillBank />
                )}
                <div>
                  <p>Pagamento na entrega</p>
                  <span>{translatedPaymentPreference}</span>
                </div>
              </InfoTag>
            </div>
          </Info>
          <img src={successfulOrderImage} alt="Pedido bem sucedido!" />
        </>
      )}
    </SuccessfulOrderContainer>
  );
};
