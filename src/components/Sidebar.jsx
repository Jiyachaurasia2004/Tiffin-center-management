import React from "react";
import { NavLink } from "react-router-dom";
import { CiForkAndKnife } from "react-icons/ci";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-6 relative">


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
        {" "}
        <p className="font-semibold">Rahul Sharma</p>{" "}
        <p className="text-sm text-gray-500">Pro Plan Active</p>{" "}
       <NavLink to="/"><button className="text-red-500 mt-2">Sign Out</button>{" "}</NavLink>  
      </div>
    </aside>
  );
}

export default Sidebar;
