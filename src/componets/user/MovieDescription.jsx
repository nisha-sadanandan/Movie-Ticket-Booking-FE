import React from 'react'
import MovieDetail from './movieDetails'
import GetRating from './GetRating'
import { Outlet } from 'react-router-dom'

const MovieDescription = () => {
  return (
    <>
    <div>
        <MovieDetail/>
    </div>
       <GetRating/>
       <Outlet/>
       </>
  )
}

export default MovieDescription