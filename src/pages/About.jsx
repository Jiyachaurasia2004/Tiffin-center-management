import React from 'react'
import img from '../assets/about-img.jpg'
import img2 from "../assets/about-2.jpg"
import { FaCheckCircle } from "react-icons/fa";
function About() {
  return (
     <div className="w-full pt-[70px] bg-white">


      <section className='container mx-auto py-10 px-9'>
        <div className='flex flex-col justify-center items-center font-serif'>
          <h1 className='text-gray-500'>About Us</h1>
          <h1 className='md:text-4xl text-2xl'>Learn More <span className='text-orange-600'>About Us</span> </h1>
        </div>
        <div className='pt-10 flex flex-wrap md:flex gap-5 mx-auto justify-center  '>
          <div className='md:w-1/2 w-full'>  
            <img src={img} alt="" width={600}/>
          </div>
          <div className='w-full md:w-1/3 flex flex-col gap-4'>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex gap-3'>
                 <FaCheckCircle className='text-orange-600 text-[23px] flex justify-center' />
                 <h1>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
            </div>
             <div className='flex gap-3'>
                 <FaCheckCircle className='text-orange-600 text-[23px] flex justify-center' />
                 <h1>Duis aute irure dolor in reprehenderit in voluptate velit.</h1>
            </div>
            <div className='flex gap-3'>
                 <FaCheckCircle className='text-orange-600 text-[40px] flex justify-center' />
                 <h1> Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</h1>
            </div>
            <h1>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</h1>
            <div>
          <img src={img2} alt="" width={400}/>
        </div>
          </div>
        </div>
       
      </section>
    </div>
  )
}

export default About
