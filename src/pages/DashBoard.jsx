import React from 'react'
import { CiForkAndKnife } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
function DashBoard() {
  return (
    <div className="flex pt-[70px] min-h-screen bg-gray-100">
      
 
      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-orange-500 mb-8 flex items-center gap-2">
          <CiForkAndKnife className='font-bold'/><span>TiffinBox</span> 
        </h1>

        <nav className="space-y-4">
          <button className="w-full text-left px-4 py-2 bg-orange-100 text-orange-600 rounded-lg">
            My Subscription
          </button>

          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
            Weekly Calendar
          </button>
          <NavLink to="/profile">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
            Profile Settings
          </button>
          </NavLink>
        </nav>

        <div className="absolute bottom-6 left-6">
          <p className="font-semibold">Rahul Sharma</p>
          <p className="text-sm text-gray-500">Pro Plan Active</p>
          <button className="text-red-500 mt-2">Sign Out</button>
        </div>
      </aside>

      
      <main className="flex-1 p-8">
        
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-6">
          Hello, Rahul 👋
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Delivery Status */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl shadow">
            <p className="text-sm">Today's Lunch Status</p>
            <h3 className="text-xl font-bold mt-2">Out for Delivery</h3>
            <p className="text-sm mt-2">Arriving by 1:15 PM</p>
          </div>

          {/* Credits */}
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Credits Left</p>
            <h3 className="text-2xl font-bold mt-2">12 Meals</h3>
            <button className="mt-4 px-4 py-2 border border-orange-400 text-orange-500 rounded-lg">
              Recharge Wallet
            </button>
          </div>

          {/* Holiday */}
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Next Holiday</p>
            <h3 className="text-lg font-semibold mt-2">
              Tomorrow (Paused)
            </h3>
            <button className="mt-4 text-blue-500">
              Manage Leaves
            </button>
          </div>
        </div>

        {/* Menu Section */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Today's Menu Selection
          </h3>

          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Food"
              className="rounded-lg"
            />
            <div>
              <span className="text-xs bg-orange-100 text-orange-500 px-2 py-1 rounded">
                LUNCH
              </span>
              <h4 className="font-semibold mt-2">
                North Indian Thali
              </h4>
              <p className="text-sm text-gray-500">
                Kadi Pakoda, Bhindi Masala, 4 Rotis, Rice, Salad
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default DashBoard
