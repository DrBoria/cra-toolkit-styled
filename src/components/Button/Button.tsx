/* eslint-disable react/button-has-type */
import React, { FC } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  buttonType?: string;
};

const Button: FC<ButtonProps> = ({ children, onClick, disabled = false, buttonType = 'primary' }) => (
  <>
    <button className={`${styles.button} ${styles[buttonType]}`} type="submit" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  </>
);

export default Button;
