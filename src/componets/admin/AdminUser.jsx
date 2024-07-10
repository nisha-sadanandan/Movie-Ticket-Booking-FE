import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'




const AdminUser = () => {

    const [user, setUser] = useState([]);
   
    
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/v1/users/get-user'); 
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching thetaers:', error);
          
        }
      };
  
      fetchUsers();
    }, []);




  return (
    <div>
        <h2 className='text-4xl m-6 text-center  font-semibold'>User Details</h2>
        <div>
    <TableContainer>
    <Table variant='simple' >
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Remarks</Th>
          
        </Tr>
      </Thead>
      {user.map((users,index) => (
      <Tbody key={index}>
        <Tr>
          <Td>{users.name}</Td>
          <Td>{users.email}</Td>
          <Td>NA</Td>
         
        </Tr>
      </Tbody>
       ))}
    </Table>
  </TableContainer>
  </div>
  

  </div>
  )
}

export default AdminUser