import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full"></div>
            <h3 className="text-white text-xl font-semibold">YES-FIDELITY MULTIPURPOSE</h3>
          </div>
          <p className="text-sm leading-relaxed">
            Your trusted partner in sustainable cleaning, waste management, recyclable materials, and agricultural products.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-lg font-medium mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/cleaning" className="hover:text-green-400 cursor-pointer transition">
                Cleaning Services & Waste Management
              </Link>
            </li>
            <li>
              <Link to="/recycling" className="hover:text-green-400 cursor-pointer transition">
                Recyclable Materials
              </Link>
            </li>
            <li>
              <Link to="/agricultural" className="hover:text-green-400 cursor-pointer transition">
                Agricultural Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white text-lg font-medium mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-green-400 cursor-pointer transition">About Us</li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-medium mb-4">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <span className="text-green-400 mt-1">📍</span>
              <span>No 13 Idowu Olojede close behind Ogun State Ministry of Agriculture Asero Abeokuta.</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-400">📞</span>
              <span>

                07075205181 <br />

                09059133630 <br />

                080 296 60112</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-400">✉️</span>
              <span>fidelitymultiresourcesconcept@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 Yes-fidelity multipurpose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;