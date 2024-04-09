import Hero from "../components/Hero"
import About from "./About"
import StaticMap from "./StaticMap";
import Portfolio from "./Portfolio"
import Services from "./Services";

function Home() {
  const lat = -8.830679;
  const lng = 13.228166;
  const zoom = 12;
  const size = 600;
  const mapType ='roadmap';
  const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />     
      <StaticMap 
        lat={lat} 
        lng={lng} 
        zoom={zoom} 
        size={size} 
        mapType={mapType}
        apiKey={} 
      />
      
    </>
  )
}

export default Home