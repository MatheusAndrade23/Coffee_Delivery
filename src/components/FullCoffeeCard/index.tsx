import {
  FullCoffeeCardContainer,
  CoffeeInfo,
  CoffeeSale,
  CoffeeTags,
} from './styles';

import { CoffeeAmount } from '../CoffeeAmount';

import { IoMdCart } from 'react-icons/io';

type Coffee = {
  title: string;
  tags: string[];
  description: string;
  srcImg: string;
  price: string;
};

interface FullCoffeeCardProps {
  coffee: Coffee;
}

export const FullCoffeeCard = ({ coffee }: FullCoffeeCardProps) => {
  const { title, tags, description, srcImg, price } = coffee;
  return (
    <FullCoffeeCardContainer>
      <img src={srcImg} alt={`${title} - ${description}`} />
      <CoffeeTags>
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </CoffeeTags>
      <CoffeeInfo>
        <h6>{title}</h6>
        <p>{description}</p>
      </CoffeeInfo>
      <CoffeeSale>
        <p>
          R$ <span>{price}</span>
        </p>
        <CoffeeAmount amount={0} />
        <button>
          <IoMdCart />
        </button>
      </CoffeeSale>
    </FullCoffeeCardContainer>
  );
};
