// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import fptLogo from "./assets/fptLogo.png";
// Education Section Logo's

// Project Section Logo's
import rental from "./assets/work_logo/rental.png";
import autoPostLogo from "./assets/work_logo/autopost.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];
export const experiences = [
  {
    id: 0,
    img: fptLogo,
    role: "Fullstack Developer",
    company: "FPT Software",
    date: "2023 - 2024",
    desc: "Worked as a Fullstack Developer focusing on enterprise-level web applications. Built and maintained frontend features using Vue.js and implemented backend services with Node.js and Express. Collaborated with cross-functional teams in an Agile/Scrum environment, optimized UI performance, integrated RESTful APIs, and developed scalable modules based on business requirements.",
    skills: [
      "Vue.js",
      "Pinia / Vuex",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "RESTful API",
      "Tailwind CSS",
      "Git",
    ],
  },
];
export const education = [
  {
    id: 0,
    img: fptLogo,
    school: "FPT University, Vietnam",
    date: "2022 - Present",
    grade: "",
    desc: "Currently pursuing a Bachelor's degree in Software Engineering at FPT University. Focusing on core computer science fundamentals and practical software development skills, including Web Development, Data Structures and Algorithms, Database Systems, and Project-Based Learning. Actively involved in hands-on projects that improve real-world problem-solving and full-stack development capabilities.",
    degree: "Bachelor of Software Engineering",
  },
];

export const projects = [
  {
    id: 0,
    title: "Real Estate Rental & Listing Platform",
    description:
      "A modern real estate web application that allows users to easily search, filter, and explore rental properties. The platform enables property owners or admins to list and manage apartments, including images, pricing, location, and availability.",
    image: rental,
    tags: ["Node JS", "React JS", "REST API", "AWS", "TAILWIND CSS", "MongoDB"],
    github: "https://github.com/phucdhcoder19/rental-app",
    webapp: "https://your-live-site.com",
  },
  {
    id: 1,
    title: "Auto Post WordPress",
    description:
      "A web application that allows users to automatically publish posts across multiple WordPress websites simultaneously. Users can create content once and push it to several sites, including images, text, and metadata. nsistency across multiple WordPress sites.",
    image: autoPostLogo,
    tags: ["Node JS", "React JS", "REST API", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/phucdhcoder19/rental-app",
    webapp: "https://your-live-site.com",
  },
  {
    id: 1,
    title: "Gender Health Care System",
    description:
      "A comprehensive web application for gender health care management. Users can book consultations with doctors, track appointments, and access personalized health information. Managers can oversee schedules, approve bookings, and manage doctors' availability, ensuring smooth operation and efficient healthcare services.",
    image: autoPostLogo,
    tags: ["Node JS", "React JS", "REST API", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/phucdhcoder19/rental-app",
    webapp: "https://your-live-site.com",
  },
];
