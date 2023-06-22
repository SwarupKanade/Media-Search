import React from "react";
import Rating from "@mui/material/Rating";
import genresData from "./genreData.json";

export default function MovieCard({ movie }) {
  const poster = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  const selectedGenres = genresData.genres.filter((genre) =>
    movie.genre_ids.includes(genre.id)
  );
  return (
    <div className="movie">
      <div>
        <p>
          {movie.overview.length > 500
            ? movie.overview.substring(0, 500) + " ..."
            : movie.overview}
        </p>
      </div>
      <div>
        <img
          src={
            movie.poster_path !== null
              ? poster + movie.poster_path
              : "https://via.placeholder.com/400"
          }
          alt={movie.original_title}
        />
      </div>
      <div>
        <span>{selectedGenres.map((genre) => genre.name + ", ")}</span>
        <h3>
          {movie.original_title +
            " (" +
            movie.release_date.substring(0, 4) +
            ")"}
        </h3>

        <p className="rate">
          <Rating
            name="half-rating-read"
            defaultValue={movie.vote_average.toFixed(1) / 2}
            precision={0.5}
            readOnly
          />
        </p>
      </div>
    </div>
  );
}
