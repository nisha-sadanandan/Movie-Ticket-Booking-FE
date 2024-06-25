import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter,Heading,StackDivider,Stack,Box,Text} from '@chakra-ui/react'



const Theater = () => {

    const [theater, settheater] = useState([]);
    
    useEffect(() => {
      const fetchTheaters = async () => {
        try {
          const response = await axios.get('https://movie-ticket-booking-serverside.onrender.com/api/v1/theater/get-theater'); 
          settheater(response.data);
        } catch (error) {
          console.error('Error fetching thetaers:', error);
          
        }
      };
  
      fetchTheaters();
    }, []);

  return (
 
 <Card>       
  <CardHeader>
    <Heading size='lg'>Theaters</Heading>
  </CardHeader>
  <CardBody>
  {theater.map((theaters,index) => (
    <Stack divider={<StackDivider />} spacing='4' key={index}  p={6}>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          {theaters.theatername}
        </Heading>
        <Text pt='2' fontSize='sm'>
          {theaters.location}
        </Text>
      </Box>
    </Stack>
    ))}
  </CardBody>

</Card>
   
  )
}

export default Theater