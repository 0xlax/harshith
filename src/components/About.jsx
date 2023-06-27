import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motions'
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5 * index, 0.75)} className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-[1px] rounded-[20px] shadow-card">
        <div options={{max:45, scale:1, speed:300}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
<div className="flex flex-col items-center justify-center h-screen">
  <motion.div variants={textVariant()}>
    {/* <p className={styles.sectionSubText}>Introduction</p> */}
    <h2 className={styles.sectionHeadText}>Overview.</h2>
  </motion.div>

  <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] text-justify">
    A versatile developer skilled in <span className="text-[#826fff]">ReactJS</span>, <span className="text-[#826fff]">MERN Stack</span>, <span className="text-[#826fff]">Node.js</span>, <span className="text-[#826fff]">Golang</span>, and <span className="text-[#826fff]">Unix</span>.
    With a passion for creating dynamic and seamless user experiences, I excel in crafting robust web applications. Leveraging React's component-based approach and proficiency in MongoDB, Express.js, and Node.js, I ensure efficient communication and server-side solutions. Additionally, my expertise in Golang and Unix enables me to build high-performance applications with optimized system performance.
  </motion.p>
</div>



      {/* <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div> */}

      

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div> */}
    </>
  )
}

export default SectionWrapper(About, "about")