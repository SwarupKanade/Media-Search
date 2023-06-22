import React from "react";
import Rating from "@mui/material/Rating";
import genresData from "./genreData.json";

export default function TVCard({ tv }) {
  const poster = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  const selectedGenres = genresData.genres.filter((genre) =>
    tv.genre_ids.includes(genre.id)
  );
  return (
    <div className="movie">
      <div>
        <p>
          {tv.overview.length > 500
            ? tv.overview.substring(0, 500) + " ..."
            : tv.overview}
        </p>
      </div>
      <div>
        <img
          src={
            tv.poster_path !== null
              ? poster + tv.poster_path
              : "https://via.placeholder.com/400"
          }
          alt={tv.original_name}
        />
      </div>
      <div>
        <span>{selectedGenres.map((genre) => genre.name + ", ")}</span>
        <h3>
          {tv.original_name + " (" + tv.first_air_date.substring(0, 4) + ")"}
        </h3>

        <p className="rate">
          <Rating
            name="half-rating-read"
            defaultValue={tv.vote_average.toFixed(1) / 2}
            precision={0.5}
            readOnly
          />
        </p>
      </div>
    </div>
  );
}
