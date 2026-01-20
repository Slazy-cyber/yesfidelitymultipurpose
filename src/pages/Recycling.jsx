import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Home } from 'lucide-react';
import RecycleCards from '../components/RecycleCard';
import Footer from '../components/Footer';

const Recycling = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Eco-Friendly',
      description: 'Reduce carbon footprint and support circular economy by choosing recycled materials that help preserve our planet for future generations.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Cost Effective',
      description: 'Competitive pricing without compromising on quality. Save on material costs while maintaining high standards for your projects.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Quality Assured',
      description: 'Certified materials meeting international standards. Each product undergoes rigorous testing to ensure reliability and performance.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Materials Available' },
    { number: '95%', label: 'Recycled Rate' },
    { number: '10k+', label: 'Tonnes Processed' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <>
      <Navbar />
      <section className="py-20 px-6 bg-green-600 text-white">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white-600 font-medium mb-8">
            <Home className="w-5 h-5" />
            <span>/</span>
            <span className="text-white-800">Recycling Materials</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Recycling & Recyclable
            <br />
            Materials
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white-700 max-w-3xl mb-12 leading-relaxed">
            We specialize in the buying and selling of recyclable items such as plastics, paper, cartons, and metals. Our operations support resource recovery, reduce landfill waste, and contribute to a circular economy by transforming used materials into valuable resources for manufacturing and reuse.
          </p>

          {/* CTA Button */}
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition shadow-lg hover:shadow-xl"
          >
            Enquire Now
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      <RecycleCards />
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Why Choose Recycled Materials?
          </h2>
          <p className="text-lg text-green-700 mb-16 max-w-3xl mx-auto">
            Join us in building a sustainable future with quality recycled materials
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-700">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-green-100 rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-5xl font-bold text-green-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-green-700 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-8">
              Ready to Make a Sustainable Choice?
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-green-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Contact us today to discuss your recycling material needs and requirements.
              Our team is ready to help you find the perfect sustainable solution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/enquiry"
                className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition shadow-lg hover:shadow-xl"
              >
                Request Quote
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* <a
                href="/categor"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-green-700 border-2 border-green-600 font-semibold text-lg rounded-full hover:bg-green-50 transition shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                View All Categories
              </a> */}
            </div>
          </div>
        </div>
      </section>


      <Footer />

    </>
  )
}

export default Recycling
