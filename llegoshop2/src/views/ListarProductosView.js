import { Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import {obtenerProductos} from "../services/productosServices"
export default function ListaProductosView(){

    const[productos,setProductos] = useState([])

    
    const getProductos = async() =>{
        try{
            let productosObtenidos = await obtenerProductos() 

            setProductos(productosObtenidos.productos)
            
        }catch{
                console.log('error')
        }
    }

    useEffect(()=>{
        getProductos()
    },[])


    return(
        <Container>
            <h1>Productos Registrados</h1>
            <Link to="/crear" className='btn btn-primary btn-lg my-2'>
                    Crear Producto
            </Link>

            <table className='table'>
                <thead>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                    <th>Stock</th>
                    <th>Precio</th>  
                    <th>Tipo</th>
                    
                </thead>
                <tbody> 
                        {productos.map((prod,i)=>(
                            <tr key={i}>
                                <td>{prod.nombreProducto}</td>
                                <td>{prod.descripcion}</td>
                                <td>{prod.productoImagen}</td>
                                <td>{prod.stockProducto}</td>
                                <td>{prod.precio}</td>
                                <td>1</td>
                                <td>                                                      
                                    <Link className='btn btn-warning btn-sm' to={`/editar/${prod.id}`}>
                                            <i className='fas fa-edit'></i>
                                    </Link>
                                </td>
                            </tr>
                        ))} 
                </tbody>

            </table>
        </Container>
    )
}