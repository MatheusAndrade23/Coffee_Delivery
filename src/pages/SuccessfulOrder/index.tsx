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

  toast.success('Pedido completado com sucesso!');

  return (
    <SuccessfulOrderContainer>
      {orders.length == 0 ? (
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
                    Entrega em{' '}
                    <span>{`${orders[lastPosition].road}, ${orders[lastPosition].number}`}</span>
                  </p>
                  <p>{`${orders[lastPosition].district} - ${orders[lastPosition].city}, ${orders[lastPosition].estate}`}</p>
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
                {getPaymentPreference(
                  orders[lastPosition].paymentPreference,
                ) === 'Dinheiro' && <FaMoneyBill />}
                {getPaymentPreference(
                  orders[lastPosition].paymentPreference,
                ) === 'Cartão de Crédito' && <FaMoneyCheck />}
                {getPaymentPreference(
                  orders[lastPosition].paymentPreference,
                ) === 'Cartão de Débito' && <AiFillBank />}
                <div>
                  <p>Pagamento na entrega</p>
                  <span>
                    {getPaymentPreference(
                      orders[lastPosition].paymentPreference,
                    )}
                  </span>
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
