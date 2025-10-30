import type { ReactNode } from 'react';

interface AlertBoxProps {
  type: 'error' | 'success' | 'info';
  children: ReactNode;
}

// Componente para mostrar alertas
export const AlertBox = ({ type, children }: AlertBoxProps) => {
  return (
    <div className={`alert-box alert-${type}`}>
      {children}
    </div>
  );
};
