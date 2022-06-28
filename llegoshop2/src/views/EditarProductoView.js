import {useState,useEffect} from 'react'
//useParams nos va servir para que cuando nostros seleccionemos
//Determinado producto, nos traiga la información de este
import { useParams } from 'react-router-dom'
//nos va servir para usar un popup y poder navegar a otra vista
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2' 
import FormProducto from '../components/FormProduct'
import { editarProducto,obtenerProductoPorId } from '../services/productosServices'
import {Container} from 'react-bootstrap'
let imagen //undefined

export default function EditarProductoView (){
    const {id} = useParams()
    const [value,setValue] = useState({
        nombre:"",
        descripcion:"",
        stockProducto:"",
        productoImagen:"",
        precio:"" 
    });
    const navigate = useNavigate()
    const getProducto = async ()=>{
        try{
            const productoObtenido = await obtenerProductoPorId(id)
            setValue({...productoObtenido.productos})
        }catch(error){
            console.error(error)
        }
    }
    useEffect(()=>{
        getProducto()
    },[])

    const actualizarInput = (e) =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
 
        })    
    };

    const manejarSubmit = async(e) => {
        e.preventDefault();
        
        await editarProducto(value,id)
        console.log(value,id)
        await Swal.fire({
            icon:"Success",
            title:"Producto editado exitosamente",
            showConfirmButton:true,
            showDenyButton:true,
            timer:3000
        })
        .then((resultado) => {
        if(resultado.isConfirmed){
            
            navigate('/administrador')
        }else{
            console.log('isDenied')
        }})
          

    }; 

    return(

        <Container>
                <h1>Editar Producto</h1>
                <FormProducto value={value} actualizarInput={actualizarInput} manejarSubmit={manejarSubmit}/>
        </Container>  

    )
}

