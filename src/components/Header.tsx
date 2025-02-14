import React from 'react';
import { Globe } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Globe className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">IdiomasPuentes</span>
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-blue-200">Home</a></li>
            <li><a href="/about" className="hover:text-blue-200">About</a></li>
            <li><a href="#services" className="hover:text-blue-200">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;