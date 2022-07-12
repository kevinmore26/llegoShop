import { BrowserRouter, Routes, Route } from "react-router-dom";
import VistaPrincipal from "./views/VistaPrincipal";
import ProductosComidaRapida from "./views/ProductosKfcView";
import CrearProductoView from "./views/CrearProductoView";
import ListaProductosView from "./views/ListarProductosView";
import EditarProductoView from "./views/EditarProductoView";
import EliminarProducto from "./views/EliminarProducto";
import ComidaRapidaListView from "./views/ComidaRapidaListView";
import ProductosKfcView from "./views/ProductosKfcView";
import ProductoView from "./views/ProductoView";
import CarritoContextProvider from "./context/carritoContext";
import CarritoView from "./views/CarritoView";
export default function App() {
  return (
    <BrowserRouter>
      <CarritoContextProvider>
        <Routes>
          {/* el Routes va verificar qué ruta necesitamos y que componente usar */}
          <Route exact path="/" element={<VistaPrincipal />} />
          <Route exact path="/carrito" element={<CarritoView />} />
          <Route
            exact
            path="/comidarapidalist/productoskfc"
            element={<ProductosKfcView />}
          />
          <Route
            exact
            path="/comidarapidalist/productoskfc/:id"
            element={<ProductoView />}
          />
          <Route
            exact
            path="/comidarapidalist"
            element={<ComidaRapidaListView />}
          />
          <Route exact path="/crear" element={<CrearProductoView />} />
          <Route exact path="/administrador" element={<ListaProductosView />} />
          <Route exact path="/editar/:id" element={<EditarProductoView />} />
          <Route exact path="/eliminar/:id" element={<EliminarProducto />} />
        </Routes>
      </CarritoContextProvider>
    </BrowserRouter>
  );
}
