import axios from 'axios'
import { useEffect,useState } from 'react'
import { Grid, GridItem,SimpleGrid,Box, Center } from '@chakra-ui/react'
import { Heading, Button,Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';



const AdminOverview =()=>{

    const[overview ,setOverview] = useState([])
    const navigate = useNavigate()


    useEffect(()=>{

        const getOverview =async()=>{
            try {

                const res = await axios.get("https://movie-ticket-booking-serverside-be.onrender.com/api/v1/admin/get-overview")
                const data = await res.data;
                console.log("overview" ,data)
                setOverview(data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getOverview()
    },[]);



    const handleTheaterClick = () => {
  
      navigate("/admin/overview/theater")
};

const handleUserClick = () => {
  
  navigate("/admin/overview/users")
};

const handleShowClick = () => {
  
  navigate("/admin/overview/show")
};


    return(

  
<SimpleGrid
 
  columns={{ sm: 2, md: 4 }}
  spacing='8'
  p='10'
  textAlign='center'
  rounded='2xl'
  color='white'
  h='250'
  marginLeft={48}
  marginTop={24}

>
  
  <Box boxShadow='2xl' p='6' rounded='2xl' bg='red.500' fontSize='4xl'>
   TotaUser
   <Heading color="black">{overview.totalUser}</Heading>
   <Stack direction='row'  align='center' display="flex" alignItems="center" justifyContent="center" >
  <Button colorScheme='teal' variant='outline' color="black" fontSize='xl' onClick={() => handleUserClick()} size='sm' marginTop={3}>
   GetDetails
  </Button>
</Stack>
  </Box>

   
  <Box boxShadow='2xl' p='6' rounded='2xl' bg='red.500' fontSize='4xl'> 
    TotalTheater
    <Heading color="black">{overview.totalTheater}</Heading>
    <Stack direction='row'  align='center' display="flex" alignItems="center" justifyContent="center" >
  <Button colorScheme='teal' variant='outline' color="black" fontSize='xl' size='sm' marginTop={3} onClick={() => handleTheaterClick()}>
   GetDetails
  </Button>
</Stack>
  </Box>

  <Box boxShadow='2xl' p='6'rounded='2xl' bg='red.500' fontSize='4xl' >
    TotalShows
    <Heading color="black">{overview.totalShows}</Heading>
    <Stack direction='row'  align='center' display="flex" alignItems="center" justifyContent="center" >
  <Button colorScheme='teal' variant='outline' color="black" fontSize='xl' onClick={() => handleShowClick()} size='sm' marginTop={3}>
   GetDetails
  </Button>
</Stack>
  </Box>

   
  {/* <Box boxShadow='2xl' p='6' rounded='2xl' bg='red.500' fontSize='4xl' cursor="pointer">
    Theaters 
    <Stack direction='row'  align='center' display="flex" alignItems="center" justifyContent="center" >
  <Button colorScheme='teal' variant='outline' color="black" fontSize='xl' onClick={() => handleTheaterClick()}>
   GetDetails
  </Button>
</Stack>
  </Box> */}
</SimpleGrid>


)}      


export default AdminOverview