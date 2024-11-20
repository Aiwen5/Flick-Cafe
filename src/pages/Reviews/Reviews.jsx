import React, { useState } from "react";
import styles from "./Reviews.module.css";


export default function MovieReviewCarousel() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Lion King",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
      reviews: [
        { user: "John", comment: "Absolutely loved watching this!", rating: 5 },
        { user: "Jane", comment: "My girlfriend and I had a great time!", rating: 4 },
      ],
    },
    {
      id: 2,
      title: "The Wolf of Wall Street",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
      reviews: [{ user: "Alice", comment: "Mind-blowing!", rating: 5 }],
    },

    {
      id: 3,
      title: "Freaky Friday",
      image: "https://upload.wikimedia.org/wikipedia/en/9/98/Freaky_Friday_%282003_film%29.png",
      reviews: [{ user: "George", comment: "Freaky on a friday night indeed!", rating: 5 }],
    },

    {
      id: 4,
      title: "Indiana Jones & the Crystal Skull",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d5/Kingdomofthecrystalskull.jpg",
      reviews: [{ user: "Devon", comment: "Indiana Jones is such a classic!", rating: 4 }],
    },

    {
      id: 5,
      title: "The Orphanage",
      image: "https://upload.wikimedia.org/wikipedia/en/2/2d/Elorfanato.jpg",
      reviews: [{ user: "Evan", comment: "Mind-blowing!", rating: 4 }],
    },

    {
      id: 6,
      title: "Alfred Hitchcock's Psycho",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/1920px-Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg",
      reviews: [{ user: "Cally", comment: "This one blew my mind!", rating: 5 }],
    },

    {
      id: 7,
      title: "Blade Runner 2049",
      image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
      reviews: [{ user: "Shirin", comment: "I love Ryan Gosling!", rating: 5 }],
    },









  ]);

  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

 
  const handleNext = () => setCurrentMovieIndex((currentMovieIndex + 1) % movies.length);
  const handlePrev = () => setCurrentMovieIndex((currentMovieIndex - 1 + movies.length) % movies.length);

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
    <form onSubmit={handleSubmit} >
   <label>
  Rating:
  <select value={rating} onChange={(e) => setRating(e.target.value)}>
    {[1, 2, 3, 4, 5].map((rating) => (
      <option key={rating} value={rating}>
        {rating} 
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
          style={{ width: "500px", margin: "100px 0" }}
        />
      </label>
      <br />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}
