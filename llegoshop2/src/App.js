import { BrowserRouter, Routes, Route } from "react-router-dom";
import VistaPrincipal from "./views/VistaPrincipal";
import ProductosComidaRapida from "./views/ProductosComidaRapida"
export default function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          {/* el Routes va verificar qué ruta necesitamos y que componente usar */}
          <Route exact path="/"  element={<VistaPrincipal/>}  />  
          <Route exact path="/comidarapida"  element={<ProductosComidaRapida/>}  />  
        </Routes>
      
    </BrowserRouter>
  );
}
