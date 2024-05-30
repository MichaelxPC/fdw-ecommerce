import { obtenerProductos } from "../localStorage/localStorage.mjs";

// vars
let data;
let cuerpoTabla = document.getElementById("cuerpo-tabla");
let loaderMainDiv = document.getElementById("loaderDiv");
let sectionPaginacion = document.createElement("section");
let iterator = 1;
let searchInput = document.getElementById("searchInput");
let categoriaProducto = document.getElementById("categoriaProducto");

let slideValue = document.getElementById("slideValue");
let slideProducto = document.getElementById("precioProductoSlide");
let buttonFiltrar = document.getElementById("filtrar-button");

// Items
const tablaItemsPromesa = async () => {
  return new Promise((resolve, reject) => {
    sectionPaginacion.classList.add("hidden");
    let loaderDiv = document.createElement("div");
    loaderDiv.classList.add("loader", "cursor-none");
    loaderMainDiv.classList.add("loaderDiv");
    loaderMainDiv.appendChild(loaderDiv);
    setTimeout(() => {
      try {
        loaderMainDiv.removeChild(loaderDiv);
        loaderMainDiv.classList.remove("loaderDiv");
        sectionPaginacion.classList.remove("hidden");
        resolve("exito");
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
};

const llenarItems = () => {
  while (cuerpoTabla.firstChild) {
    cuerpoTabla.removeChild(cuerpoTabla.firstChild);
  }
  for (let index = 15 * iterator - 15; index < 15 * iterator; index++) {
    const element = data[index];
    if (element == undefined) {
      return;
    }
    let trRow = document.createElement("tr");
    let codigoProduct = document.createElement("th");
    codigoProduct.innerHTML = element.code;
    let nombreProduct = document.createElement("th");
    nombreProduct.innerHTML = `${element.product_title.slice(0, 19)}...`;
    let categoriaProducto = document.createElement("th");
    categoriaProducto.innerHTML = element.categorie;
    let precioProducto = document.createElement("th");
    precioProducto.innerHTML = `$${element.product_price}`;
    let feedsProduct = document.createElement("th");
    feedsProduct.innerHTML = element.product_num_ratings;
    let starsProduct = document.createElement("th");
    starsProduct.innerHTML = element.product_star_rating;
    let ecoProduct = document.createElement("th");
    let ecofriendly = "No";
    if (ecoProduct.climate_pledge_friendly) {
      ecofriendly = "Si";
    }
    ecoProduct.innerHTML = ecofriendly;
    let domicilioProduct = document.createElement("th");
    domicilioProduct.innerHTML = element.delivery;

    trRow.append(
      codigoProduct,
      nombreProduct,
      categoriaProducto,
      precioProducto,
      feedsProduct,
      starsProduct,
      ecoProduct,
      domicilioProduct
    );
    cuerpoTabla.appendChild(trRow);
  }
};

const promesaItem = async () => {
  const res = await tablaItemsPromesa();
  llenarItems();
};

// Pagination
const cambiarPaginacion = (num) => {
  iterator = num;
  llenarItems();
};
const llenarPaginacion = async () => {
  while (sectionPaginacion.firstChild) {
    sectionPaginacion.removeChild(sectionPaginacion.firstChild);
  }
  sectionPaginacion.classList.add(
    "paginacion",
    "flex",
    "items-center",
    "bg-white",
    "border-2",
    "border-ligh-gray",
    "rounded-xl",
    "p-10",
    "mt-20"
  );
  let itemsPagination = 1;
  for (let index = 0; index < data.length; index++) {
    if (15 * itemsPagination < index) {
      itemsPagination += 1;
    }
  }
  sectionPaginacion.classList.remove("justify-center");
  sectionPaginacion.classList.remove("justify-around");
  sectionPaginacion.classList.remove("justify-between");
  switch (itemsPagination) {
    case 1:
      sectionPaginacion.classList.add("justify-center");
      break;

    case 2:
      sectionPaginacion.classList.add("justify-around");
      break;

    default:
      sectionPaginacion.classList.add("justify-between");
      break;
  }
  for (let index = 0; index < itemsPagination; index++) {
    let itemPagiDiv = document.createElement("div");
    itemPagiDiv.classList.add(
      "items-pagination",
      "bg-white",
      "rounded-full",
      "w-14",
      "h-14",
      "flex",
      "justify-center",
      "items-center",
      "cursor-pointer",
      "border-2",
      "border-primary-blue"
    );
    let itemPagiSpan = document.createElement("span");
    itemPagiSpan.classList.add(
      "text-pagination",
      "text-2xl",
      "font-bold",
      "text-text-color"
    );
    itemPagiSpan.innerHTML = index + 1;
    itemPagiDiv.appendChild(itemPagiSpan);
    sectionPaginacion.appendChild(itemPagiDiv);
    itemPagiDiv.onclick = () => cambiarPaginacion(itemPagiSpan.innerHTML);
  }
  mainContainer.appendChild(sectionPaginacion);
};

const iniciarItems = async () => {
  data = await obtenerProductos();
  await promesaItem();
  await llenarPaginacion();
};
iniciarItems();

// Filtros

const rellenarFiltrados = async (dataFiltro) => {
  data = dataFiltro;
  await promesaItem();
  await llenarPaginacion();
};

slideProducto.oninput = () => {
  let value = slideProducto.value;
  slideValue.innerHTML = `$${value}`;
};

buttonFiltrar.addEventListener("click", () => {
  filtrarProductos();
});

const filtrarProductos = async () => {
  data = await obtenerProductos();
  let filterProducts = data.filter((product) => {
    const searchContent = searchInput.value.toLocaleLowerCase();
    const nameProduct = product.product_title.toLowerCase();
    return nameProduct.includes(searchContent);
  });
  let temporalData = [];
  for (let index = 0; index < filterProducts.length; index++) {
    const element = filterProducts[index];
    if (element.product_price >= slideProducto.value) {
      temporalData.push(element);
    }
  }
  if (categoriaProducto.value != "") {
    temporalData = temporalData.filter((product) => {
      const searchCategorie = categoriaProducto.value.toLocaleLowerCase();
      const categorie = product.categorie.toLowerCase();
      return categorie.includes(searchCategorie);
    });
  }
  rellenarFiltrados(temporalData);
};
