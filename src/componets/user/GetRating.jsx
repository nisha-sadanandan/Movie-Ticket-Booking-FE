import React,{ useState, useEffect } from 'react'
import axios from "axios"
import { Card, CardHeader, CardBody, CardFooter,Flex,Avatar,Box,Heading,Text} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'; 



const GetRating = () => {

    const { movieid } = useParams();


    const[review ,setReview] = useState([])

    useEffect(()=>{

        const getRateReview =async()=>{
            try {

                const res = await axios.get(`http://localhost:3000/api/v1/movie/${movieid}/get-review`)
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
        {review.map((reviews,index) => (
    <Card key={index} maxW='sm'>
   
        
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar src='https://bit.ly/broken-link'/>

        <Box>
        
          <Heading  size='sm'>{reviews.username}</Heading>
      
        </Box>
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
</div>
  )
}

export default GetRating



