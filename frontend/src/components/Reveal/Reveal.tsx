import type { ReactNode } from 'react';
import useReveal from '../../hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  direction?: 'up' | 'left';
  className?: string;
};

function Reveal({ children, direction = 'up', className = '' }: RevealProps) {
  const ref = useReveal();

  const classes = [
    'reveal',
    direction === 'left' ? 'reveal--left' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}

export default Reveal;
