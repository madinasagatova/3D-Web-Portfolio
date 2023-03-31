import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[100px]  max-w-8xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-pink-700' />
            <div className='w-1 sm:h-80 h-40 bg-gradient-to-r from-pink-700' />
        </div>
         <div>
          <h3 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-pink-700'>Madina</span></h3>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>I'm a React Frontend Developer. Need to add more info here. Something about your passion <br className="sm:block hidden"/> This is my Portfolio. And here as well </p>
          </div>
      </div>
      <ComputersCanvas/>

      <div className='absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;