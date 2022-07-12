import { useContext } from "react";
import NavTop from "../components/NavTop";
import GroupProductsCarrito from "../components/ProductosCarrito";
import { CarritoContext } from "../context/carritoContext";

export default function CarritoView() {
  const { carrito } = useContext(CarritoContext);

  return (
    <div className="container">
      <NavTop />

      <GroupProductsCarrito
        carrito={carrito}
        style={{ position: "relative", top: "150px !important" }}
      />
    </div>
  );
}
