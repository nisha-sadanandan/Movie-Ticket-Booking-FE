import React from 'react'
import axios from 'axios'
import {useForm} from "react-hook-form"





const AddTheaterByOwner = () => {

  const {register,handleSubmit,formState:{errors}} = useForm()
   
     const onSubmit = async (data) => {
        try {
          const res = await axios.post(
            "https://movie-ticket-booking-serverside.onrender.com/api/v1/owner/add-theater",
            data
          );
          console.log(res.data);
          // navigate("/admin/login")
         
        } catch (error) {
          console.log(error);
        }
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
          </div>
          </div>
  )
}

export default AddTheaterByOwner