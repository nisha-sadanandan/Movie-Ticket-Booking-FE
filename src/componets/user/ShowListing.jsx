import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { Stack,Text, Divider,Button,Card,CardBody,CardHeader,Heading,StackDivider,Box,Tooltip} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';




const ShowListing = () => {

  const [show, setShow] = useState([]);
  const { title} = useParams();

  const navigate = useNavigate();



 
    useEffect(() => {

      const fetchShow = async () => {
        try {
          const response = await axios.get(`https://movie-ticket-booking-serverside-be.onrender.com/api/v1/show/${title}/get-show`); 
          setShow(response.data);
        } catch (error) {
          console.error('Error fetching show:', error);
          
        }
      };
  
      fetchShow ();
    }, [title]);


    const handleTimeClick = (showid) => {
  
      navigate(`./seat/${showid}`)
};

  return (
    <div>
    {show.map((shows,index) => (
    <div key={index}> 
  <Divider orientation='vertical' />
  <Text>{shows.title}</Text>
<Card>
  <CardHeader>
    <Button>{shows.date}</Button>
  </CardHeader>
  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        {shows.theatername}
        </Heading>
        <Text pt='2' fontSize='sm'>
        {shows.location}
        </Text>
        <Stack direction='row' spacing={4} align='center'>
        <Tooltip label={shows.price} aria-label='A tooltip'>
  <Button colorScheme='red' variant='outline' marginTop={3}  w={100} onClick={() => handleTimeClick(shows._id)}>
  {shows.showtime}
  </Button>
  </Tooltip>
</Stack>
      </Box>
    </Stack>
  </CardBody>
</Card>

</div>
   ))}
</div>














  )
}

export default ShowListing