"use client"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className=" sticky flex top-0 p-5 items-start justify-between max-w-7xl mx-auto z-0 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center "
      >
        <SocialIcon
          url="https://github.com/Sunil-Coding-World"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com/@sunildondey007?si=4NVNqJPZkEE2xCmD"
          fgColor="grey"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.linkedin.com/in/sunil-dondey-b8990518b/"
          fgColor="grey"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/Sunil-Coding-World"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" flex flex-row items-center text-gray-500 cursor-pointer"
      >
        <SocialIcon
          network="email"
          fgColor="grey"
          bgColor="transparent"
          className=" cursor-pointer"
        />
        <p className=" uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  )
}

export default Header
