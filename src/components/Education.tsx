import React from 'react'
import { Link } from 'react-router-dom'

export default function Education() {
    const courses =  ["Embedded Design: Enabling Robotics", 'Computing Fundamentals', 'Fundamentals of Networks', 'Differential Equations and Linear Algebra', 'Calculus 3','Discrete Structures', 'Probability and Statistics', 'Physics 2']
    const inProgress = ["Machine Learning and Pattern Recognition", "Engineering Algorithms", "Circuits and Signals", "Digital Design and Computer Organization"]

    return (
   <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-white">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-center items-center">
                Education
            </h2>
        </div> 
        <div className='md:flex justify-between w-full'> 
                <img src='northeastern.png' alt='Northeastern' className='w-96'/>
            <div className='mt-8 md:mt-0 text-xl md:text-right'>
                <div className='font-bold'> Bachelor's Degree in Computer Engineering, May 2025 </div>
                <div> <span className='font-bold'>Minors:</span> Math, Computer Science </div>
                <div><span className='font-bold'> GPA:</span> 3.91 </div>
                <div><span className='font-bold'>Awards:</span> Dean of Engineering Merit Scholarship, Deans List</div>
            </div>
        </div>
        <div> 
            <h3 className='text-2xl font-bolder mt-8 font-light text-gray-400 w-full mx-auto max-w-screen-sm text-center mb-8'>Relevant Coursework </h3>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 '>
            {courses.map(course => {
                return ( 
                    <div className='rounded-lg hover:text-yellow-600 text-white px-4 py-2 block font-semibold bg-gray-800 hover:bg-gray-700 text-lg'> 
                       {course}
                    </div>
                    )
            })}
            </div>
            <h3 className='text-2xl font-bolder mt-8 font-light text-gray-400 w-full mx-auto max-w-screen-sm text-center mb-8'> In Progress - Fall 2023</h3>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
            {inProgress.map(course => {
                return ( 
                    <div className='rounded-lg hover:text-yellow-600 text-white px-4 py-2 block font-semibold bg-gray-800 hover:bg-gray-700 text-lg'> 
                       {course}
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}
