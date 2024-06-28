import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import {useForm} from "react-hook-form"


const AddShowByOwner = () => {

    
  const {register,handleSubmit,formState:{errors}} = useForm()

   
  const [movies,setMovies] = useState([])

  useEffect(()=>{

    const getMovies = async()=>{
        try {

            const res = await axios.get("https://movie-ticket-booking-serverside.onrender.com/api/v1/movie/get-movie")
            const data = await res.data
            console.log("movies",data)
            setMovies(data)  
        } catch (error) {
            console.log(error)
        }
    }

    getMovies()
 },[])

 const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://movie-ticket-booking-serverside.onrender.com/api/v1/owner/add-show",
        data,
      );
      console.log(res.data);
      // navigate("/admin/login")
     
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Show</h1>
      <div className='flex justify-center items-center h-screen -m-16'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-1/4'>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-2">Select Movie:</label>
          <select
            {...register('title', { required: true })}
            className="shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-neutral-300"
          >
            <option value="">Select Movie</option>
            {movies.map((movie,index) => (
              <option key={index}>
                {movie.title}
              </option>
            ))}
          </select>
          {errors.title && <span className="text-red-500 text-sm">Please select a movie</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="theatername" className="block text-sm font-medium mb-2">Enter Theater name:</label>
          <input
            {...register('theatername', { required: true })} 
            type="text"
            className="shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-neutral-300"
          />
           {errors.theatername && <span className="text-red-500 text-sm">Please select Theater name</span>}
          </div>

          <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium mb-2"> Enter location:</label>
          <input
            {...register('location', { required: true })} 
            type="text"
            className="shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-neutral-300"
          />
           {errors.date && <span className="text-red-500 text-sm">Please add location</span>}
          </div>
        
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium mb-2">Date:</label>
          <input
            {...register('date', { required: true })} 
            type="date"
            className="shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-neutral-300"
          />
           {errors.date && <span className="text-red-500 text-sm">Please select a date</span>}
          </div>
          <div className="mb-4">
          <label htmlFor="showtime" className="block text-sm font-medium mb-2">Show Time:</label>
          <input
            {...register('showtime', { required: true })} 
            type="time"
            className="shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-neutral-300"
          />
           {errors.showtime && <span className="text-red-500 text-sm">Please add Showtime</span>}
          </div>
          <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium mb-2">Price:</label>
          <input
            {...register('price', { required: true ,pattern: /^\d+(\.\d{2})?$/ })}
            type="number"
            className="shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-neutral-300"   
          />
           {errors.price && <span className="text-red-500 text-sm">Please add Price</span>}
           </div>
          <button type="submit" disabled={errors.movie|| errors.theatername || errors.date || errors.showtime || errors.price || errors.location} className='bg-black text-gray-50 shadow-sm rounded-md w-full px-3 py-2 focus:outline-none'>
          Submit
        </button>
          </form>
          </div>
          </div>
  )
}

export default AddShowByOwner