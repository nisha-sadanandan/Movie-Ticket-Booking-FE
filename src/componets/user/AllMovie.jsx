import React, { useState,useEffect} from "react";
import axios from "axios";
import { Box, Heading, Text, Grid, GridItem, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const AllMovie =()=>{

const [movies,setMovie] = useState([])
const navigate = useNavigate();


useEffect(()=>{

    const getMovie =async()=>{
        try {

            const res = await axios.get("https://movie-ticket-booking-serverside.onrender.com/api/v1/movie/get-movie")
            const data = await res.data;
            console.log("getmovie" ,data)
            setMovie(data)
            
        } catch (error) {
            console.log(error)
        }
    }
    getMovie()
},[]);

const handleMovieClick = (movieid) => {
  navigate(`/user/${movieid}`);
};

return(

<div>
<Box px={4} mt={8} >
      <Heading as="h2" size="lg" mb={4}>
        Movies
      </Heading>
      {movies.length > 0 ? (
        <Grid gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
          {movies.map((movie,index) => (
            <GridItem key={index} onClick={() => handleMovieClick(movie._id)}>
              <Box display="flex" flexDirection="column" alignItems="center" cursor="pointer" >
                <Image
                  boxSize="200px" 
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
        <Text>No movies found.</Text>
      )}
    </Box>
    </div>
   

)

}

export default AllMovie 

