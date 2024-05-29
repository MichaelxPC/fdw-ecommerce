import {
  llenarProductos,
  obtenerProductos,
} from "../localStorage/localStorage.mjs";

const mainContainer = document.getElementById("main-container");
const navbar = document.getElementById("nav-bar");
const navItems = document.getElementsByClassName("nav-items");
const switchNav = document.getElementById("switch-navbar");
const productsGrid = document.getElementById("products-grid");

// vars
let data;
let loaderMainDiv = document.getElementById("loaderDiv");
let mainProducts = document.getElementById("products-grid");
let sectionPaginacion = document.createElement("section");
let iterator = 1;

// Cards
const cardsPromesa = async () => {
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

const llenarCards = async () => {
  while (mainProducts.firstChild) {
    mainProducts.removeChild(mainProducts.firstChild);
  }
  for (let index = 15 * iterator - 15; index < 15 * iterator; index++) {
    const element = data[index];
    let mainCardDiv = document.createElement("div");
    mainCardDiv.classList.add(
      "product-card",
      "w-96",
      "bg-white",
      "border-2bg-white",
      "border-2",
      "border-ligh-gray",
      "flex",
      "flex-col"
    );

    // Titulo del producto (div)
    let titleDiv = document.createElement("div");
    titleDiv.classList.add(
      "h-12",
      "w-48",
      "flex",
      "justify-center",
      "items-center",
      "self-center"
    );
    let title = document.createElement("span");
    title.classList.add("font-bold", "text-2xl", "truncate");
    title.innerHTML = element.product_title;
    titleDiv.appendChild(title);

    // Imagen del producto (div)
    let imageDiv = document.createElement("div");
    imageDiv.classList.add(
      "h-fit",
      "w-80",
      "flex",
      "p-2",
      "justify-center",
      "items-center",
      "border-b-2",
      "border-ligh-gray"
    );

    let imageProduct = document.createElement("img");
    imageProduct.classList.add("h-72", "w-72", "object-cover");
    imageDiv.appendChild(imageProduct);
    imageProduct.src = element.product_photo;

    // Categoria-Precio del producto (div)
    let categoryPriceDiv = document.createElement("div");
    categoryPriceDiv.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "ml-4"
    );

    let categoryDiv = document.createElement("div");
    categoryDiv.classList.add("bg-primary-blue", "p-2", "rounded-lg", "mt-2");
    let categorySpan = document.createElement("span");
    categorySpan.classList.add(
      "text-white",
      "justify-self-end",
      "font-semibold",
      "text-xl"
    );
    categorySpan.innerHTML = element.categorie;
    categoryDiv.appendChild(categorySpan);

    let priceDiv = document.createElement("div");
    priceDiv.classList.add("mr-4");
    let priceSpan = document.createElement("span");
    priceSpan.classList.add(
      "font-bold",
      "text-xl",
      "justify-self-end",
      "text-green-500",
      "mr-2"
    );
    priceDiv.appendChild(priceSpan);
    priceSpan.innerHTML = element.product_price;
    categoryPriceDiv.appendChild(categoryDiv);
    categoryPriceDiv.appendChild(priceDiv);
    // Feed
    let feedStarsDiv = document.createElement("div");
    feedStarsDiv.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "mt-2",
      "ml-4",
      "mr-4"
    );
    let feedDiv = document.createElement("div");
    feedDiv.classList.add("w-20", "flex", "items-center", "justify-between");
    let feedSpan = document.createElement("span");
    feedSpan.classList.add(
      "text-yellow-500",
      "font-semibold",
      "text-2xl",
      "mr-2"
    );
    let feedNumSpan = document.createElement("span");
    feedNumSpan.classList.add(
      "text-yellow-500",
      "font-semibold",
      "text-2xl",
      "mr-2"
    );
    feedSpan.innerHTML = "Feed: ";
    feedNumSpan.innerHTML = element.product_num_ratings;
    feedDiv.appendChild(feedSpan);
    feedDiv.appendChild(feedNumSpan);
    let starsDiv = document.createElement("div");
    starsDiv.classList.add("w-20", "flex", "items-center", "justify-between");
    let starImage = document.createElement("img");
    starImage.src = "/src/imgs/star-sm.png";
    let numberStarSpan = document.createElement("span");
    numberStarSpan.classList.add("text-yellow-500", "font-semibold", "text-xl");
    numberStarSpan.innerHTML = element.product_star_rating;
    starsDiv.appendChild(starImage);
    starsDiv.appendChild(numberStarSpan);
    feedStarsDiv.appendChild(feedDiv);
    feedStarsDiv.appendChild(starsDiv);

    // Eco friendly
    let ecoDiv = document.createElement("div");
    ecoDiv.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "mt-2",
      "ml-4",
      "mr-4"
    );
    let ecoSpan = document.createElement("span");
    ecoSpan.classList.add("text-green-400", "font-semibold", "text-2xl");
    let ecoResSpan = document.createElement("span");
    ecoResSpan.classList.add("font-semibold", "text-xl");
    ecoSpan.innerHTML = "Eco Friendly: ";
    if (element.climate_pledge_friendly == true) {
      ecoResSpan.innerHTML = "Si";
    } else {
      ecoResSpan.innerHTML = "No";
    }
    ecoDiv.appendChild(ecoSpan);
    ecoDiv.appendChild(ecoResSpan);
    // Sells
    let sellsDiv = document.createElement("div");
    sellsDiv.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "mt-2",
      "ml-4",
      "mr-4"
    );

    let sellsSpan = document.createElement("span");
    sellsSpan.classList.add("font-semibold", "text-2xl");
    let sellsResSpan = document.createElement("span");
    sellsSpan.innerHTML = "Vendidos en el mes:";
    sellsResSpan.innerHTML = element.sales_volume;
    sellsResSpan.classList.add("font-semibold", "text-2xl");
    sellsDiv.appendChild(sellsSpan);
    sellsDiv.appendChild(sellsResSpan);
    // Delivery
    let domicilioDiv = document.createElement("div");
    domicilioDiv.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "mt-2",
      "ml-4",
      "mr-4"
    );
    let domicilioSpan = document.createElement("span");
    domicilioSpan.classList.add("font-semibold", "text-2xl");
    let domicilioResSpan = document.createElement("span");
    domicilioSpan.innerHTML = "Domicilio:";
    domicilioResSpan.innerHTML = element.delivery;
    domicilioResSpan.classList.add(
      "font-semibold",
      "text-2xl",
      "text-green-500"
    );
    domicilioDiv.appendChild(domicilioSpan);
    domicilioDiv.appendChild(domicilioResSpan);
    // Codigo
    let codeDiv = document.createElement("div");
    codeDiv.classList.add("flex", "justify-center", "items-center", "mt-6");
    let codeSpan = document.createElement("span");
    let codeResSpan = document.createElement("span");
    codeSpan.classList.add("font-semibold", "text-xl", "mt-2");
    codeResSpan.classList.add("font-semibold", "text-xl", "mt-2", "ml-2");
    codeSpan.innerHTML = "Codigo: ";
    codeResSpan.innerHTML = element.code;
    codeDiv.appendChild(codeSpan);
    codeDiv.appendChild(codeResSpan);

    mainCardDiv.appendChild(titleDiv);
    mainCardDiv.appendChild(imageDiv);
    mainCardDiv.appendChild(categoryPriceDiv);
    mainCardDiv.appendChild(feedStarsDiv);
    mainCardDiv.appendChild(ecoDiv);
    mainCardDiv.appendChild(sellsDiv);
    mainCardDiv.appendChild(domicilioDiv);
    mainCardDiv.appendChild(codeDiv);

    productsGrid.appendChild(mainCardDiv);
  }
};

const promesaCards = async () => {
  const res = await cardsPromesa();
  await llenarCards();
};

// Pagination
const cambiarPaginacion = (num) => {
  iterator = num;
  llenarCards();
};
const llenarPaginacion = async () => {
  sectionPaginacion.classList.add(
    "paginacion",
    "flex",
    "justify-between",
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

const iniciarProductos = async () => {
  data = await obtenerProductos();
  await promesaCards();
  await llenarPaginacion();
};
iniciarProductos();
// Bar
switchNav.addEventListener("click", () => {
  navbar.classList.toggle("close");
  mainContainer.classList.toggle("home");
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].classList.toggle("close-text");
  }
});
