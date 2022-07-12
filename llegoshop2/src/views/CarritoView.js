import { useContext } from "react";
import NavTop from "../components/NavTop";
import { CarritoContext } from "../context/carritoContext";

export default function CarritoView() {
  const { carrito } = useContext(CarritoContext);

  return (
    <div className="container">
      <NavTop />
      <div style={{ position: "relative", top: "50px" }}>
        <div className="my-4 text-center">Resumen de compra</div>
        <table className="table">
          <thead>
            <tr>
              <th>ImagenReferencial</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio c/u</th>
              <th>Precio x producto</th>
             
            </tr>
          </thead>
          <tbody>
            {carrito.map((prod, i) => ( 
              <tr key={i}>
                <td>
                  <img
                    src={
                      prod.productoImagen !== ""
                        ? prod.productoImagen
                        : "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"
                    }
            
                    style={{ width: "100px" }}
                    alt="error"
                  />
                </td>
                <td>{prod.nombre}</td>

                <td>{prod.cantidad}</td>
                <td>{prod.precio}</td>
                <td>{prod.cantidad * prod.precio}</td>
           
              </tr> 
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
