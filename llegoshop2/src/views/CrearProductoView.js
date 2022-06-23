import {useState,useEffect} from 'react'
import {agregarProductos} from '../services/productosServices'
import {Container, Form} from 'react-bootstrap'
import FormProducto from '../components/FormProduct'

export default function CrearProductoView(){

    const [value,setValue] = useState({
        nombre:"",
        descripcion:"",
        stockProducto:"",
        productoImagen:"",
        precio:"" 
    });

    const actualizarInput = (e) =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
 
        })    
    };

    const manejarSubmit = async(e) => {
        e.preventDefault();
        try{
            await agregarProductos(value);
        }catch(error){
                console.log('errorrrrr')
        }
 
    };

    return(
        <Container> 
            <h2 className='mt-3 mb-4 mx-4' style={{margin:'0 auto'}}>Crear/Editar Productos</h2>
                <FormProducto value={value} manejarSubmit={manejarSubmit} actualizarInput={actualizarInput}/>
        </Container>
    )

}