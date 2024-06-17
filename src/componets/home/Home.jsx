import React from 'react'
import { Box,Text,Image} from "@chakra-ui/react"
import home from "../images/homepage.jpg"

const Home = () => {
  return (
    <div>
        <Box w='100%' >
        <Text
        bgGradient='linear(to-l ,#a8dadc, #003566 )'
        bgClip='text'
        fontSize='3xl'
        fontWeight='extrabold'
      >
        Welcome to Limitless Entertainment
      </Text>
        <Image src={home} alt='Dan Abramov' />
      </Box> 
        
       

   </div>

  )
}

export default Home