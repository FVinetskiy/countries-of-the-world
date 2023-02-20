import React from 'react';
import './Header.sass';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link className="header__title" to={'/'}>
        Where in the world?
      </Link>
      <SwitchTheme />
    </header>
  );
};

export default Header;
