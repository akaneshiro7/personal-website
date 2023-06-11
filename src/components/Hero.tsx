import { Tooltip } from '@material-tailwind/react'
import Timeline from './WorkExperience'
import Carousel from './Carousel'

export default function Hero() {
  return (
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    <div>Aidan Kaneshiro,</div> 
                    <div>Software Engineer</div>
                </h1>
                <div className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">

                    <p> Looking for <span className='font-semibold '>Winter/Summer 2024 Coops/Internships</span> </p>
                    <p> Currently studying <a href="https://www.northeastern.edu/" target="_blank" className='font-semibold hover:text-yellow-600'>Computer Engineering at Northeastern University - 3.9 GPA </a></p>
                    <p> Previously worked at <a className='font-semibold hover:text-indigo-600' href="https://www.leidos.com/" target="_blank"> Leidos - System Engineer</a> </p>

                </div>
    
                <div className='flex align-items gap-4 mt-4'>
                    <Tooltip
                        content="Typescript"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                        >
                        <img src='typescript.svg' className='w-10 h-10 object-contain' alt='TypeScript'></img>
                    </Tooltip>
                    <Tooltip
                        content="Python"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                        >
                        <img src='python-icon.png' className='object-contain w-10 h-10' alt='Python'></img>
                    </Tooltip>
                    
                    <Tooltip
                        content="NodeJS"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                        >
                        <img src='node-icon.svg' className='object-contain w-10 h-10' alt='Node'></img>
                    </Tooltip>
                    <Tooltip
                        content="React"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                        >
                        <img src='react-icon.png' className='w-10 h-10 object-contain' alt='React'></img>
                    </Tooltip>                    

                    <Tooltip
                        content="MariaDB"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                        >
                        <img src='mariadb.png' className='object-contain w-10 h-10' alt='MariaDB'></img>
                    </Tooltip>
                    <Tooltip
                        content="C++"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                        >
                        <img src='cpp-icon.svg' className='object-contain w-10 h-10' alt='C++'></img>
                    </Tooltip>
                    <Tooltip
                        content="TailwindCSS"
                        animate={{
                            mount: {scale:1, y:0},
                            unmount: {scale:0, y:25},
                        }}>
                        <img src='tailwind.svg' className='object-contain w-10 h-10' alt="TailwindCSS"></img>
                    </Tooltip>
                        
                </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" /> */}
                <Carousel images={["carousel-1.jpeg","carousel-2.jpg", "carousel-3.jpeg" ]} />
            </div>
               
        </div>
  )
}
