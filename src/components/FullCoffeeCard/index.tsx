import {
  FullCoffeeCardContainer,
  CoffeeInfo,
  CoffeeSale,
  CoffeeTags,
} from './styles';

import { useContext, useState } from 'react';

import { CoffeeAmount } from '../CoffeeAmount';

import { IoMdCart } from 'react-icons/io';

import { CoffeeType, OrdersContext } from '../../providers/OrdersProvider';

interface FullCoffeeCardProps {
  coffee: CoffeeType;
}

export const FullCoffeeCard = ({ coffee }: FullCoffeeCardProps) => {
  const { title, tags, description, srcImg, price } = coffee;
  const { addCoffeeToCart } = useContext(OrdersContext);

  const [coffeeAmount, setCoffeeAmount] = useState(0);

  const isCoffeeSelected = coffeeAmount > 0;
  const buttonAddToCartIsDisabled = !isCoffeeSelected;

  const handleAddToCart = () => {
    addCoffeeToCart(coffee, coffeeAmount);
  };

  const addOne = () => {
    if (coffeeAmount < 9) {
      setCoffeeAmount((state) => state + 1);
    }
  };

  const removeOne = () => {
    if (coffeeAmount > 0) {
      setCoffeeAmount((state) => state - 1);
    }
  };

  return (
    <FullCoffeeCardContainer>
      <img src={srcImg} alt={`${title} - ${description}`} />
      <CoffeeTags>
        {tags && tags.map((tag) => <span key={tag}>{tag}</span>)}
      </CoffeeTags>
      <CoffeeInfo>
        <h6>{title}</h6>
        <p>{description}</p>
      </CoffeeInfo>
      <CoffeeSale>
        <p>
          R$ <span>{price}</span>
        </p>
        <CoffeeAmount
          amount={coffeeAmount}
          addOne={addOne}
          removeOne={removeOne}
        />
        <button onClick={handleAddToCart} disabled={buttonAddToCartIsDisabled}>
          <IoMdCart />
        </button>
      </CoffeeSale>
    </FullCoffeeCardContainer>
  );
};
