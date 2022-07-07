import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  obtenerProductos,
  eliminarProductoPorId,
  obtenerProductoPorId,
  filtrarProducto,
} from "../services/productosServices";
export default function ListaProductosView() {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  const [value, setValue] = useState({
    nombre: "",
    descripcion: "",
    stockProducto: "",
    productoImagen: "",
    precio: "",
  });
  const inputBusqueda = useRef();

  const ejecutarBusqueda = async () => {
    let miBusqueda = inputBusqueda.current.value;
    //aquí arriba se almacena todo lo que escribamos

    if(miBusqueda == '' ){
      let productosObtenidos = await obtenerProductos();

      setProductos(productosObtenidos.productos);
    }else{
      const productosFiltrados = await filtrarProducto(miBusqueda);
      setProductos(productosFiltrados);
    }
    
  };

  const getProductos = async () => {
    try {
      let productosObtenidos = await obtenerProductos();

      setProductos(productosObtenidos.productos);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <Container>
      <h1 >Productos Registrados</h1>
      <div className="d-flex   ">
        <div>
          <Link to="/crear" className="btn btn-primary btn-lg my-2 mt-3 mb-3">
            Crear Producto
          </Link>
        </div>
        <div>
          <div className="d-flex btn-lg my-2 mt-3 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el nombre"
              ref={inputBusqueda}
            ></input>
            <button className="btn btn-dark" onClick={ejecutarBusqueda}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
       
      <table className="table">
        <thead>
          <th>Nombre</th>
          <th>Descripción</th> 
          <th>ImagenReferencial</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Tipo</th>
          <th>Restaurante</th>
          <th> </th>
          <th> </th>
        </thead>
        <tbody>
          {productos.map((prod, i) => (
            <tr key={i}>
              <td>{prod.nombre}</td>
              <td>{prod.descripcion}</td>

              <td>
                <img
                  src={
                    prod.productoImagen !== ""
                      ? prod.productoImagen
                      : "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"
                  }
                  style={{ width: "60px" }}
                  alt="error"
                />
              </td>
              <td>{prod.stockProducto}</td>
              <td>{prod.precio}</td>
              <td>{prod.productoTipo}</td>
              <td>{prod.productoSubTipo}</td>
              <td>
                <Link
                  className="btn btn-warning btn-sm"
                  to={`/editar/${prod.id}`}
                >
                  <i className="fas fa-edit"></i>
                </Link>
              </td>
              <td>
                <Link className="btn  btn-sm" to={`/eliminar/${prod.id}`}>
                  <i className="fas fa-trash"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
