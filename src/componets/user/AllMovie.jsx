import React, { useState,useEffect} from "react";
import { Box, Heading, Text, List, ListItem, Image} from '@chakra-ui/react';
import axios from "axios";


const AllMovie =()=>{

const [movies,setMovie] = useState([])

useEffect(()=>{

    const getMovie =async()=>{
        try {

            const res = await axios.get("http://localhost:3000/api/v1/movie/get-movie")
            const data = await res.data;
            console.log("getmovie" ,data)
            setMovie(data)
            
        } catch (error) {
            console.log(error)
        }
    }
    getMovie()
},[]);

return(

<div>
<Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Movies
      </Heading>
      {movies.length > 0 ? (
        <List spacing={4}>
          {movies.map((movie) => (
            <ListItem key={movie.id}>
              <Box width="100%">
                <Image
                  boxSize="220px"
                  objectFit="cover"
                  borderRadius="md"
                  src={movie.image}
                  alt={movie.title}
                  mr={4}
                />
                <Box>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      ) : (
        <Text>No movies found.</Text>
      )}
    </Box>
      </div>

)

}

export default AllMovie 

