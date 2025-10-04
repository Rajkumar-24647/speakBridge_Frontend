import React from 'react'
import { Link } from 'react-router-dom'

const CreateCommunity = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-t from-zinc-950 via-black to-gray-950'>
        <div className='w-full min-h-screen flex items-center flex-col gap-4'>
            //! starting
            <div>
                <h1 className='text-6xl text-center bg-gradient-to-b from-purple-500 to-purple-100 text-transparent bg-clip-text font-semibold'>Create your own community</h1>
               <div className='flex justify-center mt-3'>

                <p className='text-xl text-gray-200 text-center w-[600px]'>Create your community and manage your community itselt by your choice and spread your culture all over the country</p>
               </div>
            </div>

            //! inputFields
           
            <div className='p-5 rounded-2xl border-1 border-purple-700'>
                 <div className="create flex flex-col gap-3">
                <div className='flex flex-col gap-1'>
                    <label className='text-xl text-purple-800 font-semibold' htmlFor="about">Who are you?</label>
                    <textarea className='border-1 resize-none outline-none border-purple-700 w-96 h-24 text-gray-300 p-2 rounded-lg' name="about" id="about" placeholder='Tell about yourself....' required></textarea>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-xl text-purple-800 font-semibold' htmlFor="">Community Name</label>
                    <input className='border-purple-700 w-96 border-1 outline-none text-gray-300 p-2 rounded-lg' type="text" placeholder='name' required/>
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-xl text-purple-800 font-semibold' htmlFor="">Description of the community</label>
                     <textarea className='border-1 resize-none outline-none border-purple-700 w-96 h-24 text-gray-300 p-2 rounded-lg' name="about" id="about" placeholder='Describe community...' required></textarea>
                    

                </div>
            </div>

            <div className=" h-16 flex justify-center items-center">
               
               <Link to={"/"} className='bg-gradient-to-r from-pink-600 to-purple-600 w-60 flex justify-center items-center rounded-lg p-2'>
               Create community
               </Link>

            </div>
            </div>

        
        </div>

    </div>
  )
}

export default CreateCommunity