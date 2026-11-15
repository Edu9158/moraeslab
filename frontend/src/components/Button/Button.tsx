import type { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  href: string;
};

function Button({ variant, children, href }: ButtonProps) {
  return (
    <a href={href} className={`btn btn--${variant}`}>
      {children}
    </a>
  );
}

export default Button;
