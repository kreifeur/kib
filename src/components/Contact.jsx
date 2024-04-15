import React from 'react'
import { LiaMountainSolid } from "react-icons/lia";
import Button from './Button';

const Contact = () => {
  return (
    <div className='bg-gray-100 p-5 flex items-center justify-center '>
        <div className="sm:w-[25%] bg-white p-8 flex flex-col gap-6 items-center">
        <input
          placeholder="First Name"
          className="px-3 py-2 w-full outline-none bg-gray-100"
          type="text"
          name=""
          id=""
        />
        <input
          placeholder="Email Adress"
          className="px-3 py-2 w-full outline-none bg-gray-100 "
          type="text"
          name=""
          id=""
        />

        <textarea placeholder='Write Your Message ..' className='px-3 py-2 w-full outline-none bg-gray-100 ' name="" id="" cols="30" rows="10">

        </textarea>
        <div className="flex gap-2 items-center ">
          <input type="checkbox" name="" id="" />
          <div>I accept all the terms of privacy</div>
        </div>
        <Button name='GET STARTED TODAY'/>
      </div>

    </div>
  )
}

export default Contact