import {
  FullCoffeeCardContainer,
  CoffeeInfo,
  CoffeeSale,
  CoffeeTags,
} from './styles';

import { CoffeeAmount } from '../CoffeeAmount';

import { IoMdCart } from 'react-icons/io';

interface FullCoffeeCardProps {
  id: string;
  amount: number;
}

import arabeCoffee from '../../assets/coffee-images/arabe.png';

export const FullCoffeeCard = ({ id, amount }: FullCoffeeCardProps) => {
  return (
    <FullCoffeeCardContainer>
      <img src={arabeCoffee} />
      <CoffeeTags>
        {MockTags.map((tag) => (
          <span>{tag}</span>
        ))}
      </CoffeeTags>
      <CoffeeInfo>
        <h6>Expresso</h6>
        <p>Bebida preparada com café expresso e cubos de gelo.</p>
      </CoffeeInfo>
      <CoffeeSale>
        <p>
          R$ <span>8,00</span>
        </p>
        <CoffeeAmount amount={2} />
        <button>
          <IoMdCart />
        </button>
      </CoffeeSale>
    </FullCoffeeCardContainer>
  );
};

const MockTags = ['TRADICIONAL', 'GELADO'];
