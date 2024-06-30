import Figma from './assets/Figma-color.svg';
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
import redux from './assets/redux-icon.svg'
import tailwindcss from './assets/tailwind-css.svg'
import kec from './assets/kec.png'
import dalle from'./assets/dalle.png'
import expensetracker from './assets/expense-tracker.png'
import emdc from './assets/emdc.jpeg'
import eventmanagement from './assets/eventmanagement.png'
import hospitalmanagement from './assets/hospitalmanagement.png'
import elderly from './assets/eldery.png'
import whatsappclone from './assets/whatsappclone.png'
import  instaclone from './assets/instaclone.jpg'
import  plantdisease from './assets/plantdisease.png'
import hospital from './assets/hospital.jpg'
import Dashboard from './assets/Dashboard.png'
import infotube from './assets/infotube.jpg'
import kecvms from './assets/kecvms.png'
import stock from './assets/stock.png'
import reduxcartify from './assets/reduxcartify.png'
export const Bio = {
  name: "KAMALESH J",
  roles: [
    "Full Stack Developer",
    "UI/UX Designer",
  ],
  description:
    "A motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/kamalj57",
  resume: "https://drive.google.com/file/d/1dhHSAqJwQCZppAB4fOuixkJUvplbuVVZ/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/kamalesh-j5720",
  figma: "https://www.figma.com/@kamalesh_j",
  dribble: "https://dribbble.com/kamalj_57",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "JavaScript",
        image: js ,

      },
      {
        name: "React",
        image: reatcjs ,
      },
      {
        name: "Redux Toolkit",
        image: redux ,
      },
      {
        name: "Tailwind CSS",
        image: tailwindcss ,
      },
      {
        name: "HTML",
        image:html,
      },
      {
        name: "CSS",
        image:  css ,
      }

    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image: nodejs ,
      },
      {
        name: "Express.js",
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
    date: "Nov 2021 - Nov 2025",
    grade: "8.55 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kongu Engineering College, Erode. Additionally, I am studying for an Honours degree with specialization in Data Science",
    degree: "B.E - Computer Science and Engineering",
  },
  {
    id: 1,
    school: "Venganar Vajram Matric Hr Sec School",
    date: "May 2021",
    grade: "93.06%",
    degree: "HSC(XII), Maths Biology",
  },
  {
    id: 2,
    school: "Venganar Vajram Matric Hr Sec School",
    date: "Mar 2019",
    grade: "90.4%",
    degree: "SSLC(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI IMAGE GENERATOR",
    date: "Dec 2023 - Jan 2024",
    description: "Developed a full-stack web application that allows users to generate AI images using OpenAI DALL-E  and Cloudinary for image storage.",
    image: dalle,
    tags: ["MERN", "Cloudinary", "OpenAI DALL-E"],
    category: "web app",
    github: "https://github.com/kamalj57/Dall-E",
    videoDemo: "https://drive.google.com/file/d/1_Xpv0L95YX6v1ZQLt6EIJR7x53qOZv53/view?usp=drive_link",
  },
  {
    id: 1,
    title: "Elite Expense",
    date: "Jun 2024 - Jun 2024",
    description: "Developed a full-stack web application to manage expenses and budgets utilizing Next.js, Drizzle ORM and Neon Serverless Postgres Database and Clerk for authentication purposes.",
    image: expensetracker,
    tags: ["Next.js","Drizzle ORM","Neon Serverless Postgres","Clerk"],
    category: "web app",
    github: "https://github.com/kamalj57/EliteExpense",
    webapp: "https://elite-expense.vercel.app/",
  },
  {
    id: 2,
    title: "KEC Vehicle Management System",
    date: "Feb 2024 - Feb 2024",
    description: "Developed an vehicle management system  application using MERN stack, and Twilio and Node-cron for sending reminder service  messages to users in advance",
    image: kecvms,
    tags: ["MERN", "Twilio","Node-cron"],
    category: "web app",
    github: "https://github.com/kamalj57/KEC-VMS",
    webapp: "https://kec-vms.vercel.app/",
  },
  {
    id: 3,
    title: "Redux Cartify",
    date: "Jun 2024 - Jun 2024",
    description: "Developed an e-commerce website that utilizes Redux Toolkit concepts, including creating slice and actions for efficient state management.",
    image: reduxcartify,
    tags: ["React","Redux Toolkit"],
    category: "web app",
    github: "https://github.com/kamalj57/ReduxCartify",
    webapp: "https://redux-cartify.vercel.app/",
  },
  {
    id: 4,
    title: "Stock Management",
    date: "May 2024 - May 2024",
    description: "Developed an mobile application to manage the stock details of an textile shop ",
    image: stock,
    tags: ["Flutter","Node.js","MongoDB"],
    category: "android app",
    github: "https://github.com/kamalj57/Consultancy",
    webapp: "",
  },
  {
    id: 5,
    title: "Infotube",
    date: "Aug 2023 - Aug 2023",
    description: "Developed the Infotube project, a project management app that helps students identify unique projects and showcase their talents across India. Presented at the Smart India Internal Hackathon @ KEC.",
    image: infotube,
    tags: ["MERN"],
    category: "web app",
    github: "",
    webapp: "",
  },
  {
    id: 6,
    title: "Event Management",
    date: "Feb  2023 - Feb 2023",
    description: "Developed an event management app using HTML, CSS, and Google Sheets for data storage during the event of E-Horyzon'23 @ KEC.",
    image: eventmanagement,
    tags: ["HTML/CSS", "Google Sheets"],
    category: "web app",
    github: "",
    webapp: "",
  },
  {
    id: 7,
    title: "Hospital Management System",
    date: "Oct  2023 - Nov  2023",
    description: "Developed a hospital management web app with a user-friendly UI, including modules like appointment booking. The project follows Agile principles.",
    image: hospitalmanagement,
    tags: ["MERN"],
    category: "web app",
    github: "https://github.com/kamalj57/HospitalManagement_Agile",
    webapp: "",
  },
  {
    
      id: 8,
      title: "Plant Disease Identifier_UI",
      date: "Oct 2023 - Oct 2023",
      description: "Designed a plant disease identifier app using Flutter, focusing on the user interface.",
      image: plantdisease,
      tags: ["Flutter"],
      category: "android app",
      github: "https://github.com/kamalj57/PlantDiseaseIdentifierApp_Flutter",
      webapp: "",
    
  },
  {
    id: 9,
    title: "Elderly To-Do",
    date: "Oct 2023 - Nov 2023",
    description: "Developed an Elderly To-Do app to help manage the daily tasks of elderly people for the IXplorer event as part of Celesta'23 organized by GDSC IIT Patna.",
    image: Dashboard,
    tags: ["MERN"],
    category: "web app",
    github: "https://github.com/kamalj57/ElderlyApp_ToDo",
    webapp: "",
  },
  {
    id: 10,
    title: "Hospital Landing Page",
    date: "Jun 2023",
    description: "Designed a hospital landing page concept UI to showcase the specialties of the hospital using Figma.",
    image: hospital,
    tags: ["Figma"],
    category: "design",
    designLink: "https://dribbble.com/shots/22274140-Web-view-for-Hospital-System?utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=Web%20view%20for%20Hospital%20System&utm_medium=Social_Share",
  },
  {
    id: 11,
    title: "Elderly To-Do_UI",
    date: "Oct 2023 - Nov 2023",
    description: "Designed an Elderly To-Do app to help manage the daily tasks of elderly people for the IXplorer event as part of Celesta'23 organized by GDSC IIT Patna.",
    image: elderly,
    tags: ["Figma", "To-Do App", "Elderly To-Do"],
    category: "design",
    designLink: "https://dribbble.com/shots/22969610-Elderly-Remainder-App?utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=Elderly%20Remainder%20App&utm_medium=Social_Share",
  },
  {
    id: 12,
    title: "Instagram Clone",
    date: "Jun 2023",
    description: "Designed an Instagram concept UI Kit using Figma.",
    image: instaclone,
    tags: ["Figma"],
    category: "design",
    designLink: "https://dribbble.com/shots/22932500-Instagram-UI-Kit-2023-1-0?utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=Instagram%20UI%20Kit%202023%201.0&utm_medium=Social_Share",
  },
  {
    id: 13,
    title: "WhatsApp Clone",
    date: "Jul 2023",
    description: "Designed a WhatsApp UI Kit with a concept of separate groups and chat using Figma.",
    image: whatsappclone,
    tags: ["Figma"],
    category: "design",
    designLink: "https://dribbble.com/shots/22984529-CHATAPP-1-0?utm_source=Clipboard_Shot&utm_campaign=kamalj_57&utm_content=CHATAPP%201.0&utm_medium=Social_Share",
  },
];


export const volunteering = [
  {
    id: 0,
    img: emdc,
    position: "EXECUTIVE MEMBER",
    desc: "Entrepreneurship Management and Development Centre",
    date: "Sep 2023",
  },
  {
    id: 1,
    position: "CLASS REPRESENTATIVE",
    date: "Jun 2022 - Dec 2022",
  }  
];
