import React, { FC } from 'react';

// Styles
import styles from './button.module.css';

type TButtonProps = {
  value?: string;
};

const Button: FC<TButtonProps> = ({ value }) => {
  return (
    <div className={`${styles.wrapper}`}>
      {value}
    </div>
  );
};

export default Button;
