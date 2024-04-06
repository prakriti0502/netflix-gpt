import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <div>
            <Header/>
            <div className='absolute'>
                <img src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg' alt='bg-img'/>
            </div>
        </div>
        <form className='w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>Sign In</h1>
            <input type='email' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800'/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
        </form>
    </div>
  )
}

export default Login