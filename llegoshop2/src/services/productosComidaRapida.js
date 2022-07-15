import axios from "axios";

const URL = `http://127.0.0.1:8000/api/listarProducto/`;

const comidaRapidaKfc = async (busqueda = "") => {
  try {
    let { data } = await axios.get(
      `https://6104aae64b92a000171c5ca7.mockapi.io/listarProductoKfc`
    );
    console.log(data);
    return data;
  } catch {
    console.log("error");
    //si hay errores captura ese error
  }
};

const comidaRapidaKfcPorId = async (id) => {
  try {
    let { data } = await axios.get(
      `https://6104aae64b92a000171c5ca7.mockapi.io/listarProductoKfc/?id=${id}`
    );
    console.log(data);
    return data[0];
  } catch {
    console.log("error");
    //si hay errores captura ese error
  }
};
export { comidaRapidaKfc, comidaRapidaKfcPorId };
