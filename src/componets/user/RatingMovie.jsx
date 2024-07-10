// import React from 'react'
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import {useForm} from "react-hook-form"


// const RatingMovie = () => {
//   const { movieid } = useParams();

//   const {register,handleSubmit,formState:{errors}} = useForm()


//     const onSubmit = async (data) => {
//       try {
//         const res = await axios.post(
//           `https://movie-ticket-booking-serverside-be.onrender.com/api/v1/movie/${movieid}/add-review`,
//           data,
//         );
//         console.log(res.data);
//         alert("submission suceessful")
//         // navigate("/admin/login")
       
//       } catch (error) {
//         console.log(error);
//       }
//     };

//   return (
//     <div className="px-4 py-8">
//     <h1 className="text-2xl font-bold mb-4 text-center">Rating and Review</h1>
//     <div className='flex justify-center items-center h-screen -m-36'>
//     <form onSubmit={handleSubmit(onSubmit)} className='w-1/4'>
//       <div className="mb-4">
//         <label htmlFor="username" className="block text-sm font-medium mb-2  ">Enter your name:</label>
//         <input
//           {...register('username', { required: true })} 
//           type="text"
//           className=" rounded w-full px-3 py-2  border  border-neutral-500 "
//         />
//          {errors.username && <span className="text-red-500 text-sm">Please add username</span>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="rating" className="block text-sm font-medium mb-2">Rate on movie</label>
//           <select
//             {...register('rating', { required: true })}
//             className=" rounded w-full px-3 py-2  border  border-neutral-500"  
//           >
//             <option value="">Select rating</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>

//           </select>
//           {errors.rating && <span className="text-red-500 text-sm">Please select a rating</span>}
//         </div>
//         <div className="mb-4">
//         <label htmlFor="reviewtext" className="block text-sm font-medium mb-2">What you think  about this movie</label>
//         <textarea
//           {...register('reviewtext', { required: true})}
//           type="text"
//           className=" rounded w-full px-3 py-2  border  border-neutral-500"   
//         />
//          {errors.reviewtext && <span className="text-red-500 text-sm">Please add review</span>}
//          </div>
//         <button type="submit" disabled={errors.username|| errors.rating|| errors.reviewtext} className='px-2 py-1 border-2 w-full rounded bg-black text-white cursor-pointer'>
//         Submit
//       </button>
//         </form>
//         </div>
//         </div>
//   )
// }

// export default RatingMovie




// import React, { useState} from 'react'
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import {useForm} from "react-hook-form"



// const RatingMovie = () => {
//   const { movieid } = useParams();
//   const[existingReview,setExistingReview] = useState([])
//   const [reviewPopup, setReviewPopup] = useState(false); 
//   const [existingReviewPopup, setExistingReviewPopup] = useState(false); 
 


//   const {register,handleSubmit,formState:{errors}} = useForm()



//     const onSubmit = async (data) => {
      
    

//       try {
//         const res = await axios.get( 
//           `http://localhost:3000/api/v1/movie/${movieid}/get-review/username=${data.username}`, { params: { username: data.username } }
//         );
  
//         setExistingReview(res.data);
//         console.log(res.data)
        
        
//         if (!existingReview) {
//           const submitResponse = await axios.post(
//             `https://movie-ticket-booking-serverside-be.onrender.com/api/v1/movie/${movieid}/add-review`,
//             data
//           );
//          console.log(submitResponse.data);
//          setReviewPopup(true)  
           
        
//         } else {
//           setExistingReviewPopup(true)
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
 

//     const handleReviewPopupClose = () => {
//       setReviewPopup(false);
//     };
  
//     const handleExistingReviewPopupClose = () => {
//       setExistingReviewPopup(false);
//     };




//   return (
//     <div className="px-4 py-8">
//     <h1 className="text-2xl font-bold mb-4 text-center">Rating and Review</h1>
//     <div className='flex justify-center items-center h-screen -m-36'>
//     <form onSubmit={handleSubmit(onSubmit)} className='w-1/4'>
//       <div className="mb-4">
//         <label htmlFor="username" className="block text-sm font-medium mb-2  ">Enter your name:</label>
//         <input
//           {...register('username', { required: true })} 
//           type="text"
//           className=" rounded w-full px-3 py-2  border  border-neutral-500 "
         
//         />
//          {errors.username && <span className="text-red-500 text-sm">Please add username</span>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="rating" className="block text-sm font-medium mb-2">Rate on movie</label>
//           <select
//             {...register('rating', { required: true })}
//             className=" rounded w-full px-3 py-2  border  border-neutral-500"  
//           >
//             <option value="">Select rating</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>

//           </select>
//           {errors.rating && <span className="text-red-500 text-sm">Please select a rating</span>}
//         </div>
//         <div className="mb-4">
//         <label htmlFor="reviewtext" className="block text-sm font-medium mb-2">What you think  about this movie</label>
//         <textarea
//           {...register('reviewtext', { required: true})}
//           type="text"
//           className=" rounded w-full px-3 py-2  border  border-neutral-500"   
//         />
//          {errors.reviewtext && <span className="text-red-500 text-sm">Please add review</span>}
//          </div>
//         <button type="submit" disabled={errors.username|| errors.rating|| errors.reviewtext} className='px-2 py-1 border-2 w-full rounded bg-black text-white cursor-pointer'>
//         Submit
//       </button>
//         </form>
//         </div>
//         {reviewPopup && (
//           <div className='flex justify-center'>
//         <div className="border-solid border px-3 py-3 h-32 w-72 border-slate-600">
//           <div>Your review has been submitted successfully!</div>
//           <div  className='flex justify-center mt-8'>
//           <button className='bg-red-700 text-white px-1 py-1 rounded' onClick={handleReviewPopupClose}>Close</button>
//         </div>
//         </div>
//         </div>
//       )}

//       {existingReviewPopup && (
//         <div className='flex justify-center'>
//         <div className="border-solid border px-3 py-3 h-32 w-72 border-slate-600">
//          <div>You already reviewed this movie!</div>
//           <div className='flex justify-center mt-8'>
//           <button className='bg-black text-white px-1 py-1 rounded' onClick={handleExistingReviewPopupClose}>Close</button>
//           </div>
//           </div>
//         </div>
//       )}
//         </div>
//   )
// }

// export default RatingMovie


import React, { useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";


const RatingMovie = () => {
  const { movieid } = useParams();
  const navigate = useNavigate();
  const [reviewPopup, setReviewPopup] = useState(false); 
 const [existingReviewPopup, setExistingReviewPopup] = useState(false); 

  const {register,handleSubmit,formState:{errors}} = useForm()


    const onSubmit = async (data) => {
      try {
        const res = await axios.post(
          `https://movie-ticket-booking-serverside-be.onrender.com/api/v1/movie/${movieid}/add-review`,
          data,
        );
        const responseMessage = res.data;
        if (responseMessage === "you have already reviewed") {
          setExistingReviewPopup(true)
        } else {
          console.log(res.data);
          setReviewPopup(true);
        }     
      } catch (error) {
        console.log(error);
      }
    };

    const handleReviewPopupClose = () => {
            setReviewPopup(false);
            navigate("/user");
          };
        
          const handleExistingReviewPopupClose = () => {
            setExistingReviewPopup(false);
            navigate("/user");
          };

  return (
    <div className="px-4 py-8">
    <h1 className="text-2xl font-bold mb-4 text-center">Rating and Review</h1>
    <div className='flex justify-center items-center h-screen -m-36'>
    <form onSubmit={handleSubmit(onSubmit)} className='w-1/4'>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium mb-2  ">Enter your name:</label>
        <input
          {...register('username', { required: true })} 
          type="text"
          className=" rounded w-full px-3 py-2  border  border-neutral-500 "
        />
         {errors.username && <span className="text-red-500 text-sm">Please add username</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium mb-2">Rate on movie</label>
          <select
            {...register('rating', { required: true })}
            className=" rounded w-full px-3 py-2  border  border-neutral-500"  
          >
            <option value="">Select rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>
          {errors.rating && <span className="text-red-500 text-sm">Please select a rating</span>}
        </div>
        <div className="mb-4">
        <label htmlFor="reviewtext" className="block text-sm font-medium mb-2">What you think  about this movie</label>
        <textarea
          {...register('reviewtext', { required: true})}
          type="text"
          className=" rounded w-full px-3 py-2  border  border-neutral-500"   
        />
         {errors.reviewtext && <span className="text-red-500 text-sm">Please add review</span>}
         </div>
        <button type="submit" disabled={errors.username|| errors.rating|| errors.reviewtext} className='px-2 py-1 border-2 w-full rounded bg-black text-white cursor-pointer'>
        Submit
      </button>
        </form>
       
        {reviewPopup && (

     <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
     <div className='bg-white p-6 rounded shadow-lg'>
     <p className='mb-4'>Your review has been submitted successfully!</p>
     <button
    className='bg-black text-white px-4 py-2 rounded'
    onClick={handleReviewPopupClose}
  >
    OK
  </button>
   </div>
   </div>
)}


      {existingReviewPopup && (

<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
<div className='bg-white p-6 rounded shadow-lg'>
<p className='mb-4'>You already reviewed this movie!</p>
<button
className='bg-red-700 text-white px-4 py-2 rounded'
onClick={handleExistingReviewPopupClose}>Close</button>
</div>
</div>

)}
       
 </div>
</div>
  )
}

export default RatingMovie





