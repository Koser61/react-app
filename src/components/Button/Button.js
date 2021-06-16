import React from 'react';
import styles from './Button.scss';

const Button = ({...otherProps}) => {
  return (
    <button {...otherProps} className={styles.component + {...otherProps.variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}}/>
  );
};

export default Button;
