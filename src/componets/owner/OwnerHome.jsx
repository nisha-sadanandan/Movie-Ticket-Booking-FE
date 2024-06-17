import React from 'react'
import { Box,Text,Image} from "@chakra-ui/react"
import theater from "../images/theater.jpg"

const OwnerHome = () => {
  return (
    <div>
       <Box w='100%' >
        <Text
        bgGradient='linear(to-l ,#6f1d1b, #eae2b7 )'
        bgClip='text'
        fontSize='3xl'
        fontWeight='extrabold'
      >
        Welcome to ShowTime
      </Text>
        <Image src={theater} alt='home' />
      </Box> 
        

    </div>
  )
}

export default OwnerHome