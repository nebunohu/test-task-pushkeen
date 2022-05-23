import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <Link to="/">PUSHKEEN</Link>
    </header>
  );
};

export default Header;
