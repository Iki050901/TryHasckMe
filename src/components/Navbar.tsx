import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#1c1c1c] text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-[#88cc14]" />
          <span className="text-2xl font-bold">TryHackMe</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/learn" className="hover:text-[#88cc14] transition-colors">Learn</Link>
          <Link to="/practice" className="hover:text-[#88cc14] transition-colors">Practice</Link>
          <Link to="/games" className="hover:text-[#88cc14] transition-colors">Games</Link>
          <Link to="/business" className="hover:text-[#88cc14] transition-colors">Business</Link>
          <Link 
            to="/login" 
            className="bg-[#88cc14] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#9be016] transition-colors"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;