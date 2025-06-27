// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import renteraLogo from './assets/company_logo/rentera_logo.jpg';
import ksiLogo from './assets/company_logo/ksi_logo.jpeg';
import verzeoLogo from './assets/company_logo/verzeo_logo.png';
import ebayLogo from './assets/company_logo/ebay_logo.png';
import defaultLogo from "./assets/company_logo/default_logo.jpg";

// Education Section Logo's
import usfLogo from './assets/education_logo/usf_logo.png';
import cmrLogo from './assets/education_logo/cmr_logo.png';
import srichaitanyaLogo from './assets/education_logo/srichaitanya_logo.jpeg';
import bvbpsLogo from './assets/education_logo/bvbps_logo.jpeg';

// Project Section Logo's
import movieLogo from './assets/work_logo/movierec.png';
import moodsyncLogo from './assets/work_logo/moodsync.png';
import busreservationLogo from './assets/work_logo/busreservation.png';
import androdoctorLogo from './assets/work_logo/androdoctor.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: defaultLogo, // Placeholder for Purevisitx
    role: "Fullstack Developer",
    company: "Purevisitx",
    date: "December 2024 – Present",
    desc: "Built scalable RESTful APIs and responsive UI components using Node.js and React. Led migration to TypeScript and implemented GraphQL endpoints, CI/CD pipelines, and WebSocket-based real-time updates. Improved authentication with OAuth2 and enhanced performance monitoring via New Relic and Sentry.",
    skills: [
      "Node.js",
      "Express",
      "React",
      "GraphQL",
      "TypeScript",
      "Docker",
      "AWS",
      "Next.js",
      "Knex.js",
      "Swagger",
    ],
  },
  {
    id: 1,
    img: ebayLogo, // Replace with actual imported logo variable
    role: "Fullstack Developer",
    company: "eBay",
    date: "August 2022 – July 2023",
    desc: "Developed and optimized e-commerce modules using the MERN stack. Integrated Stripe for payments, built ElasticSearch-based product search, and implemented async order processing with RabbitMQ. Enhanced frontend performance, analytics dashboards, and compliance workflows.",
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redis",
      "RabbitMQ",
      "ElasticSearch",
      "Stripe",
      "Cypress",
      "Context API",
    ],
  },
  {
    id: 2,
    img: renteraLogo,
    role: "Fullstack Developer Intern",
    company: "Rentera",
    date: "January 2023 - April 2023",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      "Next.js",
    ],
  },
  {
    id: 3,
    img: ksiLogo,
    role: "Software Developer Intern",
    company: "Knowledge Solutions of India",
    date: "September 2022 - December 2022",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 4,
    img: verzeoLogo,
    role: "Frontend Intern",
    company: "Verzeo",
    date: "May 2022 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];


export const education = [
  {
    id: 0,
    img: usfLogo,
    school: "University of South Florida, USA",
    date: "Aug 2023 - May 2025",
    grade: "3.5",
    desc: "Graduated with a Master’s in Computer Science. Gained in-depth knowledge in backend services, automation, and system integration. Worked on projects involving satellite telemetry dashboards and microservices using technologies such as Python, Java, and AWS.",
    degree: "Master of Science - MS",
  },
  {
    id: 1,
    img: cmrLogo,
    school: "CMR Technical Campus, India",
    date: "Aug 2019 - May 2023",
    grade: "3.71",
    desc: "Earned a Bachelor of Technology in Computer Science and Engineering. Focused on data structures, web development, and cloud computing. Engaged in technical projects and coding contests that enriched practical learning.",
    degree: "Bachelor of Technology - B.Tech",
  },
  {
    id: 2,
    img: srichaitanyaLogo,
    school: "Sri Chaitanya Jr College, India",
    date: "June 2017 - May 2019",
    grade: "3.86",
    desc: "Completed Intermediate under the Telangana State Board with majors in Physics, Chemistry,and Mathematics. Achieved 96.6% and laid the academic foundation for engineering studies.",
    degree: "Intermediate - Telangana State Board",
  },
  {
    id: 3,
    img: bvbpsLogo,
    school: "Bharatiya Vidya Bhavans Public School, India",
    date: "Apr 2016 - March 2017",
    grade: "4.00",
    desc: "Completed Class X under the CBSE Board with a curriculum focused on Science and Computer Studies. Built strong logical reasoning and problem-solving skills.",
    degree: "CBSE (Class X)",
  },
];


export const projects = [
  {
    id: 0,
    title: "MoodSync",
    description:
      "A mental health tracking dashboard built using React and Tailwind CSS, featuring data visualization with Chart.js and a responsive UI. It helps users log and track moods with an activity feed and analytics.",
    image: moodsyncLogo,
    tags: ["React JS", "Tailwind CSS", "Chart.js", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Adityam2804/MoodSync",
  },
  {
    id: 1,
    title: "Bus Reservation App",
    description:
      "A Flutter-based mobile application for booking bus tickets across cities. It supports route selection, date picking, and displays popular routes, all with a clean UI built using Flutter widgets.",
    image: busreservationLogo,
    tags: ["Flutter", "Dart", "Firebase", "Android", "iOS", "UI Design"],
    github: "https://github.com/saikeerthana-26/BusReservationFlutterApp",
  },
  {
    id: 2,
    title: "AndroDoctorApp",
    description:
      "A mobile health tracking app focused on women's wellness. It includes period tracking, pregnancy weeks, mood logging, and a calendar view. Built with Flutter and designed for usability and clarity.",
    image: androdoctorLogo,
    tags: ["Flutter", "Dart", "Mobile Health", "Calendar Widget", "UI/UX"],
    github: "https://github.com/saikeerthana-26/AndroDoctor",
  },
  {
    id: 3,
    title: "Movie Recommendation App",
    description:
      "A React-based movie discovery platform that fetches and displays trending and popular movies using a public API. Includes search, dark mode UI, and favorites management.",
    image: movieLogo,
    tags: ["React JS", "JavaScript", "TMDB API", "CSS", "Axios"],
    github: "https://github.com/saikeerthana-26/ReactMovieApp",
  },
];
