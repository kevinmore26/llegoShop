import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function GroupProductsCarrito({ carrito }) {
  let total = 0;
  total = carrito.reduce((acum, item) => {
    return acum + item.cantidad * item.precio;
  }, 0);
  let totalComprado = 0;
  totalComprado = carrito.reduce((acum, item) => {
    return acum + item.cantidad;
  }, 0);
   
  return (
    <Container style={{ position: "relative", top: "100px" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "80%", padding: "30px" }}>
          <h4 style={{ fontWeight: "bold" }}>CARRITO DE COMPRAS</h4>
          <hr></hr>
          {carrito.map((prod, i) => (
            <div
              style={{ display: "flex", padding: "10px" }}
              key={i}
              className="row"
            >
              <div className="col-3">
                <img
                  src={prod.productoImagen}
                  alt={prod.productoImagen}
                  className="card-img-top"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                />
              </div>

              <div className="col-6">
                <h5>{prod.nombre}</h5>
                <p>{prod.descripcion}</p>
                <h4 style={{ fontWeight: "bold", color: "#4F79C1" }}>
                  S/{prod.precio}
                </h4>
              </div>
              <div className="col-3">
                <p>Cantidad</p>
                <h6>{prod.cantidad}</h6>
              </div>
              <div>
                {/* TO DO ELIMINAR CARRITO */}
                </div>
              <hr></hr>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "20%",
            border: "0.5px solid #00000026",
            padding: "30px",
            maxHeight:"300px"
          }}
        >
          <div style={{ textAlign: "center", fontWeight: "bold", color: "#4F79C1" }}>
            RESUMEN DE LA ORDEN
          </div>
          <hr></hr>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>SubTotal({totalComprado})</p>
            <p>S/{total}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h6 style={{ fontWeight: "bold" , color: "#4F79C1"}}>TOTAL </h6>
            <h6 style={{ fontWeight: "bold"  }}>S/{total}</h6>
          </div>
        </div>
      </div>
    </Container>
  );
}
