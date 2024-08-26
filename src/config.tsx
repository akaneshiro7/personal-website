import { EducationProps } from "./components/Education";
import { HeroProps } from "./components/Hero";
import JobCard, { JobCardProps } from "./components/JobCard";
import { ProjectProps } from "./components/ProjectCard";
import { AboutProps } from "./pages/About";
const hero: HeroProps = {
    name: 'Aidan Kaneshiro',
    jobTitle: 'Quantative Strat',
    lookingFor: 'New-Grad 2025 Roles',
    currently: 'Morgan Stanley',
    previous: 'UBS and Leidos',
    studying: false,
}

const workExperience: JobCardProps[] = [
    {            
        location:"NYC, New York",
        jobDescription : "Developed A Full-Stack Application to Dynamically Generate Time-Series Reports",
        jobTitle : "Quantiative Finance Summer Analyst",
        company : "Morgan Stanley",
        skills : ["Python", 'TypeScript', 'q/kdb+', 'React'],
        date:"June 2024 - August 2024",
        shortDate:"Jun 2024 - Aug 2024",
        link:"https://www.morganstanley.com/"
    },
    {            
        location:"NYC, New York",
        jobDescription : "Implemented Statistical Models and Automated Processes for Emerging Market Debt Team",
        jobTitle : "Fixed Income Strategist",
        company : "UBS",
        skills : ["Python", "SQL", "Bash", 'Machine Learning', 'Time-Series Analysis'],
        date:"January 2024 - June 2024",
        shortDate:"Jan 2024 - Jun 2024",
        link:"https://www.ubs.com/"
    },
    {            
        location:"Bethesda, Maryland",
        jobDescription : "Developed Full Stack Web Apps, Desktop Apps, and Backend Applications for Submarine Training Systems",
        jobTitle : "System Engineer Coop",
        company : "Leidos",
        skills : ["Javascript", "Python", "React", "Express", "SQL", "MariaDB", "Bash", "Electron", "Websockets"],
        date:"January 2023 - December 2023",
        shortDate:"Jan 2023 - Dec 2023",
        link:"https://www.leidos.com/"
    },
    {
        location:"Boston, Massachusetts", 
        jobDescription : "Leveraged Cloud Computing to benchmark and quantify resource consumption and carbon emissions of Large Language Models and High Performance Computing Systems",
        jobTitle : "HPC Research Assistant",
        company : "Goodwill Computing Laboratory",
        skills : ["Python", "AWS EC2", "Machine Learning", "Large Language Models"],
        date:"September 2023 - December 2023",
        shortDate:"Sept 2023 - Dec 2023",
        link:"https://goodwillcomputinglab.github.io/",
    },
    // {
    //     location:"Boston, Massachusetts",
    //     jobDescription : "Full-Stack Web Development for a gamified, financial-literacy Web Application",
    //     jobTitle : "Full-Stack Software Engineer",
    //     company : "Generate",
    //     skills : ["Next.js", "PostgreSQL", "React", "Prisma", "TailwindCSS"],
    //     date:"September 2023 - Present",
    //     shortDate:"Sept 2023 - Present",
    //     link:"https://generatenu.com/",
    // }

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
    courses : ["Machine Learning and Pattern Recognition", "Engineering Algorithms", "Research - High Performance Computing", "Digital Design and Computer Organization", "Embedded Design: Enabling Robotics", 'Computing Fundamentals', 'Fundamentals of Networks', 'Differential Equations and Linear Algebra', 'Calculus 3','Discrete Structures', 'Probability and Statistics', 'Physics 2'],
    inProgress : ["Machine Learning and Stastical Learning 2", "Capstone", "Database Design", "Circuits and Signals"]
}

const skills=['TypeScript', 'JavaScript','Python', 'C++', 'React', 'Express','Electron', 'Bash','TailwindCSS', 'MariaDB', 'REST API', 'SQL', 'Web Development', 'q/kdb+']
const interests=['Machine Learning', 'Natural Language Processing', 'HuggingFace', 'Pandas', 'FastAI', 'PyTorch']
const hobbies=["Surfing", "Volleyball (HS Varsity Captain)", "Basketball (Traveled to Japan to Play)", "Hiking", "National Parks (20 out of 63)", "Traveling",]

const paragraphs = [
    'I am Aidan Kaneshiro, a Computer Engineering student at Northeastern University, pursuing minors in Computer Science and Math.',
    'Previously, I have worked as a Quantitative Summer Analyst at Morgan Stanley, a Fixed-Income Strategist at UBS, and a System Engineer at Leidos. At MS, I developed a Full-Stack Application to dynamically generate websites and time-series reports based off a yaml file. At UBS, I implemented stastical models in Python and built out automated processes for webscraping and updating databases. At Leidos, I developed Full Stack Web-Apps and Desktop Apps to manage Audio Distribution Networks among Submarine Training Systems. Through these experiences, I have gained significant expertise in Machine Learning and Full-Stack Development.',
    
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