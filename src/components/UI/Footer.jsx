import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full pt-10  text-black py-5 px-6">
    
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
      
        <div className="md:w-1/3 space-y-3">
          <p className="text-gray-800 text-[15px] font-bold">
            Welcome to Quark Software Solutions, your gateway to cutting-edge IT services and consultancy. If you're ready to take your business to new heights through technology, we're here to make it happen. Contact us now and let's embark on this transformative journey together.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-800">
            <FaLocationDot className="text-lg font-bold md:text-[20px]" />
            <span>123 IT park,Bhopal City</span>
          </div>
        </div>

    
        <div className="md:w-1/3 flex justify-between">
        <div className="space-y-3">
          <h1 className="font-bold text-lg text-black">Company</h1>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>About Us</li>
            <li>Life@Quark</li>
            <li><a href="">Careers</a></li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-lg" />
              <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new">quarksoftware369@gmail.com</a>
            </li>
          </ul>
        </div>


        <div className="space-y-3">
          <h1 className="font-bold text-lg text-black">Services</h1>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>Web Development</li>
            <li>App Development</li>
            <li>SEO Optimization</li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-lg" />
              <a href="">+91 9329085959</a>
            </li>
          </ul>
        </div>
        </div>

        <div className="space-y-3">
          <h1 className="font-bold text-lg text-black">Follow Us</h1>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><a href="">Facebook</a></li>
            <li><a href="https://www.instagram.com/q.u.a.r.k_369?igsh=eWY0eWVxaHA2dnZu">Instagram</a></li>
            <li><a href="">LinkedIn</a></li>
            <li><a href="">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="w-full border-t border-blue-500 mt-10 pt-4 text-center text:xl md:text-2xl text-gray-800">
        &copy; 2025 Quark. All rights reserved.
      </div>
    </footer>
  );
};
