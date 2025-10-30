import { useState, useMemo } from 'react';
import { GenericList } from './GenericList';
import { formatMovie } from '../types';
import type { Movie } from '../types';

// Componente de películas favoritas
export const FavoriteMovies = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const addFavorite = (movie: Movie): void => {
    // Evitar duplicados
    if (!favorites.find((fav) => fav.id === movie.id)) {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  const removeFavorite = (movieId: number): void => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  // Calcular promedio de rating usando useMemo
  const averageRating = useMemo(() => {
    if (favorites.length === 0) return 0;

    const total = favorites.reduce((sum, movie) => {
      return sum + (movie.rating.average ?? 0);
    }, 0);

    return total / favorites.length;
  }, [favorites]);

  // Exponer funciones para uso externo
  (window as any).addFavoriteMovie = addFavorite;

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <p>No hay películas favoritas aún.</p>
        <p className="hint">Selecciona películas de la lista para agregarlas a favoritos.</p>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <div className="favorites-stats">
        <p>
          <strong>Total de favoritas:</strong> {favorites.length}
        </p>
        <p>
          <strong>Promedio de calificación:</strong> {averageRating.toFixed(2)}/10
        </p>
      </div>

      <GenericList
        items={favorites}
        renderItem={(movie) => (
          <div className="favorite-item">
            <span className="favorite-info">{formatMovie(movie)}</span>
            <button
              onClick={() => removeFavorite(movie.id)}
              className="remove-button"
            >
              Eliminar
            </button>
          </div>
        )}
      />
    </div>
  );
};
