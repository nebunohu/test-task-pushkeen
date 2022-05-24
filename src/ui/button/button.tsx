import React, { FC, MouseEventHandler } from 'react';

// Styles
import styles from './button.module.css';

type TButtonProps = {
  value?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: FC<TButtonProps> = ({ type, value, onClick }) => {
  return (
    <button type={type === 'submit' ? 'submit' : 'button'} className={`${styles.wrapper}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
