module.exports = {
  siteTitle: 'Ramy EL BEHEDY | Software Engineer',
  siteDescription:
    'I\'m a software engineer based in Paris (France) and student at EPITA (Computer Engineering School).',
  siteKeywords:
    'Ramy EL BEHEDY, Ramy, el behedy, elbehedy, software engineer, front-end engineer, web developer, javascript, Paris',
  siteUrl: 'https://ramyelbehedy.com/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-G2850RM73T',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Ramy EL BHEHEDY',
  location: 'Paris, France',
  email: 'ramyelb@gmail.com',
  github: 'https://github.com/ramyEB',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ramyEB',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ramy-elbehedy/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'All my projects',
      url: '/archive',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
