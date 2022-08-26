import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Results.css';
import VideoCard from './VideoCard';
export default function Results({selectedOption}) {
  const[movies,setMovies]=useState([])
  useEffect(() =>{
    async function fetchData(){
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData()
  },[selectedOption])
  return (
        <div className='results'>
          {movies.map((movie) => (
            <VideoCard movie={movie}/>
          ))}
        </div>
  )
}
