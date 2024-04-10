import { PiCopyrightFill } from "react-icons/pi";
function Footer() {
  return (
    <div className="flex flex-col text-white text items-center justify-between py-6 text-gray-400 bg-blue mt-10">
      {/* <img src="./src/assets/logo-white-black.png"  /> */}
      <p className="flex justify-center"><PiCopyrightFill /><span>AAcomputing</span></p>
    </div>
  )
}

export default Footer;
