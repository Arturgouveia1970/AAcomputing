// import { PiCopyrightFill } from "react-icons/pi";
// function Footer() {
//   return (
//     <div className="flex flex-col text-white items-center justify-between py-6 text-gray-400 bg-blue mt-10">
//       {/* <img src="./src/assets/logo-white-black.png"  /> */}
//       <p className="flex items-center"><PiCopyrightFill /><span>2024 AAcomputing</span></p>
//     </div>
//   )
// }

// export default Footer;


"use client";

import { Footer } from "flowbite-react";

function Footer1() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="AAcomputing"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  );
}

export default Footer1;
