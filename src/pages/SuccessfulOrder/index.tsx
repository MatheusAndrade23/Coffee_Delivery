import { SuccessfulOrderContainer, Info, InfoTag } from './styles';

import { BsClockFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { FaMoneyBill, FaMoneyCheck } from 'react-icons/fa';

import { useContext } from 'react';

import { OrdersContext } from '../../providers/OrdersProvider';

import successfulOrderImage from '../../assets/successful-order-image.png';

export const SuccessfulOrder = () => {
  const { orders } = useContext(OrdersContext);
  const lastPosition = orders.length - 1;

  const { district, city, estate, road, number } = orders[lastPosition];

  return (
    <SuccessfulOrderContainer>
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
            <FaMoneyBill />
            <div>
              <p>Pagamento na entrega</p>
              <span>Dinheiro</span>
            </div>
          </InfoTag>
        </div>
      </Info>
      <img src={successfulOrderImage} alt="Pedido bem sucedido!" />
    </SuccessfulOrderContainer>
  );
};
