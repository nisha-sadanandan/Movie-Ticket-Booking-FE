import React from 'react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'


const Footer = () => {
  return (
    <div className='bg-black'>
    <h2 className='text-red-600 font-semibold text-3xl text-center mb-4'>SHOWTIME</h2>
    <div className='flex justify-center text-white'>
    <List spacing={3} >
  <ListItem>
   AboutUs
  </ListItem>
  <ListItem>
    contactUs
  </ListItem>
  <ListItem>
  Service
  </ListItem>
  <ListItem>
  career
  </ListItem>
</List>
    </div>  
    <div>
      <p className='text-white'>copywrite@2024</p>
    </div>   
    </div>
  )
}

export default Footer