import React from 'react'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div className='flex flex-col gap-5'>
      <section   className="container  pt-[100px] mx-auto px-4 flex flex-col gap-9">
         <div className='flex flex-col justify-center items-center font-serif'>
          <h1 className='text-gray-500'>Contact</h1>
          <h1 className='md:text-4xl text-2xl'>Need Help?  <span className='text-orange-600'>Contact Us</span> </h1>
        </div>
          <div class="rounded-xl shadow-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7017.135294536887!2d77.18470219999999!3d28.4971551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1aafdb143b5%3A0x4fd1d0b750993740!2sChhatarpur%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1690962671621!5m2!1sen!2sin"
        class="w-full h-64 md:h-96 border-0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
    </div>
    
      </section>
     <ContactForm/>

    </div>
  )
}

export default Contact
