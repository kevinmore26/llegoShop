import {useState,useEffect} from 'react'
import {agregarProductos,obtenerProductos} from '../services/productosServices'
import {Container, Form} from 'react-bootstrap'
import FormProducto from '../components/FormProduct'
import Swal from 'sweetalert2' 
import { useNavigate } from 'react-router-dom'
export default function CrearProductoView(){
    const[productos,setProductos] = useState([])
    const [value,setValue] = useState({
        nombre:"",
        descripcion:"",
        stockProducto:"",
        productoImagen:"",
        precio:"" 
    });
    
    const navigate = useNavigate()
    const actualizarInput = (e) =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
 
        })    
    };
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
    const manejarSubmit = async(e) => {

        e.preventDefault();
        try{
            await agregarProductos(value);
            for(let i = 0;i<productos.length;i++){
                    
                if(productos[i].nombre == value.nombre ){
                    console.log('error')
                     return
                }
                  
            }
            console.log('todo bien')
            console.log(value)
            console.log(productos)
           
            


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