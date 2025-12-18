import React from 'react'
import About from './About';
import Menu from './Menu';
import Services from './Services';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
   <div>
          <section className="container pt-[130px]  mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="text-center md:text-left">
            <span className="inline-block bg-orange-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              100% Hygienic & Homemade
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Ghar Jaisa Khana, <br />
              <span className="text-primary">Doorstep Delivery.</span>
            </h2>

            <p className="text-gray-600 mt-6 max-w-lg mx-auto md:mx-0">
              Delicious, healthy, and affordable tiffin service designed for
              students and professionals. Manage your subscription easily with
              our app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <NavLink to="/dashboard">
              <button className="bg-primary text-white px-7 py-4 rounded-xl font-semibold">
                Start Your Trial →
              </button>
              </NavLink>
              <NavLink to="/menu">
              <button className="border text-orange-600 border-orange-300 text-orange px-8 py-4 rounded-xl font-semibold">
                View Menu
              </button>
              </NavLink>
            </div>

            <div className="flex justify-center md:justify-start gap-6 mt-6 text-sm text-gray-600">
              <span>✔ Free Delivery</span>
              <span>✔ Cancel Anytime</span>
            </div>
          </div>

          <div className="bg-orange-50 rounded-3xl p-8 sm:p-8 relative w-full max-w-lg mx-auto">
            <div className="bg-white rounded-2xl p-5  shadow mb-4 flex justify-between items-center">
              <div className="flex gap-4">
                <div className="p-4 bg-orange-100 rounded-full text-xl">🍚 </div>
                <div className="flex flex-col justify-center">
                     <h3 className="font-bold">Premium Thali</h3>
                  <p className="text-sm text-gray-500">
                  4 Roti, 2 Sabzi, Dal, Rice
                </p>
                </div>

              </div>
              <span className="text-primary font-bold">₹120</span>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow flex justify-between items-center">
               <div className="flex gap-4">
                <div className="p-4 bg-green-100 rounded-full text-2xl">🍲 </div>
                <div className="flex flex-col justify-center">
                     <h3 className="font-bold">Diet Meal</h3>
                  <p className="text-sm text-gray-500">
                  Salad, Sprouts, Soup
                </p>
                </div>

              </div>
              <span className="text-primary font-bold">₹150</span>
            </div>

            <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow text-sm font-semibold">
              🕐 Lunch: 1:00 PM
            </div>
          </div>

        </div>
      </section>
        <section className="w-full bg-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">

            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                500+
              </h3>
              <p className="mt-2 text-sm sm:text-base opacity-90">
                Daily Customers
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                50k+
              </h3>
              <p className="mt-2 text-sm sm:text-base opacity-90">
                Meals Delivered
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                4.8
              </h3>
              <p className="mt-2 text-sm sm:text-base opacity-90">
                ⭐ Rating
              </p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                15+
              </h3>
              <p className="mt-2 text-sm sm:text-base opacity-90">
                Delivery Partners
              </p>
            </div>

          </div>
        </div>
      </section>
     <About/>
     <Services/>
     <Menu/>
     <Contact/>
   </div>
  );
};

export default Home;