import React from 'react'
import Heading from '../components/Heading'
import Input from '../components/Input'
import State from '../components/State'
import { Box } from 'lucide-react'
import Interest from '../components/Interest'
import Button from '../components/Button'
import Footer from '../components/Footer'

const Signup = () => {
  return (
    <div className='w-full h-screen bg-gray-950 flex justify-center items-center flex-col '>
       
       <div className='flex justify-center items-center flex-col border-1 border-gray-100  rounded-lg'>
         <Heading heading={"Registeration page"} subHeading={"Register to explore the native lannguages and culture"}/>
        <Input label={"Enter your name"} type={"text"} placeholder={"alice"}/>
        <Input label={"Enter your email"} type={"email"} placeholder={"alice@gmail.com"} />
        <Input label={"Enter password"} type={"password"} placeholder={"alice123$123"} />
        <div className='mt-2'>
            <State />
        </div>
        <div className='mt-2'>
          <Interest />
        </div>
        <div className='w-[300px]'>
          <Button name={"Signup"} to='/'/>
        </div>
        <div className='mt-2'>
          <Footer main={"Already have an account?"} to={"/signin"} name={"Signin"} />
        </div>
       </div>
      
    </div>
  )
}

export default Signup
