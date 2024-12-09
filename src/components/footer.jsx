// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
// } from 'react-icons/fa';
// import logoImage from '../assets/images/logo1.png';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div>
//             <div className="flex items-center mb-4">
//               <img
//                 src={logoImage}
//                 alt="Airtech Solutions Logo"
//                 className="h-12 w-auto mr-3"
//               />
//               <h3 className="text-2xl font-bold text-primary">
//                 Airtech Solutions
//               </h3>
//             </div>
//             <p className="text-gray-300 mb-4">
//               Innovative technology solutions that drive business growth and
//               digital transformation.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-primary transition duration-300"
//               >
//                 <FaFacebook size={24} />
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-primary transition duration-300"
//               >
//                 <FaTwitter size={24} />
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-primary transition duration-300"
//               >
//                 <FaInstagram size={24} />
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-primary transition duration-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   to="/"
//                   className="text-gray-400 hover:text-primary transition duration-300"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about-us"
//                   className="text-gray-400 hover:text-primary transition duration-300"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services"
//                   className="text-gray-400 hover:text-primary transition duration-300"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/portfolio"
//                   className="text-gray-400 hover:text-primary transition duration-300"
//                 >
//                   Portfolio
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact-us"
//                   className="text-gray-400 hover:text-primary transition duration-300"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-xl font-semibold mb-4">Our Services</h4>
//             <ul className="space-y-2">
//               <li className="text-gray-400 hover:text-primary transition duration-300">
//                 Web Development
//               </li>
//               <li className="text-gray-400 hover:text-primary transition duration-300">
//                 Mobile App Design
//               </li>
//               <li className="text-gray-400 hover:text-primary transition duration-300">
//                 Cloud Solutions
//               </li>
//               <li className="text-gray-400 hover:text-primary transition duration-300">
//                 Digital Consulting
//               </li>
//               <li className="text-gray-400 hover:text-primary transition duration-300">
//                 IT Support
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <FaMapMarkerAlt className="text-primary" size={20} />
//                 <span className="text-gray-400">
//                   123 Tech Lane, Innovation Park, City, Country
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <FaPhone className="text-primary" size={20} />
//                 <span className="text-gray-400">+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <FaEnvelope className="text-primary" size={20} />
//                 <span className="text-gray-400">info@airtechsolutions.com</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-700 mt-8 pt-6 text-center">
//           <p className="text-gray-400">
//             © {currentYear} Airtech Solutions. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo2.png';

import K from '../constants/index';

const Footer = () => {
  const { LOGO, SOCIAL_LINKS, QUICK_LINKS, SERVICES, CONTACT_INFO } = K.FOOTER;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt={LOGO.alt} className="h-16 w-auto mr-3" />
              <h3 className="text-2xl font-bold text-primary">
                Airytech Solutions
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Innovative technology solutions that drive business growth and
              digital transformation.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ href, icon: Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ path, label }, index) => (
                <li key={index}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-primary transition duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              {CONTACT_INFO.map(({ icon: Icon, text }, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon className="text-primary" size={20} />
                  {index === 2 ? (
                    <a
                      href={`mailto:${text}`}
                      className="text-gray-400 hover:text-primary transition duration-300"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {currentYear} Airytech Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
