import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function GroupProducts({ productos }) {
    console.log(productos.productos)

    return (
        <div >
            <div className='container'>
                <div className='row mt-3'>

                    {productos.map((prod, i) => (
                        <div className='col-6 col-lg-3' key={i}>
                         
                                <div>
                                    <img src={prod.productoImagen}
                                        alt={prod.productoImagen}
                                        className="card-img-top" />
                                </div>
                                 
                            <div className='card-body'>
                                <h6 className='card-title'>
                                    {prod.descripcion}
                                </h6>
                                <span className='fw-bold'>
                                    {prod.descripcion}
                                </span>

                            </div>
                           
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}