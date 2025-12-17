import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', formData);
    // Add signup logic here
  };

  return (
    <div className="flex pt-[120px] min-h-screen items-center justify-center bg-gradient-to-br from-orange-100 via-orange-300 to-orange-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white/80 backdrop-blur-md p-10 shadow-2xl rounded-2xl border border-white/20">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight text-gray-900">
            Create Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <NavLink
              to="/login"
              className="font-medium text-orange-600 hover:text-orange-500 transition-colors duration-200"
            >
              Sign in here
            </NavLink>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="user-name" className="sr-only">
                Full Name
              </label>
              <input
                id="user-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="relative block w-full rounded-xl border-0 py-3 text-gray-900 bg-white/50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 px-4 transition-all duration-200"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="relative block w-full rounded-xl border-0 py-3 text-gray-900 bg-white/50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 px-4 transition-all duration-200"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="relative block w-full rounded-xl border-0 py-3 text-gray-900 bg-white/50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 px-4 transition-all duration-200"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="relative block w-full rounded-xl border-0 py-3 text-gray-900 bg-white/50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 px-4 transition-all duration-200"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
                I agree to the <a href="#" className="font-medium text-orange-600 hover:text-orange-500">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-xl bg-orange-600 px-3 py-3 text-sm font-bold text-white shadow-md hover:bg-orange-500 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
