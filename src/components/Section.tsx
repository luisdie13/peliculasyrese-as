import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

// Componente Section con children tipados
export const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </div>
  );
};
