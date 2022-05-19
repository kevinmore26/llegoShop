import { BrowserRouter, Routes, Route } from "react-router-dom";
import VistaPrincipal from "./views/VistaPrincipal";

export default function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          {/* el Routes va verificar qué ruta necesitamos y que componente usar */}
          <Route exact path="/"  element={<VistaPrincipal/>}  />  
        </Routes>
      
    </BrowserRouter>
  );
}
