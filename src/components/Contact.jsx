import React from 'react'
import { LiaMountainSolid } from "react-icons/lia";

const Contact = () => {
  return (
    <div className='bg-gray-100 p-5 flex items-center justify-center '>
        <div className="sm:w-[25%] bg-white p-8 flex flex-col gap-6 items-center">
        <div>
          <LiaMountainSolid className="text-6xl" />
        </div>
        <div className="font-bold text-xl">Start your journey</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, adipisci.
        </p>
        <input
          placeholder="First Name"
          className="px-3 py-2 w-full outline-none bg-gray-100"
          type="text"
          name=""
          id=""
        />
        <input
          placeholder="Email Adress"
          className="px-3 py-2 w-full outline-none bg-gray-100 shadow-2xl"
          type="text"
          name=""
          id=""
        />
        <div className="flex gap-2 items-center ">
          <input type="checkbox" name="" id="" />
          <div>I accept all the terms of privacy</div>
        </div>
        <button className="secondary_btn">GET STARTED TODAY</button>
      </div>

    </div>
  )
}

export default Contact