import { ThemeSwitcherContainer } from './styles';

import { useContext } from 'react';

import { ThemeProviderContext } from '../../providers/ThemeProvider';

export const ThemeSwitcher = () => {
  const { changeTheme } = useContext(ThemeProviderContext);
  const handleChecked = () => {
    changeTheme();
  };

  return (
    <ThemeSwitcherContainer>
      <input type="checkbox" onChange={handleChecked} />
      <span></span>
    </ThemeSwitcherContainer>
  );
};
