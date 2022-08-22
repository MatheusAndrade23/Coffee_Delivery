import { SuccessfulOrderContainer, Info, InfoTag } from './styles';

import { BsClockFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { FaMoneyBill, FaMoneyCheck } from 'react-icons/fa';

import successfulOrderImage from '../../assets/successful-order-image.png';

export const SuccessfulOrder = () => {
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
