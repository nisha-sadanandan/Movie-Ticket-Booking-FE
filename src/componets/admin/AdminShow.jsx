// import React, { useState,useEffect } from 'react'
// import axios from 'axios'
// import { Card, CardHeader, CardBody, CardFooter,SimpleGrid,Heading,Button,Text,Stack} from '@chakra-ui/react'
// import { DeleteIcon} from '@chakra-ui/icons'


// const AdminShow = () => {

//     const [show,setShow] = useState([])

//     useEffect(() => {
//         const fetchShow = async () => {
//           try {
//             const response = await axios.get('http://localhost:3000/api/v1/show/get-show'); 
//             setShow(response.data);
//           } catch (error) {
//             console.error('Error fetching thetaers:', error);
            
//           }
//         };
    
//         fetchShow();
//       }, []);
  

//       const handleDelete = async (shows) => {
//         try {
//           const response = await axios.delete('http://localhost:3000/api/v1/show/delete-show', { data: shows });
//           if (response.status === 200) {
//             alert('Show deleted successfully');
//             setShow(show.filter(s => s !== shows)); 
    
//           }
//         } catch (error) {
//           console.error('Error deleting show:', error);
//           alert('Failed to delete show');
//         }
//       };
  



//   return (
//     <div>
//     <h2 className='text-2xl m-6 text-center'>Show Details</h2>
// <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
// {show.map((shows,index) => (
//   <Card key={index}>
//     <CardHeader>
//       <Heading size='md'>{shows.title}</Heading>
//     </CardHeader>
//     <CardBody>
//       <Text>{shows.theatername}</Text>
//       <Text>{shows.location}</Text>

// <Stack spacing={4} direction='row' align='center' marginTop={4}>
//   <Button colorScheme='pink' size='sm'>
//   {shows.date}
//   </Button>
//   <Button colorScheme='purple' size='sm'  variant='outline'>
//   {shows.showtime}
//   </Button>
//   <Button colorScheme='teal' size='sm'>
//   {shows.price} Rs
//   </Button>
// </Stack>
// </CardBody>  
// <CardFooter>
// <Stack direction='row' spacing={4}>
//   <Button leftIcon={<DeleteIcon />} colorScheme='red' variant='solid' onClick={() => handleDelete()}>
//     Delete
//   </Button>
// </Stack>
// </CardFooter> 
//   </Card>
//   ))}
// </SimpleGrid>
//   </div>
//   )
// }

// export default AdminShow


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text, Stack } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';


const AdminShow = () => {
  const [shows, setShows] = useState([]);
  const [showPopup, setshowPopup] = useState(false);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/show/get-show');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  const handleDelete = async (show) => {
    try {
      const response = await axios.delete('http://localhost:3000/api/v1/show/delete-show', { data: show });
      if (response.status === 200) {
        setShows(shows.filter(s => s !== show)); 
        setshowPopup(true)
      }
    } catch (error) {
      console.error('Error deleting show:', error);
      alert('Failed to delete show');
    }
  };

  const handlePopupClose = () => {
    setshowPopup(false)
    
  };

  return (
    <div>
    <div>
      <h2 className='text-4xl m-6 text-center font-semibold'>Show Details</h2>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        {shows.map((show, index) => (
          <Card key={index}>
            <CardHeader>
              <Heading size='md'>{show.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{show.theatername}</Text>
              <Text>{show.location}</Text>
              <Stack spacing={4} direction='row' align='center' marginTop={4}>
                <Button colorScheme='pink' size='sm'>
                  {show.date}
                </Button>
                <Button colorScheme='purple' size='sm' variant='outline'>
                  {show.showtime}
                </Button>
                <Button colorScheme='teal' size='sm'>
                  {show.price} Rs
                </Button>
              </Stack>
            </CardBody>
            <CardFooter>
              <Stack direction='row' spacing={4}>
                <Button leftIcon={<DeleteIcon />} colorScheme='red' variant='solid' onClick={() => handleDelete(show)}>
                  Delete
                </Button>
              </Stack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      </div>

      {showPopup && (

<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
<div className='bg-white p-6 rounded shadow-lg'>
<p className='mb-4'>Show Successfully Deleted!</p>
<button
className='bg-black text-white px-4 py-2 rounded'
onClick={handlePopupClose}
>
OK
</button>
</div>
</div>
)}
    </div>
  );
};

export default AdminShow;
