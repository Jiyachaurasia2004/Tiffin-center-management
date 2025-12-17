import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PricingSection = () => {
    const [billingCycle, setBillingCycle] = React.useState('monthly');

    const plans = [
        {
            title: 'Student Lite',
            price: { monthly: '2200', weekly: '700' },
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
            price: { monthly: '3500', weekly: '1100' },
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
            price: { monthly: '4500', weekly: '1450' },
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
        <div className="py-16 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Billing Cycle Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-100 p-1 rounded-full inline-flex relative">
                        <button
                            onClick={() => setBillingCycle('weekly')}
                            className={`${billingCycle === 'weekly'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-900'
                                } px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none`}
                        >
                            Weekly
                        </button>
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`${billingCycle === 'monthly'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-900'
                                } px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none flex items-center`}
                        >
                            Monthly
                            <span className="ml-2 text-xs font-bold text-orange-500">-20%</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-8 border ${plan.isPopular
                                ? 'border-orange-500 shadow-xl scale-105 z-10'
                                : 'border-gray-200 shadow-sm'
                                } flex flex-col h-full transition-all duration-300 hover:shadow-lg`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 right-8 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                            <div className="flex items-baseline mb-2">
                                <span className="text-4xl font-extrabold text-gray-900">
                                    ₹{billingCycle === 'monthly' ? plan.price.monthly : plan.price.weekly}
                                </span>
                                <span className="text-gray-500 ml-1">
                                    /{billingCycle === 'monthly' ? 'mo' : 'week'}
                                </span>
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
};

export default PricingSection;
