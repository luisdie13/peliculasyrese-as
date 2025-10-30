// Interfaz Movie según requerimientos
export interface Movie {
  id: number;
  name: string;
  genres: string[];
  rating: { average: number | null };
  available: boolean;
}

// Tipo unión Review con discriminación y asociación a película
export type Review =
  | { type: 'positive'; message: string; movieId: number; movieName: string }
  | { type: 'negative'; message: string; movieId: number; movieName: string };

// Función formatMovie: devuelve "Título (Género) - Rating: X/10"
export const formatMovie = (m: Movie): string => {
  const genresStr = m.genres.length > 0 ? m.genres.join(', ') : 'Sin género';
  const rating = m.rating.average ?? 0;
  return `${m.name} (${genresStr}) - Rating: ${rating}/10`;
};

// Función renderReview: devuelve opinión formateada con nombre de película
export const renderReview = (r: Review): string => {
  const prefix = r.type === 'positive' ? '✓ Opinión positiva' : '✗ Opinión negativa';
  return `${prefix} sobre "${r.movieName}": ${r.message}`;
};
