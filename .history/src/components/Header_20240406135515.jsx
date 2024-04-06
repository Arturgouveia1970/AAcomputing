import { Navbar, Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar fluid className="bg-blue text-orange">
      <Navbar.Brand href="/">
        <img src={"import { Navbar, Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar fluid className="bg-blue text-orange">
      <Navbar.Brand href="/">
        <img src={"/src/assets/ricardo2.png"} alt="logo"  />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-orange">Home</Navbar.Link>
        <Navbar.Link href="/sobre" className="text-orange">Sobre Nós</Navbar.Link>
        <Navbar.Link href="/empresa" className="text-orange">Empresa</Navbar.Link>
        <Navbar.Link href="/contacto" className="text-orange">Contactos</Navbar.Link>
        <Dropdown
          className='bg-orange'
          arrowIcon={true}
          inline
          label={"Serviços"}
        >
          <Dropdown.Item><Link to="/casa">Casa</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/saude">Saúde</Link></Dropdown.Item>
          <Dropdown.Item><Link to="automovel">Automóvel</Link></Dropdown.Item>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;"} alt="logo"  />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-orange">Home</Navbar.Link>
        <Navbar.Link href="/sobre" className="text-orange">Sobre Nós</Navbar.Link>
        <Navbar.Link href="/empresa" className="text-orange">Empresa</Navbar.Link>
        <Navbar.Link href="/contacto" className="text-orange">Contactos</Navbar.Link>
        <Dropdown
          className='bg-orange'
          arrowIcon={true}
          inline
          label={"Serviços"}
        >
          <Dropdown.Item><Link to="/casa">Casa</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/saude">Saúde</Link></Dropdown.Item>
          <Dropdown.Item><Link to="automovel">Automóvel</Link></Dropdown.Item>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;