import Hero from "../components/Hero"
import About from "./About"
import Portfolio from "./Portfolio"
import Services from "./Services";
import Map from "./M"

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Map />
    </>
  )
}

export default Home