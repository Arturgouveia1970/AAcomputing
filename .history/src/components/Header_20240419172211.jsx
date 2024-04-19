import { Navbar } from "flowbite-react";
import { Link } from 'react-scroll';

function Header() {
  return (
    <Navbar fluid rounded className="fixed w-full shadow rounded-none bg-blue text-gold bg-opacity-100 lg:p-5">
        <Navbar.Brand href="/">
          <img 
            src="https://www.zarla.com/website-builder/api/logo/41622f41157f9d9eae341e4da3002c75c0f13575b5f7a241e775529d56c8df0a" 
            className="text-sm mr-0 w-20 h-20 ml-4 sm:w-20 sm:h-20 lg:text-lg md:ml-20 md:w-32 "
            alt="AAcomputing Logo" 
          />
          <span className="text-xl self-center whitespace-nowrap font-semibold dark:text-white font-['Nunito'] md:text-3xl">AAcomputing</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="mr-8 md:text-2xl md:ml-20">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Link to="about" smooth={true} duration={800} className="scroll-smooth cursor-pointer"><Navbar.Link>Sobre</Navbar.Link></Link>
          <Link to="services" smooth={true} duration={800} className="scroll-smooth cursor-pointer"><Navbar.Link>Serviços</Navbar.Link></Link>
          <Link to="portfolio" smooth={true} duration={800} className="scroll-smooth cursor-pointer"><Navbar.Link href="/portfolio">Portofólio</Navbar.Link></Link> 
          <Link to="contacto" smooth={true} duration={800} className="scroll-smooth cursor-pointer"><Navbar.Link href="/portfolio">Contacto</Navbar.Link></Link> 
        </Navbar.Collapse>
    </Navbar>
      
  );
}

export default Header;
