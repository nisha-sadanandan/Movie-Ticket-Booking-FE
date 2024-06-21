import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'; 
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Button,Text,Image } from '@chakra-ui/react'




const MovieDetail = () => {
  const [movies, setMovie] = useState([]);
  const { movieid } = useParams(); 

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/movie/get-moviebyid/${movieid}`); 
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        
      }
    };

    fetchMovie();
  }, [movieid]); 

  const handleRatingClick = (movieid) => {
  
        navigate(`/user/${movieid}/rating`)
  };

  const handleBookingClick = (title) => {
  
    navigate(`/user/${movieid}/showlisting/${title}`)
};

  return (

    <div>
    <Card 
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '300px' }}
    src={movies.image}
    alt='Caffe Latte'
  />

  <Stack>
  <CardHeader>
    <Heading size='xl'>{movies.title}</Heading>
  </CardHeader>
    <CardBody>
      <Heading size='md' mb="2">{movies.releasedate}</Heading>

      <Text py='2'size='md' mb="2">
      {movies.duration}  
      </Text>
      <Text py='2'size='md' mb="3">
       {movies.genre} 
      </Text>
      <Button variant='solid' colorScheme='gray' onClick={() => handleRatingClick(movies._id)}  >
        Rate Us
      </Button>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='red' onClick={() => handleBookingClick(movies.title)}>
        Book Tickets
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </div>
)}

export default MovieDetail