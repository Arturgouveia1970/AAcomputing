import { Navbar } from "flowbite-react";

function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img 
          src="https://www.zarla.com/website-builder/api/logo/41622f41157f9d9eae341e4da3002c75c0f13575b5f7a241e775529d56c8df0a" 
          className="mr-5 ml-8 h-10 w-24 sm:h-9" 
          alt="AAcomputing Logo" 
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AAcomputing</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mr-8">
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/servicos">Serviços</Navbar.Link>
        <Navbar.Link href="/portfolio">Portfolio</Navbar.Link>
        <Navbar.Link href="#">Contacto</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
