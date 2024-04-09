import Hero from "../components/Hero"
import About from "./About"
import { StaticMap } from "./StaticMap";
import Portfolio from "./Portfolio"
import Services from "./Services";

function Home() {
  const lat = -8.830811;
  const lng = 13;
  const zoom = 15;
  const size = 600;
  const mapType = 'roadmap';
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <div className="App">
        <StaticMap lat={lat} lng={lng} zoom={zoom} size={size} mapType={mapType} />
      </div>
    </>
  )
}

export default Home