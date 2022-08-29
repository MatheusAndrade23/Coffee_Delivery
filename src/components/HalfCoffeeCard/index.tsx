import {
  HalfCoffeeCardContainer,
  CoffeeInfo,
  CoffeeSale,
  Remove,
} from './styles';

import { useState, useContext } from 'react';

import { CoffeeAmount } from '../CoffeeAmount';

import { FaRegTrashAlt } from 'react-icons/fa';

import { CoffeeType, OrdersContext } from '../../providers/OrdersProvider';

interface HalfCoffeeCardProps {
  coffee: CoffeeType;
}

export const HalfCoffeeCard = ({ coffee }: HalfCoffeeCardProps) => {
  const { title, srcImg, price, amount, id } = coffee;

  const { removeCoffeeFromCart } = useContext(OrdersContext);
  const [coffeeAmount, setCoffeeAmount] = useState(() => (amount ? amount : 0));

  const handleRemoveCoffeeFromCart = () => {
    removeCoffeeFromCart(id);
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
    <HalfCoffeeCardContainer>
      <img src={srcImg} alt={title} />
      <div>
        <CoffeeInfo>
          <h6>{title}</h6>
          <p>{`R$ ${price}`}</p>
        </CoffeeInfo>
        <CoffeeSale>
          <CoffeeAmount
            amount={coffeeAmount}
            addOne={addOne}
            removeOne={removeOne}
          />
          <Remove
            onClick={handleRemoveCoffeeFromCart}
            title="Remover do Carrinho"
          >
            <FaRegTrashAlt />
            <span>REMOVER</span>
          </Remove>
        </CoffeeSale>
      </div>
    </HalfCoffeeCardContainer>
  );
};
