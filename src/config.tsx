import { EducationProps } from "./components/Education";
import { HeroProps } from "./components/Hero";
import JobCard, { JobCardProps } from "./components/JobCard";
import { ProjectProps } from "./components/ProjectCard";
import { AboutProps } from "./pages/About";
const hero: HeroProps = {
    name: 'Aidan Kaneshiro',
    jobTitle: 'Quantative Strat at Morgan Stanley',
    lookingFor: 'New-Grad 2025 Roles',
    currently: 'string',
    previous: 'UBS and Leidos',
    studying: false,
}

const workExperience: JobCardProps[] = [
    {            
        location:"Bethesda, Maryland",
        jobDescription : "Developing Full Stack Web Apps, Desktop Apps, and Backend Applications for Submarine Training Systems",
        jobTitle : "System Engineer Coop",
        company : "Leidos",
        skills : ["Javascript", "Python", "React", "Express", "SQL", "MariaDB", "Bash", "Electron", "Websockets"],
        date:"January 2023 - Present",
        shortDate:"Jan 2023 - Present",
        link:"https://www.leidos.com/"
    },
    {
        location:"Boston, Massachusetts", 
        jobDescription : "Leveraging Cloud Computing to benchmark and quantify resource consumption and carbon emissions of Large Language Models and High Performance Computing Systems",
        jobTitle : "HPC Research Assistant",
        company : "Goodwill Computing Laboratory",
        skills : ["Python", "AWS EC2", "Machine Learning", "Large Language Models"],
        date:"September 2023 - Present",
        shortDate:"Sept 2023 - Present",
        link:"https://goodwillcomputinglab.github.io/",
    },
    {
        location:"Boston, Massachusetts",
        jobDescription : "Full-Stack Web Development for a gamified, financial-literacy Web Application",
        jobTitle : "Full-Stack Software Engineer",
        company : "Generate",
        skills : ["Next.js", "PostgreSQL", "React", "Prisma", "TailwindCSS"],
        date:"September 2023 - Present",
        shortDate:"Sept 2023 - Present",
        link:"https://generatenu.com/",
    }

]

const projects: ProjectProps[] = [
    {                
        title:"Algorithmic Trading Bot", 
        skills:'Python, Pandas, Alpaca, Natural Language Processing',
        description:`Designed an algorithmic trading bot using Python, pandas, and the Alpaca API, which employs a down-gap trading strategy to scan and execute trades on over 2500 stocks. 
            Analyzes intraday data to identify stocks that gapped down at least 2% below the prior day's low and execute appropriate trades. 
            Working on leveraging Natural Language Processing through Hugging Face Transformers to analyze historical news data, predict trading signals, and study their effect on correlated equities.`,
        img:"gap-down.png",
        github:"https://github.com/akaneshiro7/algo-trading-bots",
        type:"Personal Project"
    },
    {
        title:"Deep Learning for Malaria Cell Detection", 
        skills:'Python, Pandas, FastAI, Pytorch, Machine Learning',
        description:`Fine-tuned a Convolutional Neural Network to accurately detect malaria-infected cells, achieving a 98% accuracy rate across over 27,000 images.
            Implemented Grad-CAM technique to understand and visualize the model's decision-making process. 
            Implemented advanced data preprocessing, augmentation, and gradient descent techniques to optimize the model's performance.`,
        img:"malaria.png",
        github:"https://github.com/akaneshiro7/malaria-cell-detection",
        type:"Personal Project"
    },
    {
        title:"Portfolio Website",
        skills:'Typescript, ReactJS, TailwindCSS, Front-End Development',
        description:'Developed a Portfolio Website to display Projects, Work Experience, and Resume',
        img:"portfolio.png",
        github:"https://github.com/akaneshiro7/personal-website",
        type:"Personal Project",
    },
    {
        title:"Robotic Arm Assembly Line",
        skills:"FPGA Programming, Digital Design, Quartus Prime",
        description:"Implemented PWM techniques using Intel Quartus Prime and DE1-SoC FPGA for precise robotic arm control, while developing a program with digital design concepts for independent motor control, position saving, and meeting timing requirements for assembly line simulation.",
        img:"robot-arm.jpg",
        github:"https://github.com/akaneshiro7/robotic-arm-PWM",
        type:"Course: Embedded Design",
    },
    {
        title:"Flappy Bird",
        skills:'Python, Pygame, Game Mechanics',
        description:'Cloned Flappy Bird using Python, Added additional Mechanics including AntiGravity Mode and Custom Bird Images. Utilized Object Oriented Principles to Create Bird and Pipe Classes. Implemented Physics-based Mechanics and calculated Pixel Perfect collision using Pygame.',
        img : "flappy-bird.gif",
        github:"https://github.com/akaneshiro7/flappy-bird",
        type:"Course: Computing Fundamentals",
    }
]
const education: EducationProps = {
    courses : ["Embedded Design: Enabling Robotics", 'Computing Fundamentals', 'Fundamentals of Networks', 'Differential Equations and Linear Algebra', 'Calculus 3','Discrete Structures', 'Probability and Statistics', 'Physics 2'],
    inProgress : ["Machine Learning and Pattern Recognition", "Engineering Algorithms", "Research - High Performance Computing", "Digital Design and Computer Organization"]
}

const skills=['TypeScript', 'JavaScript','Python', 'C++', 'React', 'Express','Electron', 'Bash','TailwindCSS', 'MariaDB', 'REST API', 'SQL', 'Web Development']
const interests=['Machine Learning', 'Natural Language Processing', 'HuggingFace', 'Pandas', 'FastAI', 'PyTorch']
const hobbies=["Surfing", "Volleyball (HS Varsity Captain)", "Basketball (Traveled to Japan to Play)", "Hiking", "National Parks (19 out of 63)", "Traveling",]

const paragraphs = [
    'I am Aidan Kaneshiro, a Computer Engineering student at Northeastern University, pursuing minors in Computer Science and Math.',
    'I am currently working as a System Engineering Intern at Leidos in Bethesda, Maryland, where I am developing software for Submarine Training Systems. My main projects have been focused on developing Web and Desktop Applications for Audio Distribution Networks. This includes developing RESTful APIs using Express, designing User Interfaces with React and TailwindCSS, building and packaging Desktop Applications with Electron, designing database schemas in MariaDB and SQL, real-time communication with WebSockets, and more.',
    'Outside of work, I have been interested in Machine Learning and Natural Language Processing. I have begun investigating these topics with FastAI, Pytorch, and Hugging Face. To practice, I developed a Machine Learning model to detect Parasitized Malaria Cell with 98.6% Accuracy! In addition, I am working on classifying stock-related news data with Hugging Face Transformers and analyzing its effect on traded equities.'
]
const email = 'aidankaneshiro@gmail.com'
const linkedin = 'https://www.linkedin.com/in/aidan-kaneshiro/'
const github = 'https://github.com/akaneshiro7'
const resume = 'resume.pdf'

const about:AboutProps = {
    skills,
    interests,
    email,
    github, 
    linkedin,
    resume,
    hobbies,
    paragraphs
}
export {hero, workExperience, projects, education, about}