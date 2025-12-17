import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
function Price() {
   const plans = [
         {
             title: 'Student Lite',
             price: '2200',
             description: 'Perfect for light eaters or students.',
             features: [
                 'Lunch OR Dinner',
                 '5 Rotis + Sabzi',
                 'Mon-Sat Delivery',
             ],
             isPopular: false,
             buttonText: 'Select Plan',
         },
         {
             title: 'Standard Full',
             price: '3500',
             description: 'A complete balanced meal.',
             features: [
                 'Lunch AND Dinner',
                 'Roti, Sabzi, Dal, Rice',
                 'Sunday Special Treat',
                 'Free Cancellation',
             ],
             isPopular: true,
             buttonText: 'Subscribe Now',
         },
         {
             title: 'Executive Premium',
             price: '4500',
             description: 'For those who want variety.',
             features: [
                 'Lunch AND Dinner',
                 'Salad + Sweet Daily',
                 'Custom Menu Choice',
             ],
             isPopular: false,
             buttonText: 'Select Plan',
         },
     ];
 
     return (
         <div className="container  mx-auto pt-[150px] bg-white font-sans">
           <div className='flex flex-col justify-center items-center font-serif'>
          <h1 className=' text-[20px]'>Simple Pricing</h1>
         <p className='text-gray-500'>Pause your subscription anytime. Money back for skipped meals.</p>
        </div>
             <div className="max-w-7xl py-10  mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                     {plans.map((plan, index) => (
                         <div
                             key={index}
                             className={`relative bg-white rounded-2xl p-8 border ${plan.isPopular
                                     ? 'border-orange-500 hover:border-orange-500 shadow-xl scale-105 z-10'
                                     : 'border-gray-200 shadow-sm'
                                 } flex flex-col hover:border-orange-500 h-full transition-all duration-300 hover:shadow-lg`}
                         >
                             {plan.isPopular && (
                                 <div className="absolute -top-4 right-8 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                     Most Popular
                                 </div>
                             )}
 
                             <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                             <div className="flex items-baseline mb-2">
                                 <span className="text-4xl font-extrabold text-gray-900">₹{plan.price}</span>
                                 <span className="text-gray-500 ml-1">/mo</span>
                             </div>
                             <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
 
                             <ul className="space-y-4 mb-8 flex-grow">
                                 {plan.features.map((feature, featureIndex) => (
                                     <li key={featureIndex} className="flex items-start">
                                         <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                         <span className="text-gray-600 text-sm">{feature}</span>
                                     </li>
                                 ))}
                             </ul>
 
                             <button
                                 className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${plan.isPopular
                                         ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-md hover:shadow-lg'
                                         : 'bg-white text-orange-600 border-2 border-orange-500 hover:bg-orange-50'
                                     }`}
                             >
                                 {plan.buttonText}
                             </button>
                         </div>
                     ))}
                 </div>
             </div>
         </div>
     );
}

export default Price
