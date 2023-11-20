"use client"
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen flex flex-col relative md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className=' absolute top-24 uppercase tracking-[20px]'>about</h3>
      <motion.img
        initial={{
            x: -200,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1,
            x:0,
        }}
        viewport={{
          // once:true,

        }}
              src="/hero.jpg"
              alt="my img"
              className=' rounded-full object-contain h-56 w-56 -mb-20 md:mb-0'/>
    </div>
  )
}

export default About