import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiForkAndKnife } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white rounded-md shadow-md"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 pt-[70px] left-0 h-full bg-white shadow-md p-6
          w-64 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative md:block
        `}
      >
        {/* Navigation */}
        <ul className="space-y-4 pt-6">
          <li>
            <NavLink
              to="main"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg ${
                  isActive ? "bg-orange-100 text-orange-600" : "hover:bg-gray-100"
                }`
              }
            >
              My Subscription
            </NavLink>
          </li>

          <li>
            <NavLink
              to="weakly"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg ${
                  isActive ? "bg-orange-100 text-orange-600" : "hover:bg-gray-100"
                }`
              }
            >
              Weekly Calendar
            </NavLink>
          </li>

          <li>
            <NavLink
              to="profile"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg ${
                  isActive ? "bg-orange-100 text-orange-600" : "hover:bg-gray-100"
                }`
              }
            >
              Profile Settings
            </NavLink>
          </li>
        </ul>

        {/* User Info */}
        <div className="absolute bottom-6 left-6">
          <p className="font-semibold">Rahul Sharma</p>
          <p className="text-sm text-gray-500">Pro Plan Active</p>
          <NavLink to="/">
            <button className="text-red-500 mt-2">Sign Out</button>
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
