import React from 'react';
import { Link } from 'react-router-dom';

const recyclingMaterials = [
    {
        badge: 'Paper Materials',
        title: 'Carton Waste',
        description: 'Carton paper waste is one of the most recycled materials globally, often collected curbside, at drop-off centers, or from commercial sources. It is pulped and repurposed into new paperboard, tissue, or packaging.',
        image: '/Carton.png',
    },
    {
        badge: 'Plastic Waste',
        title: 'PET',
        description: 'Polyethylene terephthalate (PET), is the type of plastic labelled with the #1 code on or near the bottom of bottles and containers.',
        image: '/Recycle.jpg',
    },
    {
        badge: 'Aluminum Scrap',
        title: 'CAN Scrap',
        description: 'Do you think of your empty soda cans and food cans as a natural resource? They are. We currently discard millions of tons of aluminum each year.',
        image: '/imgi.jpg',
    },
    {
        badge: 'Plastic Waste',
        title: 'PE',
        description: 'Polyethylene (PE) is a common plastic used in packaging, containers, and various products. It is recyclable and widely processed for reuse.',
        image: '/PE.jpeg',
    },

];

const RecyclingCard = ({ material }) => {
    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-sm mx-auto flex flex-col gap-6">
            {/* Image */}
            <div className="relative">
                <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-64 object-cover"
                />
                {/* Orange Badge */}
                <span className="absolute top-6 left-6 bg-orange-100 text-orange-800 text-xs font-bold px-5 py-2 rounded-full shadow-md">
                    {material.badge}
                </span>
            </div>

            {/* Content */}
            <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                    {material.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {material.description}
                </p>

                <div className="flex gap-4 justify-center md:justify-start">
                    {/* Enquire Button (navigates to enquiry page) */}
                    <Link
                        to="/enquiry"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-50 transition shadow-md"
                    >
                        Enquire
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default function RecyclingMaterialsGrid() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-800">
                        Available Recycling Materials
                    </h2>
                    <p className="text-lg text-gray-600 mt-4">
                        High-quality, sorted, and processed materials ready for reuse
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {recyclingMaterials.map((material, index) => (
                        <RecyclingCard key={index} material={material} />
                    ))}
                </div>
            </div>
        </section>
    );
}