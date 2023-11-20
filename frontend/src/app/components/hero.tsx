"use client"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import Bgcircle from "./bgcircle"
import Link from "next/link"

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Sunil Dondey",
      "I'm a programmer.",
      " I turn coffee into code.",
    ],
    loop: true,
    delaySpeed: 1000,
  })

  return (
    <div className="flex flex-col space-y-8 justify-center items-center object-center text-center pt-40">
      <Bgcircle />
      <img
        src="/hero.jpg"
        alt="my img"
        className=" relative rounded-full h-[150px] w-[150px]"
      />

        <h2 className="text-sm uppercase text-gray-500 tracking-[14px] pb-2 justify-center mx-auto">
          Software Engineer
        </h2>
        <h1 className=" text-3xl mx-auto font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="orange" />
        </h1>

      <div className=" flex">
        <Link href={"#about"}>
        <button className="heroButton">About</button>
        </Link>


          <button className="heroButton">Exprience</button>
          <button className="heroButton">Skills</button>
          <button className="heroButton">Projects</button>
        </div>
      </div>

  )
}

export default Hero
