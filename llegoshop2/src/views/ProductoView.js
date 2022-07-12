import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { comidaRapidaKfcPorId } from "../services/productosComidaRapida";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { CarritoContext } from "../context/carritoContext";
import NavTop from "../components/NavTop";

export default function ProductoView() {
  const [producto, setProducto] = useState([]);
  const { anadirACarrito } = useContext(CarritoContext);
  const { id } = useParams();

  const getProducto = async () => {
    try {
      let productoObtenido = await comidaRapidaKfcPorId(id);
      setProducto(productoObtenido);
      console.log(productoObtenido);
      console.log(producto);
    } catch {
      console.log("error");
    }
  };
  const navigate = useNavigate();
  const anadirACarritoContext = () => {
    anadirACarrito(producto);
    const resultado = Swal.fire({
      //icon:'success',
   width:"500",
   icon: 'success',
      title: "Tu producto se añadió al carrito",
      showConfirmButton: true,
      showDenyButton: true,
      cancelButtonColor: "white",
      confirmButtonColor: "#4F79C1",
      confirmButtonText: "Ir al carrito",
      denyButtonText: "Seguir comprando",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        navigate("/carrito");
      } else if (resultado.isDenied) {
        navigate("/comidarapidalist/productoskfc");
      }
    });
  };

  useEffect(() => {
    getProducto();
  }, []);

  return (
    <div>
      <NavTop />
      <div className="container" style={{ position: "relative", top: "140px" }}>
        <div className="row justify-content-between">
          <div className="col-sm12 col-md-7">
            <img
              src={producto.productoImagen}
              style={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            />
          </div>
          <div className="col-sm-12 col-md-5 ">
            <h2 className="fw-bold" style={{ fontFamily: "arial" }}>
              {producto.nombre}
            </h2>
            <h5 className="fw-bold" style={{ color: "#4F79C1" }}>
              Descripción
            </h5>
            <p>{producto.descripcion}</p>
            <div className="py-3 d-flex justify-content-between">
              <span
                style={{
                  fontSize: "25px",
                  color: "#4F79C1",
                  fontWeight: "bold",
                }}
              >
                S/{producto.precio}
              </span>
            </div>
            <button
              onClick={anadirACarritoContext}
              className="btn"
              style={{
                backgroundColor: "#4F79C1",
                borderRadius: "10px",
                color: "white",
                padding: "10px",
                fontWeight: "600",
              }}
            >
              AÑADIR AL CARRITO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
