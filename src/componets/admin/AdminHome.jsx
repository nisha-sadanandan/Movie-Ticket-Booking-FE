import React from 'react'
import { Box,Text,Image} from "@chakra-ui/react"
import welcome from "../images/welcome.jpg"




const AdminHome = () => {
  return (
    <div>
        
        <Box w='100%' >
        <Image src={welcome} alt='welcome' />
      </Box> 
      
    
    </div>
  )
}

export default AdminHome


