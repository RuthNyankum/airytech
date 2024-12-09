const K = {
  NAVLINKS: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about-us',
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      dropdown: [
        {
          name: 'Design',
          path: '/portfolio/design',
        },
        {
          name: 'Website',
          path: '/portfolio/website',
        },
      ],
    },
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'Contact',
      path: '/contact-us',
    },
  ],
  FOOTER: {
    LOGO: {
      src: '../assets/images/logo1.png',
      alt: 'Airytech Solutions Logo',
    },
    SOCIAL_LINKS: [
      { href: '#', icon: 'FaFacebook' },
      { href: '#', icon: 'FaTwitter' },
      { href: '#', icon: 'FaInstagram' },
      { href: '#', icon: 'FaLinkedin' },
    ],
    QUICK_LINKS: [
      { path: '/', label: 'Home' },
      { path: '/about-us', label: 'About Us' },
      { path: '/services', label: 'Services' },
      { path: '/portfolio', label: 'Portfolio' },
      { path: '/contact-us', label: 'Contact' },
    ],
    SERVICES: [
      'Web Development',
      'Product Design',
      // 'Mobile App Design',
      // 'Cloud Solutions',
      // 'Digital Consulting',
      // 'IT Support',
    ],
    CONTACT_INFO: [
      {
        icon: 'FaMapMarkerAlt',
        text: 'Remote, Worldwide',
      },
      { icon: 'FaPhone', text: '+233 541-009-905' },
      {
        icon: 'FaEnvelope',
        text: 'nana.nyankum99@gmail.com',

        // 'info@airtechsolutions.com'
      },
    ],
  },
};

export default K;
