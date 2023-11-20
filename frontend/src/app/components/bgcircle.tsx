import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Bgcircle = (props: Props) => {
  return (
      <motion.div
          initial={{
              opacity:0,
        }} 
        animate={{
              scale: [0.5, 1 , 1.5,2 , 3 ,2, 1.5 , 1, 3 ,1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
              borderRadius:["20","40","30","50","20"]

          }}
          transition={{
              duration:2.5,
              
          }}
          className=' relative flex justify-center items-center text-centre'>
          <div className='absolute border border-[rgba(104,221,86,0.2)] rounded-full h-[200px] w-[200px] mt-52 animate-pulse'/>
          <div className=' absolute border border-[rgba(250,245,245,0.2)] rounded-full h-[350px] w-[350px] mt-52 animate-pulse  '/>
          <div className=' absolute border border-[rgb(#3333)] rounded-full h-[500px] w-[500px] mt-52 animate-pulse '/>
    </motion.div>
  )
}

export default Bgcircle