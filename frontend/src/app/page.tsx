import About from "./components/about"
import Header from "./components/header"
import Hero from "./components/hero"
export default function Home() {
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll">
      <Header />

      <section id="hero" className=" h-screen snap-center ">
        <Hero />
      </section>

      <section id="about" className=" snap-center">
        <About />
      </section>

      
    </div>
  )
}
