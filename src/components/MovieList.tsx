import { useFetchMovies } from '../hooks/useFetchMovies';
import { GenericList } from './GenericList';
import { MovieCard } from './MovieCard';
import { AlertBox } from './AlertBox';
import type { Movie } from '../types';

interface MovieListProps {
  onSelectMovie: (movie: Movie) => void;
}

// Componente de lista de películas
export const MovieList = ({ onSelectMovie }: MovieListProps) => {
  const { data, loading, error } = useFetchMovies('https://api.tvmaze.com/shows');

  if (loading) {
    return <p className="loading-text">Cargando películas...</p>;
  }

  if (error) {
    return (
      <AlertBox type="error">
        Error al cargar películas: {error}
      </AlertBox>
    );
  }

  if (data.length === 0) {
    return <p>No hay películas disponibles.</p>;
  }

  return (
    <GenericList
      items={data}
      renderItem={(movie) => (
        <MovieCard movie={movie} onSelect={onSelectMovie} />
      )}
    />
  );
};
