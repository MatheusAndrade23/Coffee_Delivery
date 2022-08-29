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
  const { title, tags, description, srcImg, price, id } = coffee;
  const { addCoffeeToCart, cart } = useContext(OrdersContext);

  const [coffeeAmount, setCoffeeAmount] = useState(0);

  // const [coffeeAmount, setCoffeeAmount] = useState(() => {
  //   const lastCoffeeAmount = cart.filter((coffee) => coffee.id == id);

  //   if (lastCoffeeAmount.length === 0) {
  //     return 0;
  //   }

  //   return lastCoffeeAmount[0].amount;
  // });

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
        <button
          onClick={handleAddToCart}
          disabled={buttonAddToCartIsDisabled}
          title={
            buttonAddToCartIsDisabled
              ? 'Selecione uma quantidade para adicionar ao carrinho'
              : 'Adicionar ao carrinho'
          }
        >
          <IoMdCart />
        </button>
      </CoffeeSale>
    </FullCoffeeCardContainer>
  );
};
