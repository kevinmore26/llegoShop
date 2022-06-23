import { BrowserRouter, Routes, Route } from "react-router-dom";
import VistaPrincipal from "./views/VistaPrincipal";
import ProductosComidaRapida from "./views/ProductosComidaRapida"
import CrearProductoView from "./views/CrearProductoView";
export default function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          {/* el Routes va verificar qué ruta necesitamos y que componente usar */}
          <Route exact path="/"  element={<VistaPrincipal/>}  />  
          <Route exact path="/comidarapida"  element={<ProductosComidaRapida/>}  />  
          <Route exact path="/administrador"  element={<CrearProductoView/>}  />  
        </Routes>
      
    </BrowserRouter>
  );
}
