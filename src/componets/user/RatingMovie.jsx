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
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-4">Add Rating and Review</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium mb-2">Enter your name:</label>
        <input
          {...register('username', { required: true })} 
          type="text"
          className="shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
         {errors.username && <span className="text-red-500 text-sm">Please add username</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium mb-2">Rate on movie</label>
          <select
            {...register('rating', { required: true })} // Register theater ID
            className="shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
          className="shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"   
        />
         {errors.reviewtext && <span className="text-red-500 text-sm">Please add review</span>}
         </div>
        <button type="submit" disabled={errors.username|| errors.rating|| errors.reviewtext}>
        Submit
      </button>
        </form>
        </div>
  )
}

export default RatingMovie