import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import Logo from "../assets/logo1.png";
export default function NavTop() {
  return (
    <div>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#2B4898",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container style={{ margin: "0 13%" }}>
          <img
            className="d-block "
            src={Logo}
            alt="First slide"
            style={{ height: "50px", position: "relative", left: "10px" }}
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            style={{ position: "relative", right: "20px" }}
          >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <InputGroup className="me-auto " style={{ width: "50%" }}>
              <FormControl
                placeholder="Buscar..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              
             <button className='btn btn-dark'  >
                                    <i className="fas fa-search"></i>
                                   
                                    </button>
            </InputGroup>
            <Form className="d-flex">
              <Navbar.Collapse id="basic-navbar-nav" expand="lg">
                <Nav className="me-auto">
                  <Nav.Link href="#home" style={{ color: "white" }}>
                    Mis Pedidos
                  </Nav.Link>

                  <NavDropdown
                    title="Login"
                    bg="light"
                    style={{ color: "white !important" }}
                  >
                    <NavDropdown.Item href="#action/3.2">
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
                  <Nav.Link
                    href="#link"
                    color="white"
                    style={{ color: "white" }}
                  >
                    Link
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
