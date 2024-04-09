import Hero from "../components/Hero"
import About from "./About"
import { Map } from "./Map";
import Portfolio from "./Portfolio"
import Services from "./Services";

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