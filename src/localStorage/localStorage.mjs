import { data } from "../utils/api.mjs";

const llenarProductos = async () => {
  localStorage.setItem("products-fdm", JSON.stringify(data));
};

const obtenerProductos = async () => {
  let info;
  let dataProduct = localStorage.getItem("products-fdm");
  info = JSON.parse(dataProduct);
  return info;
};

const agregarProducto = async (producto) => {
  let dataProduct = localStorage.getItem("products-fdm");
  let info = JSON.parse(dataProduct);
  if (info != undefined && producto != undefined) {
    info.push(producto);
    localStorage.setItem("products-fdm", JSON.stringify(info));
  }
};

export { llenarProductos, obtenerProductos, agregarProducto };
