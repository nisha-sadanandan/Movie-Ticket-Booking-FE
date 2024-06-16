import React from 'react'
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import { Link,useNavigate } from "react-router-dom";


let adminSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().min(6),

});

      const AdminSignup = () => {
        const navigate = useNavigate();
          
        const {register,handleSubmit,formState:{errors}} = useForm({
          resolver: yupResolver(adminSchema),
        })
        const onSubmit = async (data) => {
          try {
            const res = await axios.post(
              "http://localhost:3000/api/v1/admin/signup",
              data,
            );
            console.log(res.data);
            navigate("/admin/login")
           
          } catch (error) {
            console.log(error);
          }
        };
      
  return (
    <div className='flex justify-center items-center h-screen'>
         <form className="flex flex-col gap-3"onSubmit={handleSubmit(onSubmit)}>

          
        <input {...register('name')}
        placeholder='name' type='text'
         className='px-1.5 py-1 border rounded-2xl' />
              {errors.name && <p>{errors.name.message}</p>}

        <input {...register('email')} placeholder='email' type='email'
         className='px-1.5 py-1 border rounded-2xl'/>
         {errors.email && <p>{errors.email.message}</p>}   

        <input {...register('password')} placeholder='password'  type='password'
         className='px-2 py-1 border rounded-2xl'/>
        {errors.password && <p>{errors.password.message}</p>}

       <input type="submit" placeholder='Submit' className='px-2 py-1 border rounded-2xl bg-red-700 text-white'  />

       <p>
         Already have an account?{" "}
        <Link to="/admin/login" className="text-red-500 underline">
          Login
        </Link>
        </p>

  </form>
  </div>
  )
}

export default AdminSignup

