import React from 'react';
import Tilt from 'react-tilt';
import  {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({ index, title, icon}) => {
  return (
    <p>{title}</p>
  )
}
const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview</h2>
   </motion.div>
   <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    I am a creative and skilled Frontend Developer. I am a quick learner, self-started and focesed 
    on details. I like to create scalable, efficient an duser-friendly solutions
    to solve real-world problems. 
   </motion.p>
   <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service, index) =>(
      <ServiceCard key={service.title} index={index}{...service}/>
    ))}
   </div>
   </>
  )
}

export default About