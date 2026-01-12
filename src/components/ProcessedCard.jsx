import React from 'react';
import { Link } from 'react-router-dom';

const processedProducts = [
    {
        badge: 'Flakes',
        title: 'Whole Wheat Flour',
        description: 'Stone-ground whole wheat flour with high nutritional value and natural fiber for healthier baking.',
        image: '/Garri.jpg',
    },
    {
        badge: 'Oil',
        title: 'Palm Oil',
        description: 'Cold-pressed rice bran oil rich in vitamins and antioxidants for healthy cooking.',
        image: '/Oil.jpg',
    },
    {
        badge: 'smoked fish',
        title: 'Smoked fish',
        description: 'Premium quality rolled oats, minimally processed to retain maximum nutrition and flavor.',
        image: '/Fish.jpg',
    },
    {
        badge: 'Peanut Butter',
        title: ' Peanut Butter',
        description: 'Pure, organic turmeric powder with high curcumin content, naturally dried and ground.',
        image: '/Peanut.jpg',
    },
];

const ProcessedProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-sm mx-auto">
            {/* Image */}
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-t-3xl"
                />
                {/* Badge */}
                <span className="absolute top-6 left-6 bg-green-100 text-green-800 text-xs font-bold px-5 py-2 rounded-full">
                    {product.badge}
                </span>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {product.description}
                </p>

                {/* Action Button */}
                <div className="flex items-center gap-3">
                    <Link to="/enquiry" className="flex-1 bg-green-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700 transition flex items-center justify-center gap-2">
                        Contact for Price
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default function ProcessedProductsGrid() {
    return (
        <section id="browse-products" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Our Processed Products
                    </h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Carefully processed to preserve nutrition and flavor
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processedProducts.map((product, index) => (
                        <ProcessedProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}