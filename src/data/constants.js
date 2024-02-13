import Figma from './assets/Figma-color.svg';
import vscode from './assets/vs-code.png';
import mysql from './assets/mysql.png';
import mongodb from './assets/mongodb.png';
import html from './assets/html.png';
import css from './assets/css.png';
import nodejs from './assets/nodejs.png';
import reatcjs from './assets/react-js.png';
import Expressjs from './assets/express.png';
import js from './assets/javascript.png';
import github  from './assets/github.png'
import wireshark from './assets/wireshark.png'
import kec from './assets/kec.png'
import dalle from'./assets/dalle.png'
import expensetracker from './assets/expense-tracker.png'
import emdc from './assets/emdc.jpeg'
import clsrep from './assets/clsrep.png'
import eventmanagement from './assets/eventmanagement.png'
import hospitalmanagement from './assets/hospitalmanagement.png'
import eldery from './assets/eldery.png'
import whatsappclone from './assets/whatsappclone.png'
import  instaclone from './assets/instaclone.jpg'
import  plantdisease from './assets/plantdisease.png'
import hospital from './assets/hospital.jpg'
import Dashboard from './assets/Dashboard.png'
import infotube from './assets/infotube.jpg'

export const Bio = {
  name: "KAMALESH J",
  roles: [
    "Full Stack Developer",
    "UI/UX Designer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/kamalj57",
  resume: "https://drive.google.com/file/d/1dhHSAqJwQCZppAB4fOuixkJUvplbuVVZ/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/kamalesh-j5720",
  figma: "https://www.figma.com/@kamalesh_j",
  behance: "https://www.behance.net/kamalj_57",
  dribble: "https://dribbble.com/kamalj_57",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image:html,
      },
      {
        name: "CSS",
        image:  css ,
      },
      {
        name: "JavaScript",
        image: js ,

      },
      {
        name: "React Js",
        image: reatcjs ,
      },

    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: nodejs ,
      },
      {
        name: "Express Js",
        image: Expressjs,
      },
      {
        name: "MySQL",
        image:  mysql ,
      },
      {
        name: "MongoDB",
        image: mongodb ,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "GitHub",
        image:  github ,
      },
      {
        name: "VS Code",
        image:  vscode ,
      },
      {
        name: "Figma",
        image:Figma,
         },
        {
          name:"Wireshark",
          image:wireshark,
        }
    ],
  },
];



export const education = [
  {
    id: 0,
    img: kec,
    school: "Kongu Engineering College, Erode",
    date: "NOV 2021 - NOV 2025",
    grade: "8.55 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kongu Engineering College, Erode. I have completed 5 semesters and have a CGPA of 8.55. I have taken courses in Data Structures Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others",
    degree: "Bachelor of Engineering - BE, Computer Science and Engineering",
  },
  {
    id: 1,
    school: "Venganar Vajram Matric Hr Sec School",
    date: "MAY 2021",
    grade: "93.06%",
    desc: "I completed my class 12 high school education at Venganar Vajram Matric Hr Sec School, where I studied Maths Biology.",
    degree: "HSC(XII), Maths Biology",
  },
  {
    id: 2,
    school: "Venganar Vajram Matric Hr Sec School",
    date: "MAR 2019",
    grade: "90.4%",
    desc: "I completed my class 10 education at Venganar Vajram Matric Hr Sec School.",
    degree: "SSLC(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI IMAGE GENERATOR",
    date: "Dec 2023 - Jan 2024",
    description:
      "Developed a full-stack web application that allows users to generate ai images using Openai-Dalle3 and cloudinary for image storage ",
    image:dalle,
    tags: [
      "MERN Stack",
      "Cloudinary",
      "OpenAi",
      "Dalle-3",
    ],
    category: "web app",
    github: "https://github.com/kamalj57/Dall-E",
    webapp: "https://dall-e-beryl-six.vercel.app/",
  },
  {
    id: 1,
    title: "Expense Tracker",
    date: "Jan 2024 - Jan 2024",
    description:
      "Developed a full-stack web application that allows users to manage thier income and expenses.",
    image:expensetracker,
    tags: ["React Js", "MongoDb", "Node Js", "Express Js"],
    category: "web app",
    github: "https://github.com/kamalj57/Expense_tracker",
    webapp: "https://expense-tracker-beta-green.vercel.app/",

  },
  {
    id: 2,
    title: "Infotube_SIH'23",
    date: "Aug 2023 - Aug2023",
    description:
      "Developed the Infotube project, a project management app that helps the students to identify the unique projects and showcase their talents accross India ",
    image:infotube,
     tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
    ],
    category: "web app",
    github: "",
    webapp: "",
  },
  {
    id: 3,
    title: "Event Managemet",
    date: "Feb-13 2023 - Feb-18 2023",
    description:
      "Deveolped an event management app using HTML,CSS and Google Sheets for storage of data in a span of 5 days in the event of E-Horyzon'23,KEC",
    image:eventmanagement,
    tags: ["HTML", "Css", "Google Sheets"],
    category: "web app",
    github: "",
    webapp: "",
  },
  {
    id: 4,
    title: "Hospital Management System",
    date: "Oct-30 2023 - Nov-03 2023",
    description:"Devloped an Hospital Management web app with an user-frinedly UI and have modules like appointement booking and the project is developed using the Agile Principles",
    image:hospitalmanagement,
    tags: ["ReactJs","MongoDB","Express","NodeJs", "Axios"],
    category: "web app",
    github: "https://github.com/kamalj57/HospitalManagement_Agile",
    webapp: "",
  },
  {
    id: 6,
    title: "Plant Disease Idnetifier",
    date: "Oct 2023 - Oct 2023",
    description:
      "Developed an Plant Disease Identifier app to diagnoses plant ailments through image recognition, revolutionizing agriculture with precision and efficiency. ",
    image:plantdisease,
    tags: ["Flutter", "CNN", "Tenserflow"],
    category: "android app",
    github: "",
    webapp: "",
  },
  {
    id: 5,
    title: "Eldery To-Do",
    date: "Oct-30 2023 - Nov-03 2023",
    description:
      "Developed an Eldery ToDo app that helps to manage the daily tasks of the eldery people in the event of IXplorer as part of Celesta'23 organized by GDSC IIT Patna",
    image:Dashboard,
    tags: ["ReactJs","MongoDB","Express","NodeJs", "Axios"],
    category: "web app",
    github: "",
    webapp: "",
  },
  {
    id: 7,
    title: "Hospital Landing Page",
    date: "Jun 2023",
    description:
      "Desinged the Hospital Landing page  concept UI with showcase the specialize of the hospital using Figma",
    image:hospital,
    tags: ["Figma","Landing Page","Hospital UIkit"],
    category: "design",
     designLink:"https://dribbble.com/shots/22274140-Web-view-for-Hospital-System?utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=Web%20view%20for%20Hospital%20System&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=Web%20view%20for%20Hospital%20System&utm_medium=Social_Share",
  },
  {
    id: 8,
    title: "Eldery ToDo_UI",
    date: "Oct-30 2023 - Nov-03 2023",
    description:
      "Designed an Eldery ToDo app that helps to manage the daily tasks of the eldery people in the event of IXplorer as part of Celesta'23 organized by GDSC IIT Patna",
    image:eldery,
    tags: ["Figma","ToDo App","Eldery ToDo"],
    category: "design",
    designLink:"https://dribbble.com/shots/22969610-Eldery-Remainder-App?utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=Eldery%20Remainder%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=Eldery%20Remainder%20App&utm_medium=Social_Share"
  },
  {
    id: 9,
    title: "Instagram Clone",
    date: "Jun 2023",
    description:
      "Desinged the Instagram concept UI Kit using Figma",
    image:instaclone,
    tags: ["Figma","Instagram Clone"],
    category: "design",
    designLink:"https://dribbble.com/shots/22932500-Instagram-UI-Kit-2023-1-0?utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=Instagram%20UI%20Kit%202023%201.0&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=Instagram%20UI%20Kit%202023%201.0&utm_medium=Social_Share"
  },
  {
    id: 10,
    title: "Whatsapp Clone",
    date: "Jul 2023",
    description:"Designed an Whatsapp UI Kit with concept of separate groups and chat using Figma ",
      image:whatsappclone,
    tags: ["Figma","Whatsapp clone"],
    category: "design",
    designLink:"https://dribbble.com/shots/22984529-CHATAPP-1-0?utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=CHATAPP%201.0&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=CHATAPP%201.0&utm_medium=Social_Sharehttps://dribbble.com/shots/22984529-CHATAPP-1-0?utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=CHATAPP%201.0&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=CHATAPP%201.0&utm_medium=Social_Share"
  },
  
];

export const volunteering = [
  {
    id: 0,
    img: emdc,
    position:"EXECUTIVE MEMBER",
    desc: "Entrepreneurship Management and Development Centre(IIC@EMDC)",
    date: "SEP 2023",
  },
  {
    id: 1,
    img: clsrep,
    position:"CLASS REPRESENTATIVE",
    date: "JUN 2022-DEC 2022",
  },
];
