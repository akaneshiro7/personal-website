import ProjectCard from './ProjectCard'
export default function Projects() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-center items-center">
                Selected Work
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">               
                Showcased Personal Projects
            </p>
        </div> 
        <div className="grid gap-8 mb-6 md:grid-cols-2 lg:grid-cols-3">

            <ProjectCard 
                title="Algorithmic Trading Bot" 
                skills='Python, Pandas, Alpaca, Natural Language Processing'
                description="Designed an algorithmic trading bot using Python, pandas, and the Alpaca API, which employs a down-gap trading strategy to scan and execute trades on over 2500 stocks. 
                Analyzes intraday data to identify stocks that gapped down at least 2% below the prior day's low and execute appropriate trades. 
                Working on leveraging Natural Language Processing through Hugging Face Transformers to analyze historical news data, predict trading signals, and study their effect on correlated equities."
                img="gap-down.png"
                github="https://github.com/akaneshiro7/algo-trading-bots"
            />
            
            <ProjectCard 
                title="Malaria Cell Detection" 
                skills='Python, Pandas, FastAI, Pytorch, Machine Learning'
                description="Fine-tuned a Convolutional Neural Network to accurately detect malaria-infected cells, achieving a 98% accuracy rate across over 27,000 images.
                 Implemented Grad-CAM technique to understand and visualize the model's decision-making process. 
                 Implemented advanced data preprocessing, augmentation, and gradient descent techniques to optimize the model's performance."
                img="malaria.png"
                github="https://github.com/akaneshiro7/malaria-cell-detection"

            />
    
            <ProjectCard 
                title="Portfolio Website" 
                skills='Typescript, ReactJS, Front-End Development'
                description='Developed a Portfolio Website to display Projects, Work Experience, and Resume'
                img="portfolio.png"
                github="https://github.com/akaneshiro7/personal-website"
            />
            <ProjectCard
                title="Robotic Arm Assembly Line"
                skills="FPGA Programming, Digital Design, Quartus Prime"
                description="
                Implemented PWM techniques using Intel Quartus Prime and DE1-SoC FPGA for precise robotic arm control, while developing a program with digital design concepts for independent motor control, position saving, and meeting timing requirements for assembly line simulation."
                img="robot-arm.jpg"
                github="https://github.com/akaneshiro7/robotic-arm-PWM"
            />
            <ProjectCard 
                title="Flappy Bird" 
                skills='Python, Pygame, Game Mechanics' 
                description='
                Cloned Flappy Bird using Python, Added additional Mechanics including AntiGravity Mode and Custom Bird Images.
                Utilized Object Oriented Principles to Create Bird and Pipe Classes.
                Implemented Physics-based Mechanics and calculated Pixel Perfect collision using Pygame.
                '
                img = "flappy-bird.gif"
                github="https://github.com/akaneshiro7/flappy-bird"
            />       

        </div>

 
    </div>
    
    )
}
