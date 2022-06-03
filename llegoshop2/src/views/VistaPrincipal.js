import NavTop from "../components/NavTop";
import TipoMarket from "../components/TipoMarket";
import SlickSlider from "../components/SlickSlider1";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
export default function VistaPrincipal() {
  return (
    <div>
      <NavTop />
      <Container style={{position:'relative',top:'80px'}}>
          <div style={{margin:'0 85px'}}>
        <TipoMarket />
        <SlickSlider /></div>
       
      </Container>
      <Footer />
      
    </div>
  );
}
