import {
  HalfCoffeeCardContainer,
  CoffeeInfo,
  CoffeeSale,
  Remove,
} from './styles';

import { CoffeeAmount } from '../CoffeeAmount';

import { FaRegTrashAlt } from 'react-icons/fa';

import arabeCoffee from '../../assets/coffee-images/arabe.png';

export const HalfCoffeeCard = () => {
  return (
    <HalfCoffeeCardContainer>
      <img src={arabeCoffee} />
      <div>
        <CoffeeInfo>
          <h6>Expresso Tradicional</h6>
          <p>{`R$ ${700}`}</p>
        </CoffeeInfo>
        <CoffeeSale>
          <CoffeeAmount amount={3} />
          <Remove>
            <FaRegTrashAlt />
            <span>REMOVER</span>
          </Remove>
        </CoffeeSale>
      </div>
    </HalfCoffeeCardContainer>
  );
};
