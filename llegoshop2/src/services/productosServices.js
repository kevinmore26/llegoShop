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

export{
    obtenerProductos
}