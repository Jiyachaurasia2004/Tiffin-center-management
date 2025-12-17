import React from 'react'

function Menu() {
  return (
    <div>
       <section className="container pt-[100px] mx-auto px-4 flex flex-col gap-9">
      
            <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-4xl'>Today's Menu 😋</h1>
              <div className='flex  justify-between'>
                   <p className='text-gray-600'>Freshly prepared and ready to deliver.</p>
              <div className='bg-green-200 px-2 rounded-lg hidden md:flex'>Tuesday Special</div>
          </div>
        
        </div>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
          <div className="relative bg-orange-100 h-48 flex items-center justify-center">
            <span className="absolute top-4 right-4 bg-white text-xs font-semibold px-3 py-1 rounded-full">
              Lunch
            </span>
            <div className="text-5xl">🍛</div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Standard Thali</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              4 Butter Roti, Paneer Butter Masala, Jeera Rice, Dal Fry,
              Salad, Pickle.
            </p>

            <div className="border-t mt-4 pt-4 flex items-center justify-between">
              <span className="text-primary font-bold text-lg">₹90</span>
              <button className="text-sm font-semibold text-gray-700 hover:text-primary">
                View Nutrition Info
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
          <div className="relative bg-pink-100 h-48 flex items-center justify-center">
            <span className="absolute top-4 right-4 bg-white text-xs font-semibold px-3 py-1 rounded-full">
              Dinner
            </span>
            <div className="text-5xl">🍲</div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Special Combo</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              3 Paratha, Mix Veg, Curd, Gulab Jamun, Papad.
            </p>

            <div className="border-t mt-4 pt-4 flex items-center justify-between">
              <span className="text-primary font-bold text-lg">₹110</span>
              <button className="text-sm font-semibold text-gray-700 hover:text-primary">
                View Nutrition Info
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
          <div className="relative bg-green-100 h-48 flex items-center justify-center">
            <span className="absolute top-4 right-4 bg-white text-xs font-semibold px-3 py-1 rounded-full">
              Lite
            </span>
            <div className="text-5xl">🍚</div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Khichdi Bowl</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Masala Khichdi, Kadhi, Roasted Papad, Buttermilk.
            </p>

            <div className="border-t mt-4 pt-4 flex items-center justify-between">
              <span className="text-primary font-bold text-lg">₹70</span>
              <button className="text-sm font-semibold text-gray-700 hover:text-primary">
                View Nutrition Info
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Menu
