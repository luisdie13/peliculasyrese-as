import { useState } from 'react';
import { Section } from './Section';
import { MovieList } from './MovieList';
import { FavoriteMovies } from './FavoriteMovies';
import { GenericList } from './GenericList';
import { useReviews } from '../hooks/useReviews';
import { renderReview } from '../types';
import type { Movie } from '../types';

// Componente principal con composición
export const MovieDashboard = () => {
  const { reviews, addPositiveReview, addNegativeReview } = useReviews();
  const [reviewMessage, setReviewMessage] = useState('');
  const [selectedMovieForReview, setSelectedMovieForReview] = useState<Movie | null>(null);

  const handleSelectMovie = (movie: Movie): void => {
    // Agregar a favoritos usando la función global
    if ((window as any).addFavoriteMovie) {
      (window as any).addFavoriteMovie(movie);
    }
  };

  const handleSelectMovieForReview = (movie: Movie): void => {
    setSelectedMovieForReview(movie);
  };

  const handleAddPositiveReview = (): void => {
    if (reviewMessage.trim() && selectedMovieForReview) {
      addPositiveReview(reviewMessage, selectedMovieForReview.id, selectedMovieForReview.name);
      setReviewMessage('');
      setSelectedMovieForReview(null);
    }
  };

  const handleAddNegativeReview = (): void => {
    if (reviewMessage.trim() && selectedMovieForReview) {
      addNegativeReview(reviewMessage, selectedMovieForReview.id, selectedMovieForReview.name);
      setReviewMessage('');
      setSelectedMovieForReview(null);
    }
  };

  return (
    <div className="movie-dashboard">
      <header className="dashboard-header">
        <h1>🎬 Movie Manager</h1>
        <p className="subtitle">Gestión de películas y reseñas</p>
      </header>

      <div className="dashboard-grid">
        <Section title="📋 Lista de Películas">
          <MovieList onSelectMovie={handleSelectMovie} />
        </Section>

        <Section title="⭐ Películas Favoritas">
          <FavoriteMovies />
        </Section>

        <Section title="💬 Reseñas">
          <div className="reviews-section">
            <div className="review-input">
              {selectedMovieForReview ? (
                <div className="selected-movie-info">
                  <p>
                    <strong>Película seleccionada:</strong> {selectedMovieForReview.name}
                  </p>
                  <button
                    onClick={() => setSelectedMovieForReview(null)}
                    className="btn-clear-selection"
                  >
                    Cambiar película
                  </button>
                </div>
              ) : (
                <div className="no-movie-selected">
                  <p>Selecciona una película de la lista para dejar una reseña</p>
                  <div className="movie-selector">
                    <MovieList onSelectMovie={handleSelectMovieForReview} />
                  </div>
                </div>
              )}

              {selectedMovieForReview && (
                <>
                  <textarea
                    value={reviewMessage}
                    onChange={(e) => setReviewMessage(e.target.value)}
                    placeholder="Escribe tu reseña aquí..."
                    rows={3}
                  />
                  <div className="review-buttons">
                    <button
                      onClick={handleAddPositiveReview}
                      className="btn-positive"
                      disabled={!reviewMessage.trim()}
                    >
                      ✓ Agregar Positiva
                    </button>
                    <button
                      onClick={handleAddNegativeReview}
                      className="btn-negative"
                      disabled={!reviewMessage.trim()}
                    >
                      ✗ Agregar Negativa
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="reviews-list">
              <h3>Todas las Reseñas</h3>
              {reviews.length === 0 ? (
                <p className="no-reviews">No hay reseñas aún.</p>
              ) : (
                <GenericList
                  items={reviews}
                  renderItem={(review) => (
                    <div className={`review-item review-${review.type}`}>
                      {renderReview(review)}
                    </div>
                  )}
                />
              )}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};
