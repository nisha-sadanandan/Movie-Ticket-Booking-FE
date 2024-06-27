
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Divider,ButtonGroup,Button,Text } from '@chakra-ui/react'



const SeatSelection = () => {

  const [show, setShow] = useState([]);
  const {showid} = useParams();
  

 
    useEffect(() => {

      const fetchShow = async () => {
        try {
          const response = await axios.get(`https://movie-ticket-booking-serverside.onrender.com/api/v1/show/${showid}/getshow`); 
          setShow(response.data);
        } catch (error) {
          console.error('Error fetching show:', error);
          
        }
      };
  
      fetchShow ();
    }, [showid]);
    

  return (
    <div>
   {/* {show.map((shows,index) => (
<Card key={index}>
<CardHeader>
    <Heading size='md'>{shows.title}</Heading>
  </CardHeader>

  <CardBody>
    <Text>{shows.theatername}
    <Button>{shows.date}</Button>
    </Text>
    <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='red' variant='solid'>
  {shows.showtime}
  </Button >
  </Stack>
  </CardBody>
</Card> */}

{/* ))} */}

 </div>

 

 
  )
}

export default SeatSelection