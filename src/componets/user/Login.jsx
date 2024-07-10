// import React from 'react'
// import {useForm} from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import axios from "axios"
// import { Link,useNavigate } from "react-router-dom";


// let userSchema = yup.object({
//   email: yup.string().email().required(),
//   password: yup.string().min(6).required(),

// });

//      const Login = () => {
//       const navigate = useNavigate();
//         const {register,handleSubmit,formState:{errors}} = useForm({
//           resolver: yupResolver(userSchema),
//         })
//         const onSubmit = async (data) => {
//           try {
//             const res = await axios.post(
//               "https://movie-ticket-booking-serverside-be.onrender.com/api/v1/users/login",
//               data,
//             );
//             console.log(res.data);
//             navigate("/user")

           
//           } catch (error) {
//             console.log(error);
//           }
//         };
      
//   return (

//     <div className='h-screen flex flex-col items-center justify-center'>
//     <h1 className='font-semibold text-4xl '>Login</h1> 
//          <form className='flex flex-col gap-3  w-1/4 mt-8' onSubmit={handleSubmit(onSubmit)}>
//         <input {...register('email')} placeholder='email' type='email'
//          className='px-1.5 py-1 border rounded-2xl border-neutral-500'/>
//          {errors.email &&  <p className="text-red-500 text-sm">{errors.email.message}</p>} 
        
//         <input {...register('password')} placeholder='password'  type='password'
//          className='px-2 py-1 border rounded-2xl border-neutral-500'/>
//         {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

//        <input type="submit" placeholder='Submit' className='px-2 py-1 border rounded-2xl bg-red-700 text-white cursor-pointer'/>
       
//        <p>
//         Don't have an account?{" "}
//         <Link to="/user/signup" className="text-red-500 underline">
//           Create new account
//         </Link>
//       </p>
//   </form>
//   </div>
//   )
// }

// export default Login






import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

let userSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://movie-ticket-booking-serverside-be.onrender.com/api/v1/users/login",
        data
      );

      if (res.status === 200) {
        const responseMessage = res.data;

        if (responseMessage === "Logged in!") {
          setLoginSuccess(true);
        } else {
          setLoginError(responseMessage);
        }
      } else {
        setLoginError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      if (error.response) {
        setLoginError(error.response.data.message || 'Login failed. Please check your credentials.');
      } else if (error.request) {
        setLoginError('No response from server. Please try again later.');
      } else {
        setLoginError('An error occurred. Please try again.');
      }
      console.error(error);
    }
  };

  const handleSuccessClose = () => {
    setLoginSuccess(false);
    navigate("/user");
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='font-semibold text-4xl'>Login</h1>
      <form className='flex flex-col gap-3 w-1/4 mt-8' onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email')}
          placeholder='Email'
          type='email'
          className='px-1.5 py-1 border rounded-2xl border-neutral-500'
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        
        <input
          {...register('password')}
          placeholder='Password'
          type='password'
          className='px-2 py-1 border rounded-2xl border-neutral-500'
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <input
          type="submit"
          placeholder='Submit'
          className='px-2 py-1 border rounded-2xl bg-red-700 text-white cursor-pointer'
        />

        {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
        
        <p>
          Don't have an account?{" "}
          <Link to="/user/signup" className="text-red-500 underline">
            Create new account
          </Link>
        </p>
      </form>

      {loginSuccess && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded shadow-lg'>
            <h2 className='text-2xl mb-4'>Login Successfully!</h2>
            <p className='mb-4'>You have successfully logged in.</p>
            <button
              className='bg-red-700 text-white px-4 py-2 rounded'
              onClick={handleSuccessClose}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
