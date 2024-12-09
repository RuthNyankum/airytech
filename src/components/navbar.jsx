import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo1.png';
import K from '../constants/index';

const Navbar = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const togglePortfolioDropdown = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Find the Portfolio link with its dropdown
  const portfolioLink = K.NAVLINKS.find((link) => link.name === 'Portfolio');

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex space-x-7">
            <Link to="/" className="flex items-center py-4 px-2">
              <img src={logoImage} alt="Company Logo" className="h-10 w-auto" />{' '}
              <span>AiryTech</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {K.NAVLINKS.map((link) =>
              link.name === 'Portfolio' ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={togglePortfolioDropdown}
                  onMouseLeave={togglePortfolioDropdown}
                >
                  <button className="py-4 px-2 text-gray-500 font-semibold hover:text-primary transition duration-300">
                    {link.name}
                  </button>
                  {isPortfolioOpen && portfolioLink.dropdown && (
                    <div className="absolute z-10 bg-white shadow-lg rounded-lg w-48 py-2 mt-1">
                      {portfolioLink.dropdown.map((dropdownLink) => (
                        <Link
                          key={dropdownLink.name}
                          to={dropdownLink.path}
                          className="block px-4 py-2 text-gray-800 hover:bg-primary"
                        >
                          {dropdownLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-primary transition duration-300"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-primary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul>
              {K.NAVLINKS.map((link) =>
                link.name === 'Portfolio' ? (
                  <li key={link.name} className="relative">
                    <div className="block text-sm px-2 py-4">{link.name}</div>
                    {link.dropdown && (
                      <div className="pl-4">
                        {link.dropdown.map((dropdownLink) => (
                          <Link
                            key={dropdownLink.name}
                            to={dropdownLink.path}
                            className="block text-sm px-2 py-2 hover:bg-primary transition duration-300"
                          >
                            {dropdownLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="block text-sm px-2 py-4 hover:bg-primary transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
