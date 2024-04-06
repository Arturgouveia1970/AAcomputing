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
        <Navbar.Link href="/">Home
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
