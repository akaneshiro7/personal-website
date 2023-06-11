import React from 'react';
import Carousel from '../components/Carousel';

export default function About() {

  const skills=['TypeScript', 'JavaScript','Python', 'C++', 'React', 'Express','Electron', 'TailwindCSS', 'MariaDB', 'REST API', 'SQL', 'Web Development']
  const improving=['Machine Learning', 'Natural Language Processing', 'HuggingFace', 'Pandas', 'FastAI', 'PyTorch']
  
  const hobbies=["Surfing", "Volleyball (HS Varsity Captain)", "Basketball (Traveled to Japan to Play)", "Hiking", "National Parks (19 out of 64)", "Traveling",]
  
  return (
    <section className="bg-white dark:bg-gray-900 text-white">
      <div className='max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 '>
        <div className="grid lg:grid-cols-12 lg:gap-8">
          <div className='lg:col-span-5 text-white'>
            <Carousel images={['about-3.jpg', 'about-1.JPG', 'about-5.JPG', 'about-2.JPG', 'about-4.jpg']} />
          </div>

          <div className="mr-auto place-self-end lg:col-span-7">
            <h1 className="justify-start flex max-w-2xl flex-cols items-end mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <div>Nice to Meet you!</div> 
            </h1>
            <div className='text-white'>
              <p className='my-2'>
              I am Aidan Kaneshiro, a Computer Engineering student at Northeastern University, pursuing minors in Computer Science in Math.
              </p>
              <p className='my-2'>
                I am currently working as a System Engineering Intern at Leidos in Bethesda, Maryland, where I am developing software for Submarine Training Systems.
                My main projects have been focused on developing Web and Desktop Applications for Audio Distribution Networks. 
                This includes developing RESTful APIs using Express, designing User Interfaces with React and TailwindCSS, building and packaging
                Desktop Applications with Electron, desiging database schemas in MariaDB and SQL, real-time communication with WebSockets, and more.
              </p>
              <p className='my-2'>
                Outside of work, I have been interested in Machine Learning and Natural Language Processing. 
                I have begun investigating these topics with FastAI, Pytorch, and Hugging Face.
                To practice, I developed a Machine Learning model to detect Parasitized Malaria Cell with 98.6% Accuracy!
                In addition, I am working on classifying stock-related news data with Hugging Face Transformers and analyzing its effect on traded equities.
              </p>
              <div className='grid grid-cols-4 font-extrabold gap-x-2 text-gray-100'>
                <a target="_blank" href='mailto:aidankaneshiro@gmail.com' className='text-center rounded py-2 px-4 bg-yellow-600 hover:bg-yellow-500'>Contact</a>
                <a target="_blank" href='https://github.com/akaneshiro7' className='text-center rounded py-2 px-4 bg-gray-600 hover:bg-gray-500'>Github</a>
                <a target="_blank" href='https://www.linkedin.com/in/aidan-kaneshiro/' className='text-center rounded py-2 px-4 bg-blue-500 hover:bg-blue-400'>Linkedin</a>
                <a target="_blank" href='' className='text-center rounded py-2 px-4 bg-indigo-500 hover:bg-indigo-400'>Resume</a>

              </div>
            </div>


          </div>
        </div>
        <div>
            <h1 className='text-2xl font-bold mt-8 mb-4'>Skills</h1>
            <ul className='flex gap-2 flex-wrap'>
              {skills.map(skill => (
                <li className=' font-semibold py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-yellow-600'> {skill}</li>
              ))}
            </ul>

            <h1 className='text-2xl font-bold mt-8 mb-4'>Improving</h1>
            <ul className='flex gap-2 flex-wrap'>

              {improving.map(skill => (
                <li className='font-semibold py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-800 hover:text-yellow-600'> {skill}</li>
              ))}
            </ul>
            <h1 className='text-2xl font-bold mt-8 mb-4'>Hobbies</h1>
            <ul className='flex gap-2 flex-wrap'>

              {
                hobbies.map(skill => (
                  <li className=' font-semibold py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-700 hover:text-yellow-600'> {skill}</li>
                ))
              }
            </ul>

        </div>

      </div>

    </section>
  )
}
