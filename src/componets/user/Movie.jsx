import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Grid, GridItem, Image, Button } from '@chakra-ui/react';
import { Skeleton, SkeletonCircle, SkeletonText,Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import banner from "../images/banner.jpeg"

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://movie-ticket-booking-serverside.onrender.com/api/v1/movie/get-movie'); 
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
        
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movieid) => {
    navigate(`/user/${movieid}`);
  };

  return (
    <div>
      <div className=''>
        <img src={banner}alt='banner'/>
      </div>
    <div>
    <Box px={4} mt={8} >
      <Heading as="h2" size="lg" mb={4}>
        Recommended Movies
      </Heading>
      {movies.length > 0 ? (
        <Grid gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
          {movies.map((movie,index) => (
            <GridItem key={index} onClick={() => handleMovieClick(movie._id)}>
              <Box display="flex" flexDirection="column" alignItems="center" cursor="pointer" >
                <Image
                  boxSize="230px" 
                  objectFit="cover"
                  borderRadius="lg"
                  src={movie.image}
                  alt={movie.title}
                  mb={2}
                  h="300px"
                />

              </Box>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>
      )}
    </Box>
    </div>
    </div>
  );
};

export default MovieList;


