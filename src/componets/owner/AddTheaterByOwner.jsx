
import React from 'react'
import axios from 'axios'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'




const AddTheaterByOwner = () => {

  const [showPopup,setShowPopup] = useState(false)
  const [theaterPopup,setTheaterPopup] = useState(false)
  const navigate = useNavigate()


  const {register,handleSubmit,formState:{errors}} = useForm()
   
     const onSubmit = async (data) => {
        try {
          const res = await axios.post(
            "https://movie-ticket-booking-serverside-be.onrender.com/api/v1/owner/add-theater",
            data
          );
            setShowPopup(true)
         } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data === "theater already exists") {
              setTheaterPopup(true);
            } else {
              console.error(error);
            }
          }
        };
      const handleClose = () => {
        setShowPopup(false);
        navigate("/owner");
      };
    
      const handlePopupClose = () => {
        setTheaterPopup(false);
        navigate("/owner");
      };
    


  return (
<div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Theater</h1>
      <div className='flex justify-center items-center h-screen -m-48'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-1/4'>
        <div className="mb-4">
          <label htmlFor="theatername" className="block text-sm font-medium mb-2">Enter Theatername</label>
          <input
            {...register('theatername', { required: true })} 
            type="text"
            className="shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-neutral-300"
          />
           {errors.theatername && <span className="text-red-500 text-sm">Please add Theatername</span>}
          </div>
          <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium mb-2">Enter Location:</label>
          <input
            {...register('location', { required: true })} 
            type="text"
            className="shadow-sm rounded-md w-full  px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-neutral-300"
          />
           {errors.location && <span className="text-red-500 text-sm">Please add location</span>}
          </div>
          <button type="submit" disabled={errors.theatername|| errors.location} className=' bg-black w-full  px-3 py-2 text-gray-50 rounded'>
          Submit
         </button>
         </form>
         
          {showPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded shadow-lg'>
            <p className='mb-4'>Theater Added successfully</p>
            <button
              className='bg-black text-white px-4 py-2 rounded'
              onClick={handleClose}
            >
              OK
            </button>
          </div>
        </div>
      )}
{theaterPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded shadow-lg'>
            <p className='mb-4'>Theater Already added</p>
            <button
              className='bg-red-700 text-white px-4 py-2 rounded'
              onClick={handlePopupClose}
            >
              OK
            </button>
          </div>
        </div>
      )}
          </div>
          </div>
  )
}

export default AddTheaterByOwner














// import React from 'react'
// import axios from 'axios'
// import {useForm} from "react-hook-form"
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'




// const AddTheaterByOwner = () => {

//   const [showPopup,setShowPopup] = useState(false)
//   const [theaterPopup,setTheaterPopup] = useState(false)

//   const navigate = useNavigate()


//   const {register,handleSubmit,formState:{errors}} = useForm()
   
//      const onSubmit = async (data) => {
//         try {
//           const res = await axios.post(
//             "https://movie-ticket-booking-serverside-be.onrender.com/api/v1/owner/add-theater",
//             data
//           );

//           const responseMessage = res.data;
//           if (responseMessage === "Theater already exists"){
//             alert("theater exist")
//             setTheaterPopup(true)
           
//           } else {
//             console.log(res.data);
//             setShowPopup(true);
//           }       
//         } catch (error) {
//           console.log(error);
//         }
//       };

//       const handleClose = () => {
//         setShowPopup(false);
//         navigate("/owner");
//       };
    
//       const handlePopupClose = () => {
//         setTheaterPopup(false);
//         navigate("/owner");
//       };
    


//   return (
// <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4 text-center">Add Theater</h1>
//       <div className='flex justify-center items-center h-screen -m-48'>
//       <form onSubmit={handleSubmit(onSubmit)} className='w-1/4'>
//         <div className="mb-4">
//           <label htmlFor="theatername" className="block text-sm font-medium mb-2">Enter Theatername</label>
//           <input
//             {...register('theatername', { required: true })} 
//             type="text"
//             className="shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-neutral-300"
//           />
//            {errors.theatername && <span className="text-red-500 text-sm">Please add Theatername</span>}
//           </div>
//           <div className="mb-4">
//           <label htmlFor="location" className="block text-sm font-medium mb-2">Enter Location:</label>
//           <input
//             {...register('location', { required: true })} 
//             type="text"
//             className="shadow-sm rounded-md w-full  px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-neutral-300"
//           />
//            {errors.location && <span className="text-red-500 text-sm">Please add location</span>}
//           </div>
//           <button type="submit" disabled={errors.theatername|| errors.location} className=' bg-black w-full  px-3 py-2 text-gray-50 rounded'>
//           Submit
//          </button>
//          </form>

//          {theaterPopup && (
//         <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
//           <div className='bg-white p-6 rounded shadow-lg'>
//             <p className='mb-4'>Theater Already added</p>
//             <button
//               className='bg-black text-white px-4 py-2 rounded'
//               onClick={handlePopupClose}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
         
//          {showPopup && (
//         <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
//           <div className='bg-white p-6 rounded shadow-lg'>
//             <p className='mb-4'>Theater Added successfully</p>
//             <button
//               className='bg-black text-white px-4 py-2 rounded'
//               onClick={handleClose}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}

//           </div>
//           </div>
//   )
// }

// export default AddTheaterByOwner


