import { useState } from 'react';
import type { Review } from '../types';

interface UseReviewsResult {
  reviews: Review[];
  addPositiveReview: (message: string, movieId: number, movieName: string) => void;
  addNegativeReview: (message: string, movieId: number, movieName: string) => void;
}

// Hook de gestión de reseñas asociadas a películas
export const useReviews = (): UseReviewsResult => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const addPositiveReview = (message: string, movieId: number, movieName: string): void => {
    const newReview: Review = { type: 'positive', message, movieId, movieName };
    setReviews((prev) => [...prev, newReview]);
  };

  const addNegativeReview = (message: string, movieId: number, movieName: string): void => {
    const newReview: Review = { type: 'negative', message, movieId, movieName };
    setReviews((prev) => [...prev, newReview]);
  };

  return {
    reviews,
    addPositiveReview,
    addNegativeReview,
  };
};
