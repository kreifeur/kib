import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className=' w-full flex flex-col items-center p-5 gap-10 bg-gray-100'>
        <div className='flex items-center justify-between w-full sm:w-[80%] sm:flex-row flex-col gap-4'>
            <div className='sm:w-[30%] bg-gradient-to-r from-black via-gray-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl font-bold w-full'>
                Our service we can help you
            </div>
            <div className='text-gray-500 w-full sm:w-[50%]'>
                we have many interesting services with profesional team , that will help your work to be better
            </div>

        </div>

        <div className='grid sm:grid-cols-3 grid-cols-1 gap-6  w-full sm:w-[80%]'>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>

        </div>

    </div>
  )
}

export default Services