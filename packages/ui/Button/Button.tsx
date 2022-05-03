import * as React from "react";
import {FC, PropsWithChildren} from "react";
import cn from 'classnames';

interface Props {
  type: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  active?: boolean;
  hover?: boolean;
  disabled?: boolean;
}

export const Button: FC<PropsWithChildren<Props>> = ({type, size, active, hover,disabled, children}) => {

  const rootClassName = 'btn';

  return <button className={cn(rootClassName, `btn-${type}`, `btn-${size}`, {
    [`btn-hover`]: hover,
    [`btn-active`]: active,
    [`btn-disabled`]: disabled,
  })}>{children}</button>;
};
