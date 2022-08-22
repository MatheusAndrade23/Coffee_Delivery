import { CoffeeAmountContainer } from './styles';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface CoffeeAmountProps {
  amount: number;
  addOne: () => void;
  removeOne: () => void;
}

export const CoffeeAmount = ({
  amount,
  addOne,
  removeOne,
}: CoffeeAmountProps) => {
  const handleAddOne = () => {
    addOne();
  };

  const handleRemoveOne = () => {
    removeOne();
  };

  return (
    <CoffeeAmountContainer>
      <button onClick={handleRemoveOne}>
        <AiOutlineMinus />
      </button>
      <span>{amount}</span>
      <button onClick={handleAddOne}>
        <AiOutlinePlus />
      </button>
    </CoffeeAmountContainer>
  );
};
