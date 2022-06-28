import axios from "axios";

const URL = `http://127.0.0.1:8000/api/listarProducto/`

const obtenerProductos = async () =>{
    //en el caso de que yo no le pase nada, toma el valor que le dé.
    //en este caso le estoy pasando que por defecto tome el valor de vacío, gracias a esto , me mostrará todo.
    try{
        //intenta ejecutar este bloque de codigo
        // equivalente al .then 
        let {data} = await axios.get(`http://127.0.0.1:8000/api/listarProducto/`)
        console.log(data)
        return data 
    }catch{
        
                console.log('error')
            //si hay errores captura ese error
    }
}


const agregarProductos = async (nuevoProducto) =>{
    try{
        const headers = {
            "Content-type":"application/json",
        };

        let {data} = await axios.post(URL,nuevoProducto,{headers});
        return data;
    }catch(error){
        console.log(error)
    }
     
}


const obtenerProductoPorId = async (id) =>{ 
    try{
         
        let {data} = await axios.get(`http://127.0.0.1:8000/api/listarProducto/${id}`)
        console.log(data)
        return data 
    }catch{
        
                console.log('error')
            //si hay errores captura ese error
    }
}


const editarProducto = async (productoEditado,id) =>{ 
    try{
        const headers = {
            "Content-type":"application/json",
        };

        let {data} = await axios.put(`http://127.0.0.1:8000/api/listarProducto/${id}`,productoEditado,{headers});
        return data;
    }catch(error){
        console.log(error)
    }
}


export{
    obtenerProductos,
    agregarProductos,
    obtenerProductoPorId,
    editarProducto
}