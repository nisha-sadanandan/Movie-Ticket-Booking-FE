import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useForm} from "react-hook-form"


const RatingMovie = () => {
  const { movieid } = useParams();

  const {register,handleSubmit,formState:{errors}} = useForm()


    const onSubmit = async (data) => {
      try {
        const res = await axios.post(
          `https://movie-ticket-booking-serverside.onrender.com/api/v1/movie/${movieid}/add-review`,
          data,
        );
        console.log(res.data);
        alert("submission suceessful")
        // navigate("/admin/login")
       
      } catch (error) {
        console.log(error);
      }
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
            {...register('rating', { required: true })} // Register theater ID
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
        </div>
        </div>
  )
}

export default RatingMovie