import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@idiomaspuentes.org">info@idiomaspuentes.org</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>123 Main St, City, Country</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#mission" className="hover:text-blue-200">Our Mission</a></li>
              <li><a href="#services" className="hover:text-blue-200">Services</a></li>
              <li><a href="#" className="hover:text-blue-200">Donate</a></li>
              <li><a href="#" className="hover:text-blue-200">Volunteer</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and events.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-3 py-2 rounded-l-md text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-r-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 IdiomasPuentes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;