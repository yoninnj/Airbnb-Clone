import React, { forwardRef } from 'react'
import './VideoCard.css';
const base_url = "https://image.tmdb.org/t/p/original/";
const videoCard = forwardRef(({movie},ref) => {
  return (
    <div ref={ref} className='videoCard'>
        <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
        />
      <p2>Hotel {movie.title || movie.orignal_name}</p2>
      <p>Price- ₹{movie.vote_count}/night</p>
      <p3>This is great hotel visit us...</p3>
    </div>
  )
})

export default videoCard