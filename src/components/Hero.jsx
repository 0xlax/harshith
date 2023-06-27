import React from 'react'
import  { motion } from 'framer-motion'
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { FaLinkedin, FaGithub } from 'react-icons/fa'



const Hero = () => {
  return (
    
<section className='relative w-full h-screen mx-auto'>
  <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
    <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-3 sm:h-90 h-60 violet-gradient'/>
    </div>
    <div>
      <h1 className={`${styles.heroHeadText} text-white`}>Hello, This is <span className='text-[#999fff]'>Harshith</span></h1>
      <p className={`${styles.heroSubText} mt-5 text-black-100`}>
        Fullstack Developer & <br className='sm:block hidden'/> <span className='text-[#999fff]'>Unix</span> Hobbyist
      </p>
      <div className="flex gap-3 mt-5">
        <a href="https://www.linkedin.com/in/0xlax" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-3xl hover:text-[#999fff] transition-colors duration-300" />
        </a>
        <a href="https://github.com/0xlax" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-3xl hover:text-[#999fff] transition-colors duration-300" />
        </a>
      </div>
    </div>
  </div>
  <ComputersCanvas />
  <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
    <a href='#about'>
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className='w-3 h-3 rounded-full bg-secondary mb-1'
        />
      </div>
    </a>
  </div>
</section>
  )
}

export default Hero