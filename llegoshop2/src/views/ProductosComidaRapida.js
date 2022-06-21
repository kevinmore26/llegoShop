import {useState, useEffect, useRef} from 'react'
import {obtenerProductos} from "../services/productosServices"
import GroupProducts from '../components/GroupProductos'
export default function ProductosView(){
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
        <div>
              <GroupProducts productos={productos}/>
        </div>
    )
}
