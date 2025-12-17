import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiForkAndKnife } from "react-icons/ci";
export const Footer = () => {
  return (
    <footer className=" bg-gray-800 w-full rounded-t-2xl pt-10  text-white py-5 px-6">
    
      <div className="container mx-auto max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
      
        <div className="md:w-1/3 space-y-3">
        <h1 className="font-bold text-[28px] flex gap-3 items-center"><CiForkAndKnife className="font-bold text-orange-400"/><span>TiffinBox</span></h1>
          <p className=" text-[18px] text-gray-400">
             Serving happiness in a box since 2023. Based in Indore, serving across 5 cities.
          </p>
         
        </div>

    
        <div className="md:w-1/2 flex flex-wrap gap-5 md:flex md:justify-around">
        


        <div className="space-y-3 ">
          <h1 className="font-bold text-lg text-white">Quick Links</h1>
          <ul className="space-y-2 text-md text-gray-400">
            <li>About Us</li>
            <li>Our Kitchen</li>
            <li>Partner with Us</li>
          
          </ul>
        </div>
         <div className="space-y-3">
          <h1 className="font-bold text-lg text-white">Contact</h1>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="">+91 98765 43210</a></li>

            <li className="flex gap-2"><CiLocationOn /><a href="">Bean Gate IT Solution LLP,Bhopal</a></li>
        
          </ul>
        </div>
        </div>

       
      </div>

      <div className="w-full border-t border-gray-500 mt-10 pt-4 text-center   text-gray-400">
        &copy;  2025 TiffinBox Management Systems. All rights reserved.
      </div>
    </footer>
  );
};
