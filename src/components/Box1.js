import React from 'react';
import { motion } from "framer-motion";


const Box1 = () => {
  return (
    <div className='box-container' >
        <motion.div 
        className="box"
        animate={{
            x: 500,
            opacity:1
        }}
        initial={{
            opacity:0.1
        }}
         >

        </motion.div>
    </div>
  )
}

export default Box1