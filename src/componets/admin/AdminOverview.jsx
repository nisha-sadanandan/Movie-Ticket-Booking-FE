
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Grid, GridItem,SimpleGrid,Box, Center } from '@chakra-ui/react'
import { Heading, Button,Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const AdminOverview =()=>{

    const[overview ,setOverview] = useState([])

    useEffect(()=>{

        const getOverview =async()=>{
            try {

                const res = await axios.get("http://localhost:3000/api/v1/admin/get-overview")
                const data = await res.data;
                console.log("overview" ,data)
                setOverview(data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getOverview()
    },[]);


    return(

   <div>

<Grid 
  templateAreas={`"header header"`}
  gridTemplateRows={'50px 1fr 30px'}>
  <GridItem pl='2'  area={'header'} fontSize='4xl' color="cyan.900" display="flex" alignItems="center" justifyContent="center">
  WELCOME ADMIN
  </GridItem>
</Grid>

<SimpleGrid
  bg='gray.50'
  columns={{ sm: 2, md: 4 }}
  spacing='8'
  p='10'
  textAlign='center'
  rounded='2xl'
  color='white'
  h='250'
>
  
  <Box boxShadow='2xl' p='6' rounded='2xl' bg='red.500' fontSize='4xl'>
   TotaUser
   <Heading color="black">{overview.totalUser}</Heading>
  </Box>

   
  <Box boxShadow='2xl' p='6' rounded='2xl' bg='red.500' fontSize='4xl'> 
    TotalTheater
    <Heading color="black">{overview.totalTheater}</Heading>
  </Box>

  <Box boxShadow='2xl' p='6'rounded='2xl' bg='red.500' fontSize='4xl' >
    TotalShows
    <Heading color="black">{overview.totalShows}</Heading>
  </Box>

   
  <Box boxShadow='2xl' p='6' rounded='2xl' bg='red.500' fontSize='4xl' cursor="pointer">
    Theaters 
    <Stack direction='row'  align='center' display="flex" alignItems="center" justifyContent="center" >
  <Button colorScheme='teal' variant='outline' color="black" fontSize='xl'>
   GetDetails
  </Button>
</Stack>
  </Box>
</SimpleGrid>
  </div>

)}      


export default AdminOverview