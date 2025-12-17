import React from 'react';

const MenuCard = () => {
    const menuData = [
        {
            day: 'Monday',
            lunch: 'Rajma Chawal + Jeera Aloo + Roti (4)',
            dinner: 'Paneer Butter Masala + Dal Tadka + Rice',
            isVeg: true,
        },
        {
            day: 'Tuesday',
            lunch: 'Kadi Pakoda + Bhindi Masala + Roti (4)',
            dinner: 'Mix Veg + Dal Fry + Pulao',
            isVeg: true,
        },
        {
            day: 'Wednesday',
            lunch: 'Chole Bhature + Salad + Lassi',
            dinner: 'Egg Curry / Aloo Gobi + Rice + Roti',
            isVeg: true,
        },
        {
            day: 'Thursday',
            lunch: 'Dal Makhani + Aloo Jeera + Roti (4)',
            dinner: 'Malai Kofta + Rice + Naan',
            isVeg: true,
        },
        {
            day: 'Friday',
            lunch: 'Veg Biryani + Raita + Salad',
            dinner: 'Matar Paneer + Dal Tadka + Roti',
            isVeg: true,
        },
        {
            day: 'Saturday',
            lunch: 'Khichdi + Begun Bhaja + Curd',
            dinner: 'Aloo Paratha + Curd + Pickle',
            isVeg: true,
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-50 font-sans">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">This Week's Menu</h2>
                    <p className="text-gray-500 mt-1">Homestyle goodness, curated for nutrition.</p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 border border-orange-300 text-orange-500 font-medium rounded-lg hover:bg-orange-50 transition-colors">
                    Download PDF
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuData.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-800">{item.day}</h3>
                            {item.isVeg && (
                                <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded font-medium">
                                    Veg
                                </span>
                            )}
                        </div>

                        <div className="mb-4">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">Lunch</span>
                            <p className="text-gray-700 font-medium">{item.lunch}</p>
                        </div>

                        {/* Divider line if needed, or just spacing */}
                        <div className="border-t border-gray-100 my-2"></div>

                        <div>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">Dinner</span>
                            <p className="text-gray-700 font-medium">{item.dinner}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuCard;
