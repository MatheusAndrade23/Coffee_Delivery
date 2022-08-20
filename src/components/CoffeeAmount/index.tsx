import { CoffeeAmountContainer } from './styles';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface CoffeeAmountProps {
  amount: number;
}

export const CoffeeAmount = ({ amount }: CoffeeAmountProps) => {
  return (
    <CoffeeAmountContainer>
      <button>
        <AiOutlineMinus />
      </button>
      <span>{amount}</span>
      <button>
        <AiOutlinePlus />
      </button>
    </CoffeeAmountContainer>
  );
};
