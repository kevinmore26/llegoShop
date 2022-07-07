import {useState, useEffect, useRef} from 'react'
 
import GroupProducts from '../components/GroupProductos'
import {comidaRapidaKfc} from "../services/productosComidaRapida"
import NavTop from '../components/NavTop'
export default function ProductosKfcView(){
    const[productos,setProductos] = useState([])

    
    const getProductosKfc = async() =>{
        try{
            let productosObtenidos = await comidaRapidaKfc()  
            setProductos(productosObtenidos) 
        }catch{
                console.log('error')
        }
    }

    useEffect(()=>{
        getProductosKfc()
    },[])

    return(
        <div>
            <NavTop />
              <GroupProducts productos={productos} style={{position:"relative",top:"150px !important"}}/>
        </div>
    )
}
