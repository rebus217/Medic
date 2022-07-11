import React, { FC } from 'react';
import './button.sass';

interface buttonProps {
  text: string;
  isBig?: boolean;
}

const Button: FC<buttonProps> = ({ text, isBig }) => {
  let styleName: string = 'button';
  if (!isBig) styleName += ' button_small';

  return <div className={styleName}>{text}</div>;
};

export default Button;
