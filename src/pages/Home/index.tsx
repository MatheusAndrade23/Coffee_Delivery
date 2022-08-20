import { FullCoffeeCard } from '../../components/FullCoffeeCard';
import { HalfCoffeeCard } from '../../components/HalfCoffeeCard';

export const Home = () => {
  return (
    <>
      <HalfCoffeeCard />
      <FullCoffeeCard id="xcvxcv" amount={10} />
    </>
  );
};
