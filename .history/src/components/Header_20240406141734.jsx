import { Navbar } from "flowbite-react";

function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="" className="mr-3 h-6 sm:h-9" alt="AAcomputing Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AAcomputing</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/servicos">Serviços</Navbar.Link>
        <Navbar.Link href="/portfolio">Portfolio</Navbar.Link>
        <Navbar.Link href="/con">Contacto</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
