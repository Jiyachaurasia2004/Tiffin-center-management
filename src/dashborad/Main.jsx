import React from 'react'

function Main() {
  return (
    <div>
        <h2 className="text-2xl font-semibold mb-6">
          Hello, Rahul 👋
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl shadow">
            <p className="text-sm">Today's Lunch Status</p>
            <h3 className="text-xl font-bold mt-2">Out for Delivery</h3>
            <p className="text-sm mt-2">Arriving by 1:15 PM</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Credits Left</p>
            <h3 className="text-2xl font-bold mt-2">12 Meals</h3>
            <button className="mt-4 px-4 py-2 border border-orange-400 text-orange-500 rounded-lg">
              Recharge Wallet
            </button>
          </div>

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

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Today's Menu Selection
          </h3>

          <div className="flex items-center gap-4">
           <p className='text-[30px]'>🍚</p>
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
    </div>
  )
}

export default Main
