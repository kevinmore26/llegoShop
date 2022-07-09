import axios from "axios";

const URL = `http://127.0.0.1:8000/api/listarProducto/`;

const comidaRapidaKfc = async (busqueda = "") => {
  try {
    let { data } = await axios.get(
      `http://127.0.0.1:8000/api/buscarProductoTipoSubTipo/?productoSubTipo=kfc`
    );
    console.log(data.datos[0]);
    return data.datos[0];
  } catch {
    console.log("error");
    //si hay errores captura ese error
  }
};

const comidaRapidaKfcPorId = async (id) => {
  try {
    let { data } = await axios.get(
      `http://127.0.0.1:8000/api/buscarProductoTipoSubTipo/?productoSubTipo=kfc&id=${id}`
    );
    console.log(data.datos[0][0]);
    return data.datos[0][0];
  } catch {
    console.log("error");
    //si hay errores captura ese error
  }
};
export { comidaRapidaKfc, comidaRapidaKfcPorId };
