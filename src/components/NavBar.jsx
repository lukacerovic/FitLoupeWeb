import React from 'react'
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className='flex items-center gap-[10vh] bg-transparent py-[2%] text-white'>
        <div className='flex gap-[10vh] items-center justify-center w-[40%] text-3xl'>
            {/* <IoMenu color='white' size={60}/> */}
            <p>About</p>
            <p>Benefits</p>
        </div>
        <img src='../../public/images/fitLoupe.png' className='self-center w-[20%]' />
        <div className='flex gap-[10vh] items-center justify-center w-[40%] text-3xl'>
            <p>Demo Tutorial</p>
            <p>Sources</p>
        </div>
    </div>
  )
}
