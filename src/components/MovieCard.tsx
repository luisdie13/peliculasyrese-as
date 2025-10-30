import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

// Componente de tarjeta de película
export const MovieCard = ({ movie, onSelect }: MovieCardProps) => {
  const handleClick = () => {
    if (movie.available) {
      onSelect(movie);
    }
  };

  const rating = movie.rating.average ?? 0;
  const genresText = movie.genres.length > 0 ? movie.genres.join(', ') : 'Sin género';

  return (
    <div className={`movie-card ${!movie.available ? 'unavailable' : ''}`}>
      <h3>{movie.name}</h3>
      <p className="genres">
        <strong>Géneros:</strong> {genresText}
      </p>
      <p className="rating">
        <strong>Calificación:</strong> {rating.toFixed(1)}/10
      </p>
      <button
        onClick={handleClick}
        disabled={!movie.available}
        className="select-button"
      >
        {movie.available ? 'Seleccionar' : 'No disponible'}
      </button>
    </div>
  );
};
