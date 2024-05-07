import React from 'react'
// import heroimage from '../assets/profilepic7.png'
import {TypeAnimation} from 'react-type-animation'
const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
        
        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            {/* <img src={heroimage} alt="hero image" /> */}
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
            <span className='primary-color'>
                I am a
            </span> <br />
            <TypeAnimation
                sequence={[
                    'Developer', // Types 'One'
                    1000, // Waits 1s
                    'Frontend Developer', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'Backend Developer', // Deletes 'Two' and types 'Three'
                    2000, // Waits 2s
                    'Fullstack Developer', // Deletes 'Three' and types 'Three'
                    2000, // Waits 2s
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Youssef and I am a Fullstack Developer.
            </p>

            <div className='my-8'>
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4
                bg-gradient-to-r from-orange-500 to-pink-500 text-white'>
                    Download CV
                </a>
                <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4
                border border-gray-400 bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:border-none'>
                    Contact
                </a>
            </div>
        </div>

    </div>
  )
}

export default Hero
