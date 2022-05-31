import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import Logo from "../assets/logo1.png";
export default function NavTop() {
  return (
    <div>
      <Navbar  expand="lg" style={{backgroundColor:'#2B4898'}}>
        <Container  >
             
          <img
            className="d-block "
            src={Logo}
            alt="First slide"
            style={{ height: "50px",position: 'relative',right:'10px' }}
          />
          <InputGroup className="me-auto " style={{ width: "30%"}}>
            <FormControl
              placeholder="Buscar..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav" expand="lg">
            <Nav className="me-auto" >
              <Nav.Link href="#home"  style={{color:'white'}}>Mis Pedidos</Nav.Link>
             
              <NavDropdown title="Login"  bg="light"  style={{color:'white !important'}}>
                
                <NavDropdown.Item href="#action/3.2" >
                  Cliente
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Trabajador
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                 Registrarse
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" color="white"  style={{color:'white'}}>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
         
        </Container>
      </Navbar>
    </div>
  );
}
