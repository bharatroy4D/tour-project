import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="max-w-sm md:max-w-md lg:max-w-7xl px-5 md:px-10 lg:20 mx-auto">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-between">
          {/* Column 1: Logo and About */}
          <div>
            <h2 className="text-4xl font-bold text-purple-600 mb-4">TravelMate</h2>
            <p className="text-lg mb-4">Your reliable travel partner to explore the world. We offer personalized trips, incredible experiences, and great deals!</p>
            <p className="text-sm">© 2025 TravelMate. All Rights Reserved.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-purple-600">Home</a></li>
              <li><a href="/about" className="hover:text-purple-600">About Us</a></li>
              <li><a href="/services" className="hover:text-purple-600">Services</a></li>
              <li><a href="/destinations" className="hover:text-purple-600">Destinations</a></li>
              <li><a href="/contact" className="hover:text-purple-600">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media & Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Connect With Us</h3>
            <div className="flex space-x-6 mb-6">
              <a href="https://facebook.com" className="hover:text-purple-600 text-2xl"><FaFacebook /></a>
              <a href="https://instagram.com" className="hover:text-purple-600 text-2xl"><FaInstagram /></a>
              <a href="https://twitter.com" className="hover:text-purple-600 text-2xl"><FaTwitter /></a>
              <a href="https://linkedin.com" className="hover:text-purple-600 text-2xl"><FaLinkedin /></a>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-purple-600">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-xl text-purple-600" />
                <span className="text-sm">+1 800 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-xl text-purple-600" />
                <span className="text-sm">info@travelmate.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-xl text-purple-600" />
                <span className="text-sm">1234 Travel Ave, City, Country</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">&copy; 2025 TravelMate. All Rights Reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-purple-600">Privacy Policy</a>
              <a href="/terms" className="hover:text-purple-600">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
