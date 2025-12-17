import React from 'react'; // Fixed import syntax
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome</h1>
        <ContactForm />
      </div>
    </div>
  )
}

export default Home;
