import React from 'react';
import Carousel from '../components/Carousel';

export type AboutProps = {
  skills: string[],
  interests: string[],
  hobbies: string[],
  paragraphs: string[],
  email: string,
  github: string,
  linkedin: string,
  resume: string,
}

export default function About({skills, interests, hobbies, paragraphs, email, github, linkedin, resume}: AboutProps) {
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
              {paragraphs.map(p => (
                <p className='my-2'> {p} </p>
              ))}
              <div className='grid grid-cols-4 font-extrabold gap-x-2 text-gray-100'>
                <a target="_blank" href={`mailto:${email}`} className='text-center rounded py-2 bg-yellow-600 hover:bg-yellow-500'>Contact</a>
                <a target="_blank" href={github} className='text-center rounded py-2 bg-gray-600 hover:bg-gray-500'>Github</a>
                <a target="_blank" href={linkedin} className='text-center rounded py-2  bg-blue-500 hover:bg-blue-400'>Linkedin</a>
                <a target="_blank" href={resume} className='text-center rounded py-2 bg-indigo-500 hover:bg-indigo-400'>Resume</a>

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

            <h1 className='text-2xl font-bold mt-8 mb-4'>Developing</h1>
            <ul className='flex gap-2 flex-wrap'>

              {interests.map(skill => (
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
