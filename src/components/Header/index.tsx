import { HeaderContainer } from './styles';

import { GrLocation } from 'react-icons/gr';
import { IoIosCart } from 'react-icons/io';

import logo from '../../assets/logo.png';

export const Header = () => {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="Logo - Coffee Delivery" />
      </a>
      <div>
        <div>
          <GrLocation />
          <span>Minas Gerais, BR</span>
        </div>
        <a href="/">
          <IoIosCart />
        </a>
      </div>
    </HeaderContainer>
  );
};
