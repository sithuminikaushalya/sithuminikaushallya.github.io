import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer & UI/UX Designer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "DevOps Enthusiastic & Medium Writer",
      icon: backend,
    },
    {
      title: "WordPress Plugin Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "WordPress Plugin Developer",
      company_name: "eSupport",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jully 2024 - Aguest 2024",
      points: [
        "Built user-friendly admin interfaces and implemented REST APIs for seamless data interaction.",
        "Developed custom WordPress plugins, including Table Editor, CV Form, and Gold Rate Plugin with mobile app integration.",
        "Optimized plugins for performance and compatibility with WordPress updates.",
        "Collaborated with teams to ensure high-quality code and functionality.",
      ],
    },
    {
      title: "Laravel Developer",
      company_name: "eSupport",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aguest 2024 - January 2025",
      points: [
        "Developed dynamic web applications using Laravel framework, focusing on clean and maintainable code.",
        "Integrated databases and built efficient RESTful APIs for backend functionality.",
        "Collaborated with front-end developers to ensure smooth API communication and user experience.",
        "Maintained application security, optimized performance, and ensured compatibility with Laravel updates.",
      ],
    },
    {
      title: "Web Developer- MERN",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Built and integrated RESTful APIs for seamless backend-to-frontend communication.",
        "Implemented responsive and dynamic UIs with React, ensuring cross-browser compatibility.",
        "Collaborated on optimizing application performance and maintaining efficient database operations.",
      ],
    },
    {
      title: "Flutter Mobile APP Developer",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "December 2023 - Present",
      points: [
        "Developed cross-platform mobile applications using Flutter for Android and iOS.",
        "Integrated REST APIs for dynamic data fetching and real-time updates.",
        "Designed intuitive and responsive UI/UX using Flutter widgets and animations",
        "nsured code reusability and optimized app performance for a smooth user experience.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Spotify Clone",
      description:
        "Web-based platform that allows users to listen songs, add songs, create album, providing a convenient and efficient solution for users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/sithuminikaushalya/Spotify-Clone",
    },
    {
      name: "Food Delivery App",
      description:
        "A comprehensive mobile application for users to browse, order, and purchase food with an integrated admin panel for managing orders, restaurants, and menus.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sithuminikaushalya/Food-Delivery-App",
    },
    {
      name: "CV Collector Plugin",
      description:
        "The CV Collector Plugin is a comprehensive WordPress plugin designed to streamline the collection and management of CVs submitted by users. ",

      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/sithuminikaushalya/CV-Collector-plugin",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };