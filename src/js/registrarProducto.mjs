import { agregarProducto } from "../localStorage/localStorage.mjs";

// vars
let formProduct = document.getElementById("productForm");
let domicilioProduct = document.getElementById("domicilioProducto");
let domicilioPrecioProduct = document.getElementById("domicilioPrecioProducto");
let candadoDivForm = document.getElementById("candadoDivForm");
let candadoImagen = document.getElementById("candadoImage");
let candandoOpen = false;
let imageProductUrl = document.getElementById("imageProductUrl");
let imageSelectProduct = document.getElementById("imageSelectProduct");
let imageProductHTML = document.getElementById("imageProduct");

const buscarImagenSelect = (nombre) => {
  switch (nombre) {
    case "computador":
      return "data:image/jpeg;base64,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58AxKr46+E3FEmybNS4nc2nwMVUB/wByI/zFZFV9ztcebiKbelTZfos03hEWQef6u63aC8Got6NRx9KmJHV+gW000/By3o1Kb+4vf3T0jKvvC202E2fVrJ/eGyIfzWc5Q3q1PiBFg85+TZHZWAVlLKy2XzlJBzWFjYidjtqC/WYADrakAcBrwHdy7Jwrut1ZQw01uxLM19WJtoTOjNJLGXUrA6AW8dQfEc5Ydl9OMXhqS0aBpU1FrsKYLuRzcsSDppoBoBa0qq+se/3TP2ZgGrP5OnTeq/YilyL82A0A7ybQQekejW2lxmGp4lVZQ3FWFirDQgHmL8COIkxIborSdcFh0dMjrTRWW4NiqheKkjUAGwOl5MypAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJFdIdkU8Vh3w9QEq4tpowI1DLf4QIBHhJWIB552vu0x1KplpqK6G9mQqjD01dhY+BI75HN0C2gP8s5/XpfU5npYifMg7BJsmzQHRfoBiKmKVcTRelQXrMSQM4HBFKsTcniRwAPO03Zs3ZtGkgpUUREHwVUKvjYcT3nWSLUlPIT6igaCLFn1FsLTlESCBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/Z";

    case "monitor":
      return "https://www.lg.com/content/dam/channel/wcms/co/images/monitores/24mp400-b_awp_escb_co_c/Basic-450.jpg";

    case "audifonos":
      return "data:image/jpeg;base64,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";

    case "mouse":
      return "https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg";

    case "teclado":
      return "https://i.blogs.es/e20f36/comprar-teclado-razer-cynosa-v2-al-mejor-precio/450_1000.jpg";

    case "graficas":
      return "https://www.profesionalreview.com/wp-content/uploads/2017/04/C%C3%B3mo-entender-las-especificaciones-de-la-tarjeta-gr%C3%A1fica-3.jpg";

    case "reloj":
      return "https://www.apple.com/co/watch/images/meta/watch-gps-lte__f3xmp4zpdka6_og.png";

    case "celulares":
      return "https://img.global.news.samsung.com/cl/wp-content/uploads/2023/05/dl5_Galaxy-A54-5G_Awesome-Graphite_Front-e1683749755408.jpg";

    case "tablets":
      return "data:image/jpeg;base64,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mU6PaRno+4w2HrtwvEsN74dgbocwzhUPNHU51PeRuQJ1nH4NK1NqVRbq6lWHceY7CNweRE4n0m4C6OcMb+voXfCutw1WlcvkUjXODmdexg6jdZKMsPJKMnF5R18LKwk0zon0/wANWw6/S66UqyAB85yK/ZUQnQ33K7g30tYm5xH0mYKnpSFSsfuJkTzZ7ad4Bljmi52I3NUl9EnHcR6S8bXbJhMOidoVWxDjsN7BR5rIPGLjcS2XFYpmLaerZy5PhQogqD4hZByyVynk7BxvpVgKKvTr4lDcFWRL1HsRYgqlyPO04ZxLGUy7eqDFMxCl7KSL9UkC9iRbSbXwr0d1XA/QOR9qsww6fgTNU+Im5cL9Hipq9YJ3YdBTPgarZnYeYltGqtpT2PGfczzqjNpyXByFOHVmGY08in6zkU18QXIzeV5McK6H1q1ii1HB500yp/8AbWyj3K07TgOjWFonMmHQt9t7u9+3M1yPKTMrndZN5lJslGEY8I5bwz0ZtoanqqfjfEP5hstMHwUzbMH0KwyAesD1rbCo10HhTWyW/dmzxKyRZw9BUXKiKqjYKAo9wl6IgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJAdKuj4xdNcrZKtM5qL6ix0JUkagGw1GoIB5WM/EA4fxXoZWard8HWztcu1E0wjsd29kot976cyRJXhXo1qGxelSp9prMcTU/AuWl851uIBqWD6DUFAFapUrAfVLerpDwp08oHnebFguH0qK5aNJEHYihffbeZcQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAP/2Q==";

    default:
      return "data:image/jpeg;base64,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";
  }
};

formProduct.addEventListener("submit", (e) => {
  e.preventDefault();

  let codigoProduct = document.getElementById("codigoProducto");
  let nombreProduct = document.getElementById("nombreProducto");
  let categoriaProduct = document.getElementById("categoriaProducto");
  let precioProduct = document.getElementById("precioProducto");
  let feedsProduct = document.getElementById("feedsProducto");
  let starProduct = document.getElementById("starProducto");
  let ecoProduct = document.getElementById("ecoFriendlyProducto");
  let ventasProduct = document.getElementById("ventasProducto");

  let inputUrlDisable = imageProductUrl.disabled;
  let imageProduct;
  switch (inputUrlDisable) {
    case true:
      imageProduct == imageSelectProduct.value;
      imageProduct = buscarImagenSelect(imageSelectProduct.value);
      break;

    default:
      if (imageProductUrl == undefined) {
        imageProduct = "NotFound";
      }
      imageProduct = imageProductUrl.value;
      break;
  }

  let ecoRes = false;
  let domicilio = domicilioPrecioProduct.value;
  let precio = `$${precioProduct.value}`;
  if (ecoProduct.value == "Si") {
    ecoRes = true;
  }
  if (domicilioPrecioProduct.value.length == 0) {
    domicilio = "¡GRATIS!";
  } else {
    domicilio = `$${domicilio}`;
  }

  const newProduct = {
    code: codigoProduct.value,
    product_title: nombreProduct.value,
    categorie: categoriaProduct.value,
    product_price: precio,
    product_star_rating: starProduct.value,
    product_num_ratings: feedsProduct.value,
    product_photo: imageProduct,
    climate_pledge_friendly: ecoRes,
    sales_volume: parseInt(ventasProduct.value),
    delivery: domicilio,
  };

  agregarProducto(newProduct);
});

domicilioProduct.addEventListener("click", (e) => {
  if (domicilioProduct.value == "Gratis") {
    domicilioPrecioProduct.value = "";
    domicilioPrecioProduct.disabled = true;
    domicilioPrecioProduct.classList.add("disabled");
  }
});

domicilioProduct.addEventListener("click", (e) => {
  if (domicilioProduct.value == "De pago") {
    domicilioPrecioProduct.disabled = false;
    domicilioPrecioProduct.classList.remove("disabled");
  }
});

candadoDivForm.addEventListener("click", () => {
  switch (candandoOpen) {
    case false:
      candadoImagen.src = "/src/imgs/unlocked.svg";
      candandoOpen = true;
      imageProductUrl.disabled = false;
      imageSelectProduct.disabled = true;
      break;

    default:
      candadoImagen.src = "/src/imgs/lock.svg";
      candandoOpen = false;
      imageProductUrl.disabled = true;
      imageSelectProduct.disabled = false;
      break;
  }
});

const modificarImage = async () => {
  setTimeout(() => {
    if (imageProductUrl.value != null) {
      imageProductHTML.src = imageProductUrl.value;
      return;
    }
  }, 200);
};

imageProductUrl.addEventListener("change", (e) => {
  modificarImage(e.target.value);
});

imageSelectProduct.addEventListener("change", () => {
  imageProductHTML.src = buscarImagenSelect(imageSelectProduct.value);
  return;
});

buttonCampos.addEventListener("click", () => {
  let codigoProduct = document.getElementById("codigoProducto");
  let nombreProduct = document.getElementById("nombreProducto");
  let precioProduct = document.getElementById("precioProducto");
  let feedsProduct = document.getElementById("feedsProducto");
  let starProduct = document.getElementById("starProducto");
  let ventasProduct = document.getElementById("ventasProducto");
  imageProductUrl.value = "";
  codigoProduct.value = "";
  nombreProduct.value = "";
  precioProduct.value = "";
  feedsProduct.value = "";
  starProduct.value = "";
  ventasProduct.value = "";
  domicilioPrecioProduct.value = "";
});
