import { PiCopyrightFill } from "react-icons/pi";
function Footer() {
  return (
    <div className="flex flex-col text-white items-center justify-between py-6 text-gray-400 bg-black">
      {/* <img src="./src/assets/logo-white-black.png"  /> */}
      <p className=""><span><PiCopyrightFill /><span>AAcomputing</span></span></p>
    </div>
  )
}

export default Footer;
