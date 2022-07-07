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
import pic from "../assets/casco-moto.png";
import { Link } from "react-router-dom";

import Logo from "../assets/logo1.png";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
export default function NavTop() {
  return (
    <div>
      <Navbar
        fixed="top"
        expand="lg"
        style={{
          backgroundColor: "#4f79c1",
          display: "flex",
          justifyContent: "center",
          height:"68px"
        }}
      >
        <Container style={{ margin: "0 8%" }}>
        <NavDropdown
                    title={
                      <div className="pull-left">
                        <img
                          className="thumbnail-image"
                          src="https://www.samueldiosdado.com/wp-content/uploads/2017/08/Men%C3%BA-hamburguesa-herramienta-practica-o-icono-inutil.png"
                          alt="user pic"
                          style={{width:'20px'}}
                        />
                      </div>
                    }
                    bg="light"
                    
                    className="prueba"
                     
                    icon="account_circle_outline"
                    style={{ color: "white !important",position:"relative",top:"8px"  }}
                  >
                    <NavDropdown.Item
                      href="#action/3.2"
                      id="nav-dropdown"
                      className="dropdownWidth"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "0 auto",
                      }}
                    >
                      Supermercado
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        style={{ fontSize: "25px" }}
                      />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                    className="dropdownWidth"
                      href="#action/3.2"
                      id="nav-dropdown"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "0 auto",
                      }}
                    >
                      Minimarket
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        style={{ fontSize: "25px" }}
                      />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                    className="dropdownWidth"
                      href="#action/3.2"
                      id="nav-dropdown"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "0 auto",
                      }}
                    >
                      Comida Rápida
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        style={{ fontSize: "25px" }}
                      />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                    className="dropdownWidth"
                      href="#action/3.2"
                      id="nav-dropdown"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "0 auto",
                      }}
                    >
                      Electro
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        style={{ fontSize: "25px" }}
                      />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                    className="dropdownWidth"
                      href="#action/3.2"
                      id="nav-dropdown"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "0 auto",
                      }}
                    >
                      Farmacia
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        style={{ fontSize: "25px" }}
                      />
                    </NavDropdown.Item>
                    <NavDropdown.Item

                    className="dropdownWidth"
                      href="#action/3.2"
                      id="nav-dropdown"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "0 auto",
                      }}
                    >
                      Mascotas
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        style={{ fontSize: "25px" }}
                      />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                    className="dropdownWidth"
                      href="#action/3.2"
                      id="nav-dropdown"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "0 auto",
                      }}
                    >
                      Bebidas
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        style={{ fontSize: "25px" }}
                      />
                    </NavDropdown.Item>
               
                    
                  </NavDropdown>
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

              <button className="btn btn-dark">
                <i className="fas fa-search"></i>
              </button>
            </InputGroup>
            <Form className="d-flex">
              <Navbar.Collapse
                id="basic-navbar-nav dropdown-button-dark-example1"
                expand="lg"
              >
                <Nav className="me-auto">
                  <div   style={{ color: "white",display:"flex",alignItems:"center",marginRight:"5px" }}>
                    Mis Pedidos
                  </div>

                  <NavDropdown
                    title="Iniciar Sesión"
                    bg="light"
                    id="nav-dropdown"
                    className="prueba"
                    menuVariant="#4F79C1"
                    icon="account_circle_outline"
                    style={{ color: "white !important" }}
                  >
                    <NavDropdown.Item
                      href="#action/3.2"
                      id="nav-dropdown"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "0 auto",
                      }}
                    >
                      Cliente
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        style={{ fontSize: "25px" }}
                      />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.3"
                      id="nav-dropdown"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "0 auto",
                      }}
                    >
                      Despachos
                      <img src={pic} style={{ width: "25px" }} />
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="nav-dropdown">
                      <Link to="administrador">Administrador</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4" id="nav-dropdown">
                      Registrarse
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Link to="/carrito" className="nav-link"></Link>
                </Nav>
              </Navbar.Collapse>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
