module.exports = {
  email: 'yacine.naoui2024@gmail.com',

  // Served from static/resume.pdf. Set to null to hide the "Resume" buttons.
  resumeUrl: '/resume.pdf',

  location: 'Algiers, Algeria',
  languages: 'English & French (professional), Arabic (native)',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Yacine-Naoui',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/yacine-naoui-a8751b230/',
    },
  ],

  education: [
    {
      school: 'École Nationale Supérieure d\'Informatique (ESI)',
      url: 'https://www.esi.dz/',
      location: 'Algiers, Algeria',
      degree: 'BEng (Ingénieur d\'État) & MSc in Computer Science',
      field: 'Computer Systems',
      range: 'Sep 2023 – Jun 2026',
    },
    {
      school: 'ESTIN Béjaïa',
      url: 'https://estin.dz/',
      location: 'Béjaïa, Algeria',
      degree: 'Preparatory Classes in Computer Science',
      field: '',
      range: 'Oct 2021 – May 2023',
    },
  ],

  // "Currently" section. Keep each value to one or two sentences.
  currently: {
    building:
      'LLM agent platforms at SARL CloudWind: a multi-agent SOC platform with RAG and provider-agnostic model routing, a fraud-scoring pipeline for a national insurer, and an on-prem energy-audit agent with eval-gated releases.',
    learning:
      'How learned detectors and LLM-driven response agents hold up against adaptive attackers and attacker-written inputs, the open problem my thesis left behind.',
    openTo: 'DevOps and ML engineering roles.',
  },

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#experience',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Currently',
      url: '/#currently',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  // Keep in sync with src/styles/variables.js (used by the web-app manifest)
  colors: {
    accent: '#6c8cbf',
    background: '#161b30',
    surface: '#1b2039',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
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
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
