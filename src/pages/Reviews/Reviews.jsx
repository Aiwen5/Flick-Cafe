import React, { useState } from "react";

export default function MovieReviewCarousel() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Lion King",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
      reviews: [
        { user: "John", comment: "Amazing!", rating: 5 },
        { user: "Jane", comment: "Loved it!", rating: 4 },
      ],
    },
    {
      id: 2,
      title: "Inception",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
      reviews: [{ user: "Alice", comment: "Mind-blowing!", rating: 5 }],
    },
  ]);

  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  // Navigate to the next or previous movie
  const handleNext = () => setCurrentMovieIndex((currentMovieIndex + 1) % movies.length);
  const handlePrev = () => setCurrentMovieIndex((currentMovieIndex - 1 + movies.length) % movies.length);

  // Add a new review to the current movie
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

  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#333", color: "white" }}>
      <h1>Movie Reviews</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
        <button onClick={handlePrev}>&lt;</button>
        <div style={{ textAlign: "center" }}>
          <img src={currentMovie.image} alt={currentMovie.title} style={{ width: "200px", borderRadius: "10px" }} />
          <h2>{currentMovie.title}</h2>
          <h3>Reviews:</h3>
          {currentMovie.reviews.length > 0 ? (
            currentMovie.reviews.map((review, index) => (
              <p key={index}>
                <strong>{review.user}:</strong> {review.comment} ({review.rating}/5)
              </p>
            ))
          ) : (
            <p>No reviews yet!</p>
          )}
          <ReviewForm onAddReview={addReview} />
        </div>
        <button onClick={handleNext}>&gt;</button>
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
    <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
      <label>
        Rating:
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Comment:
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ width: "200px", margin: "5px 0" }}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
