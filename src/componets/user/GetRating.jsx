import React,{ useState, useEffect } from 'react'
import axios from "axios"
import { Card, CardHeader, CardBody, CardFooter,Flex,Avatar,Box,Heading,Text,Spacer,SimpleGrid} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'; 




const GetRating = () => {

    const { movieid } = useParams();


    const[review ,setReview] = useState([])

    useEffect(()=>{

        const getRateReview =async()=>{
            try {

                const res = await axios.get(`https://movie-ticket-booking-serverside-be.onrender.com/api/v1/movie/${movieid}/get-review`)
                const data = await res.data;
                console.log("review" ,data)
                setReview(data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getRateReview()
    },[movieid]);



  return (
    <div>
      <h1 className='text-3xl m-8 font-semibold'>Top Reviews</h1>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(380px, 1fr))'>
        {review.map((reviews,index) => (
    <Card key={index}  p={5} border='1px'  borderColor='gray.200' m={5}  >      
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar src='https://bit.ly/broken-link'/>
        <Box>     
          <Heading  size='sm'>{reviews.username}</Heading>
        </Box>
        <Spacer />
      </Flex>
      <Text>Rating : {reviews.rating}/5</Text>
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      {reviews.reviewtext}
    </Text>
  </CardBody>
</Card>
   ))}
   </SimpleGrid>
</div>
  )
}

export default GetRating



