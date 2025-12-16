import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="h-20 flex items-center justify-between px-3 md:px-28 bg-white/30 backdrop-blur-lg shadow-md fixed w-full z-50">
      {/* Logo */}
      <div className="flex items-center justify-start  md: justify-center ">
        <h1 className='text-orange-400 text-2xl font-bold'>TiffinBox</h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-6 text-md text-gray-800">
        <ul className="flex space-x-6">
          {['/', '/about','/services', '/menu', '/price', '/contact'].map((path, index) => {
            const labels = ['Home', 'About', 'Services','Today`s Menu', 'Plans',  'Contact'];
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => isActive ? 'text-orange-600 font-semibold' : ''}
                >
                  {labels[index]}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-700 transition">
          <NavLink to="/signup">Login/Signup</NavLink>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md z-40 py-4 px-6 space-y-4 text-lg text-gray-800">
          {['/', '/about','/services', '/menu', '/price', '/contact'].map((path, index) => {
            const labels = ['Home', 'About', 'Services','Today`s Menu', 'Plans',  'Contact'];
            return (
              <div key={index}>
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'block text-orange-600 font-semibold'
                      : 'block hover:text-orange-500'
                  }
                >
                  {labels[index]}
                </NavLink>
              </div>
            );
          })}
          <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition">
           <NavLink to="/signup">Get Started</NavLink> 
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
