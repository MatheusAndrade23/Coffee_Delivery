import {
  CoffeeCardContainer,
  CoffeeInfo,
  CoffeeSale,
  CoffeeTags,
} from './styles';

import { IoMdCart } from 'react-icons/io';

interface FullCoffeeCardProps {
  id: string;
  amount: number;
}

import arabeCoffee from '../../assets/coffee-images/arabe.png';

export const FullCoffeeCard = ({ id, amount }: FullCoffeeCardProps) => {
  return (
    <CoffeeCardContainer>
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
        <input type="number" min="0" max="99" />
        <IoMdCart />
      </CoffeeSale>
    </CoffeeCardContainer>
  );
};

const MockTags = ['TRADICIONAL', 'GELADO'];
