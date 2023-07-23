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
  tum,
  school,
  exo,
  outbank,
  udemy,
  youtube,
  spotify,
  hyperautomation,
  tenserflow,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
  {
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
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
    title: "Student",
    company_name: "Sankt Georg Austrian Gymnasium",
    icon: school,
    iconBg: "#383E56",
    date: "September 2014 - July 2019",
    points: [
      "Learned 5 years German.",
      "Got the C1 German Language Certificate.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Finished with 2,4 Matura Grade.",
      "http:// www.sg.k12.tr/",
    ],
  },
  {
    title: "Wirtschaftsinformatik (Information Systems) Student",
    company_name: "Technical University Of Munich",
    icon: tum,
    iconBg: "#E6DEDD",
    date: "September 2019 - September 2023",
    points: [
      "Thesis Subject: Comparison Of Network Architectures And Serialization Methods In Federated Machine Learning In Respect Of Energy Consumption. Grade: 1.7.",
      "Microservices architecture.",
      "Integrated gRPC and HTTP communication protocols and worked with serialization methods such as JSON, Pickle, Protobuffers in thesis.",
      "Worked with relational and no-relational databases such as MongoDB, PostgreSQL, PhP Myadmin, PopSql.",
    ],
  },
  {
    title: "Web Development Course",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Learned React, Angular.",
      "Learned TypeScript.",
      "Learned Tailwind & Sass.",
      "Learned Usage of Three JS & Frame Motion Libraries.",
    ],
  },
  {
    title: "Working Student Software Engineer",
    company_name: "Outbank Gmbh",
    icon: outbank,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - June 2023",
    points: [
      "Developing Python scripts to parse user-specific bank datas using APIs, WebsScrabing (Account Balances, Transactions, Parsing PDF and CSV files).",
      "Doing code reviews (GitLab).",
      "Analayzing network traffic using Proxyman and HAR files.",
      "Working with REST Api.",
    ],
  },
  {
    title: "Working Student Software Engineer",
    company_name: "Exo-IT Solutions Gmbh",
    icon: exo,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Using Java EE for backend development.",
      "Doing code reviews (CodeCommit-AWS).",
      "Using Amazon Webservices such as CodeCommit, CodeDeploy, Simple Que Service for DevOps",
      "Using PostgresSql as a database. Writing Flyway scripts to make changes in database.",
      "Using Angular for frontend development.",
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
    name: "Youtube Version 2",
    description:
      "A clone of Youtube Platform with new desing. This project is written in React using RapidAPI and Material Design",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material Ui",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    netlify_link: "https://ege-youtubev2.netlify.app/",
  },
  {
    name: "Spotify Version 2",
    description:
      "**** APPLICATION DOES NOT RUN PROPERLY BECAUSE OF EXPIRED API KEY ****. Web based Spotify clone with new design. ShazamCore API is used to get songs data. React-redux is used for context managing. The music player function is not coded by me",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    netlify_link: "https://ege-spotify-app.netlify.app/",
  },
  {
    name: "gRPC & FastAPI Test System In Federated Machine Learning",
    description:
      "Test System in which user can control the network protocols such as gRPC, HTTP (FastAPI) and serialization methods such as JSON, Pickle, Protobuffer. MNIST dataseit and Tenserflow are being used for the machine learning part. Sustaining the state between FastAPI and gRPC workers Redis database is used.",
    tags: [
      {
        name: "tenserflow",
        color: "blue-text-gradient",
      },
      {
        name: "REST",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: tenserflow,
    source_code_link: "https://github.com/egegulerr/FederatedLearning",
  },
  {
    name: "Hyperautomation Social Media Post Generator",
    description:
      "Hyperautomated post generation system, which uses we scrabing to scrape articles from the news page. Scrabed articles are stored in Database. The article is summarized and an image corresponding to the summerized text is generated with AI. For image generation Stable Diffusion model is used. After the content is generated, it is posted to instagram. System uses sliding-window approach to choose colors for image generation. That sliding-window approach is based on the likes the post gets. The paper of the system can be found by clicking the icon above",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Stable Diffusion",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: hyperautomation,
    google_drive_link:
      "https://drive.google.com/file/d/1sbPK57FTH89CjTU-_yAUz2SoJVjxQJvn/view",
    instagram_link: "https://www.instagram.com/hyperautomationmarketing/",
  },
];

export { services, technologies, experiences, testimonials, projects };
