import { useState, useEffect } from "react";
import styles from "./Reviews.module.css";

export default function MovieReviewCarousel() {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies
      ? JSON.parse(savedMovies)
      : [
          {
            id: 1,
            title: "Jurassic Park",
            image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
            reviews: [
              { user: "John", comment: "Absolutely loved watching this!", rating: 5 },
              { user: "Jane", comment: "My girlfriend and I had a great time!", rating: 4 },
            ],
          },
          {
            id: 2,
            title: "The Godfather",
            image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
            reviews: [],
          },
          {
            id: 3,
            title: "Superbad",
            image: "https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png",
            reviews: [],
          },
          {
            id: 4,
            title: "Inception",
            image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
            reviews: [],
          },
          {
            id: 5,
            title: "Back to the Future",
            image: "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg",
            reviews: [],
          },
          {
            id: 6,
            title: "Toy Story",
            image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
            reviews: [],
          },
          {
            id: 7,
            title: "The Matrix",
            image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
            reviews: [],
          },
        ];
  });

  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addReview = (newReview) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie, index) =>
        index === currentMovieIndex
          ? { ...movie, reviews: [...movie.reviews, newReview] }
          : movie
      )
    );
  };

  const currentMovie = movies[currentMovieIndex];

  const handleNext = () =>
    setCurrentMovieIndex((currentMovieIndex + 1) % movies.length);

  const handlePrev = () =>
    setCurrentMovieIndex((currentMovieIndex - 1 + movies.length) % movies.length);

  return (
    <div className={styles.carouselContainer}>
      <h1 className={styles.header}>Movie Reviews</h1>
      <div className={styles.carousel}>
        <button
          className={styles.navButton}
          onClick={handlePrev}
          aria-label="Previous movie"
        >
          &lt;
        </button>
        <div className={styles.movieCard}>
          <img
            src={currentMovie.image}
            alt={`${currentMovie.title} poster`}
            className={styles.movieImage}
          />
          <h2 className={styles.movieTitle}>{currentMovie.title}</h2>
          <div className={styles.reviews}>
            <h3 className={styles.reviewsHeader}>Reviews:</h3>
            {currentMovie.reviews.length > 0 ? (
              currentMovie.reviews.map((review, index) => (
                <p key={index} className={styles.review}>
                  <strong>{review.user}:</strong> {review.comment} ({review.rating}/5)
                </p>
              ))
            ) : (
              <p className={styles.noReviews}>No reviews yet!</p>
            )}
          </div>
          <ReviewForm onAddReview={addReview} />
        </div>
        <button
          className={styles.navButton}
          onClick={handleNext}
          aria-label="Next movie"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

function ReviewForm({ onAddReview }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert("Please enter a comment.");
      return;
    }

    const newReview = { user: "Anonymous", comment, rating: parseInt(rating) };
    onAddReview(newReview);
    setComment("");
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.reviewForm}>
      <label className={styles.formLabel}>
        Rating:
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className={styles.ratingSelect}
        >
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.formLabel}>
        Comment:
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={styles.commentInput}
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
}