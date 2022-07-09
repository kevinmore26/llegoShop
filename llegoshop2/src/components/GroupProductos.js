import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function GroupProducts({ productos }) {
  console.log(productos.productos);

  return (
    <div style={{ marginTop: "80px" }}>
      <div className="container">
        <div className="row mt-3">
          {productos.map((prod, i) => (
            <div className="col-6 col-lg-3" key={i}>
              <Link to={`/comidarapidalist/productoskfc/${prod.id}`}>
                <div>
                  <img
                    src={prod.productoImagen}
                    alt={prod.productoImagen}
                    className="card-img-top"
                  />
                </div>
              </Link>
              <div className="card-body">
                <h6 className="card-title">{prod.nombre}</h6>
                <span className="fw-bold">{prod.descripcion}</span>
                <div>
                  <span>S/ {prod.precio}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
