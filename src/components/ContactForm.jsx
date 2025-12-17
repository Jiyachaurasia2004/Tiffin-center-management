import React from 'react';

const ContactForm = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-md rounded-sm">
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-red-500 placeholder-gray-400"
            />
          </div>
          <div className="w-full md:w-1/2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-red-500 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-red-500 placeholder-gray-400"
          />
        </div>

        <div className="w-full">
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-red-500 placeholder-gray-400 resize-none"
          ></textarea>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="button" // content says "Send Message" - usually type="submit" but using type="button" to prevent reload if they drop it in
            className="bg-[#CE1212] hover:bg-[#b00f0f] text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
