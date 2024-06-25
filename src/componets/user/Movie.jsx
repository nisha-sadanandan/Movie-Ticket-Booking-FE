import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Grid, GridItem, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

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
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Recommended Movies
      </Heading>
      {movies.length > 0 ? (
        <Grid gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
          {movies.map((movie,index) => (
            <GridItem key={index} onClick={() => handleMovieClick(movie._id)}>
              <Box display="flex" flexDirection="column" alignItems="center" cursor="pointer">
                <Image
                  boxSize="200px" 
                  objectFit="cover"
                  borderRadius="lg"
                  src={movie.image}
                  alt={movie.title}
                  mb={2}
                />

              </Box>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text>No movies found.</Text>
      )}
    </Box>
  );
};

export default MovieList;


