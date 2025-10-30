import { useState, useEffect } from 'react';
import type { Movie } from '../types';

interface UseFetchMoviesResult {
  data: Movie[];
  loading: boolean;
  error: string | null;
}

// Hook personalizado para obtener datos de películas
export const useFetchMovies = (url: string): UseFetchMoviesResult => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const result = await response.json();
        
        // Transformar datos de la API a nuestro formato Movie
        const movies: Movie[] = result.map((show: any) => ({
          id: show.id,
          name: show.name,
          genres: show.genres || [],
          rating: { average: show.rating?.average || null },
          available: true, // Por defecto todas están disponibles
        }));

        setData(movies);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
