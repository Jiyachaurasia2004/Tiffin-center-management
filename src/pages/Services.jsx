import React from 'react'
import { PiCookingPot } from "react-icons/pi";
import { LuCar } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
function Services() {
  return (
    <div className='container pt-[120px] mx-auto px-4 flex flex-col gap-15'>
       <div className='flex flex-col justify-center items-center'>
          <h3 className='text-orange-500 font-semibold text-xl'>Why Choose Us</h3>
          <h1 className='font-bold text-xl md:text-4xl text-gray-800'>More Than Just a Tiffin Service</h1>
       </div>
       <div className='md:flex flex flex-wrap gap-6 justify-center items-center pt-10 '>
          <div className="bg-gray-50 hover:bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden w-full md:w-[28%]">
          <div className="relative p-10 ">
          
    <div className="text-5xl">
  <PiCookingPot className="text-[80px] text-white p-4 rounded-2xl bg-orange-500" />
</div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Homestyle Cooking</h3>
            <p className="text-sm  text-gray-600 leading-relaxed text-[16px]">
              Less oil, fewer spices, and fresh ingredients. Just like your mom makes it.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 hover:bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden  w-full md:w-[28%]">
          <div className="relative  p-10 ">
          
            <div className="text-5xl"><LuCar className="text-[80px] text-white p-4 rounded-2xl bg-orange-500" /></div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Live Tracking</h3>
            <p className="text-sm  text-gray-600 leading-relaxed text-[16px]">
              Track your tiffin delivery in real-time through our management app.
            </p>
          </div>
        </div>
       <div className="bg-gray-50 hover:bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden  w-full md:w-[28%]">
          <div className="relative p-10 ">
          
            <div className="text-5xl"><MdOutlineDateRange className="text-[80px] text-white p-4 rounded-2xl bg-orange-500"/></div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Flexible Subscription</h3>
            <p className="text-sm  text-gray-600 leading-relaxed text-[16px]">
             Pause, resume, or cancel your meal plan anytime with a single tap.
            </p>
          </div>
        </div>
       </div>
      
    </div>
  )
}

export default Services
