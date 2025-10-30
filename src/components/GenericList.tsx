import type { ReactNode } from 'react';

interface GenericListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

// Componente genérico para renderizar listas
export const GenericList = <T,>({ items, renderItem }: GenericListProps<T>) => {
  return (
    <ul className="generic-list">
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};
