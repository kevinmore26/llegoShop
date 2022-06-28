import { BrowserRouter, Routes, Route } from "react-router-dom";
import VistaPrincipal from "./views/VistaPrincipal";
import ProductosComidaRapida from "./views/ProductosComidaRapida"
import CrearProductoView from "./views/CrearProductoView";
import ListaProductosView from "./views/ListarProductosView";
import EditarProductoView from "./views/EditarProductoView";
export default function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          {/* el Routes va verificar qué ruta necesitamos y que componente usar */}
          <Route exact path="/"  element={<VistaPrincipal/>}  />  
          <Route exact path="/comidarapida"  element={<ProductosComidaRapida/>}  />  
          <Route exact path="/crear"  element={<CrearProductoView/>}  />  
          <Route exact path="/administrador"  element={<ListaProductosView/>}  />
          <Route exact path="/editar/:id"  element={<EditarProductoView/>}  />  
        </Routes>
      
    </BrowserRouter>
  );
}
