import NavTop from "../components/NavTop";
import TipoMarket from "../components/TipoMarket";
import SlickSlider from "../components/SlickSlider1";
import { Container } from "react-bootstrap";
export default function VistaPrincipal() {
  return (
    <div>
      <NavTop />
      <Container >
          <div style={{margin:'0 85px'}}>
        <TipoMarket />
        <SlickSlider /></div>
      </Container>
    </div>
  );
}
