import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn,setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
        <div>
            <Header/>
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='bg-img'/>
            </div>
        </div>
        <form className='w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>
              {
                isSignIn ? 'Sign In' : 'Sign Up'
              }
            </h1>
            {!isSignIn && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800'/>}            
            <input type='email' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800'/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
              {
                isSignIn ? 'Sign In' : 'Sign Up'
              }
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
              {
                isSignIn ? "New to Netflix? Sign up now." : "Already Registered? Sign In now."
              }
            </p>
        </form>
    </div>
  )
}

export default Login