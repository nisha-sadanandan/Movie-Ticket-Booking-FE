import React from 'react'
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import { Link,useNavigate} from "react-router-dom";



let adminSchema = yup.object({
  email: yup.string().email(),
  password: yup.string().min(6),

});

   const AdminLogin = () => {
    const navigate = useNavigate();
          
        const {register,handleSubmit,formState:{errors}} = useForm({
          resolver: yupResolver(adminSchema),
        })
        const onSubmit = async (data) => {
          try {
            const res = await axios.post(
              "https://movie-ticket-booking-serverside.onrender.com/api/v1/admin/login",
              data,
            );
            console.log(res.data);
            navigate("/admin")
          } catch (error) {
            console.log(error);
          }
        };
      
  return (
    <div>
    <div className='h-screen flex flex-col items-center justify-center'> 
    <h1 className='font-semibold text-4xl '>Login</h1> 
         <form className='flex flex-col gap-3  w-1/4 mt-8' onSubmit={handleSubmit(onSubmit)}>

        <input {...register('email')} placeholder='email' type='email'
         className='px-1.5 py-1 border rounded-2xl border-neutral-500'/>
         {errors.email && <p>{errors.email.message}</p>}   

        <input {...register('password')} placeholder='password'  type='password'
         className='px-2 py-1 border rounded-2xl border-neutral-500'/>
        {errors.password && <p>{errors.password.message}</p>}

       <input type="submit" placeholder='Submit' className='px-2 py-1 border rounded-2xl bg-red-700 text-white'  />

       <p>
        Don't have an account?{" "}
        <Link to="/admin/signup" className="text-red-500 underline">
          Create new account
        </Link>
      </p>

  </form>
  </div>
  </div>
  )
}

export default AdminLogin

