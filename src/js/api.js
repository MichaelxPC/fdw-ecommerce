const url =
  "https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&category_id=mobile";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3dd9aeac58msh55ca6288bc1466ep1e64dfjsnd7e17d8af231",
    "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
  },
};

async function fetchProducts() {
  let data;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    data = await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  console.log(data.data.products);
}

fetchProducts();

const data = [
  {
    asin: "B0CSB1GX4H",
    product_title:
      "Samsung Galaxy A15 (SM-155M/DSN), 128GB 6GB RAM, Dual SIM, Factory Unlocked GSM, International Version (Wall Charger Bundle) (Yellow)",
    product_price: "$143.69",
    categorie: "celular",
    product_star_rating: "4.4",
    product_num_ratings: 22,
    product_url: "https://www.amazon.com/dp/B0CSB1GX4H",
    product_photo:
      "https://m.media-amazon.com/images/I/51rK-Be8dxL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0BQ118F2T",
    product_title:
      "Moto G Play 2023 3-Day Battery Unlocked Made for US 3/32GB 16MP Camera Navy Blue",
    categorie: "celular",
    product_price: "$99.99",
    product_star_rating: "4.1",
    product_num_ratings: 2387,
    product_url: "https://www.amazon.com/dp/B0BQ118F2T",
    product_photo:
      "https://m.media-amazon.com/images/I/61K1Fz5LxvL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CN1QSH8Q",
    product_title:
      "SAMSUNG Galaxy A15 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Expandable Storage, Knox Security, Super Fast Charging, US Version, 2024, Blue Black",
    product_price: "$199.99",
    categorie: "celular",
    product_star_rating: "4.1",
    product_num_ratings: 151,
    product_url: "https://www.amazon.com/dp/B0CN1QSH8Q",
    product_photo:
      "https://m.media-amazon.com/images/I/61s0ZzwzSCL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CCSZZGT7",
    product_title:
      "TracFone Motorola Moto g Play, 32GB, Black - Prepaid Smartphone (Locked)",
    categorie: "celular",
    product_price: "$39.88",
    product_star_rating: "4",
    product_num_ratings: 80,
    product_url: "https://www.amazon.com/dp/B0CCSZZGT7",
    product_photo:
      "https://m.media-amazon.com/images/I/71pGGUaxezL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0BLZN9NDG",
    product_title:
      "SAMSUNG,Galaxy A04e (SM-A042M/DS) Dual SIM 32GB,6.5&#x27;&#x27; GSM Unlocked,International Version-Black",
    categorie: "celular",
    product_price: "$89.39",
    product_star_rating: "3.8",
    product_num_ratings: 239,
    product_url: "https://www.amazon.com/dp/B0BLZN9NDG",
    product_photo:
      "https://m.media-amazon.com/images/I/71O2YkTlq-L._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B08VLMQ3KS",
    product_title:
      "Samsung Galaxy S21 5G, US Version, 128GB, Phantom Gray - Unlocked (Renewed)",
    categorie: "celular",
    product_price: "$208.00",
    product_star_rating: "3.9",
    product_num_ratings: 4007,
    product_url: "https://www.amazon.com/dp/B08VLMQ3KS",
    product_photo:
      "https://m.media-amazon.com/images/I/61jYjeuNUnL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0C2SP2L4K",
    product_title:
      "Motorola Moto G 5G | 2023 | Unlocked | Made for US 4/128GB | Bluetooth | 48 MPCamera | Harbor Gray, 163.94x74.98x8.39",
    categorie: "celular",
    product_price: "$149.99",
    product_star_rating: "4.2",
    product_num_ratings: 1500,
    product_url: "https://www.amazon.com/dp/B0C2SP2L4K",
    product_photo:
      "https://m.media-amazon.com/images/I/613cvL2ZYHL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CSDZP44V",
    product_title:
      "BLU G73 | 2023 | 3-Day Battery | Unlocked | 6.8” HD+ Infinity Display | 128/6GB | Triple 50MP Camera | US Version | US Warranty | Grey",
    categorie: "celular",
    product_price: "$99.99",
    product_star_rating: "4.2",
    product_num_ratings: 30,
    product_url: "https://www.amazon.com/dp/B0CSDZP44V",
    product_photo:
      "https://m.media-amazon.com/images/I/81TeO+nqxnL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0D1B6L2VN",
    product_title:
      "A23 Unlocked Android Phone 6.7-inch HD LCD Unlocked Cell Phone 4GB+128GB Android 13 Smartphone 5500 mAh Large Battery Unlocked Phone 50MP+13MP Camera 5G Dual SIM (Green)",
    categorie: "celular",
    product_price: "$109.99",
    product_star_rating: "5",
    product_num_ratings: 4,
    product_url: "https://www.amazon.com/dp/B0D1B6L2VN",
    product_photo:
      "https://m.media-amazon.com/images/I/71WHbylnDGL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CN1Q2X3B",
    product_title:
      "SAMSUNG Galaxy A25 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple Camera System, Expandable Storage, Stereo Speakers,US Version,2024,Black",
    categorie: "celular",
    currency: "USD",
    product_star_rating: "3.7",
    product_num_ratings: 100,
    product_url: "https://www.amazon.com/dp/B0CN1Q2X3B",
    product_photo:
      "https://m.media-amazon.com/images/I/61cwMOVn17L._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CKNHHZH1",
    product_title:
      "Reno10 Cheap Smartphone 5.0&#x27;&#x27; Android 9.0, 16GB ROM(Extendable to 128GB,Dual SIM Dual Camera, WiFi,Bluetooth,GPS Basic Mobile Phones (Reno10-Purple)",
    categorie: "celular",
    product_price: "$54.99",
    product_star_rating: "3.3",
    product_num_ratings: 38,
    product_url: "https://www.amazon.com/dp/B0CKNHHZH1",
    product_photo:
      "https://m.media-amazon.com/images/I/51p6UE+Jm9L._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B086QB7WZ1",
    product_title:
      "AT&amp;T BL102-2 DECT 6.0 2-Handset Cordless Phone for Home with Answering Machine, Call Blocking, Caller ID Announcer, Audio Assist, Intercom, and Unsurpassed Range, Silver/Black",
    categorie: "celular",
    product_price: "$56.85",
    product_star_rating: "4.3",
    product_num_ratings: 25677,
    product_url: "https://www.amazon.com/dp/B086QB7WZ1",
    product_photo:
      "https://m.media-amazon.com/images/I/81vjTHTF9WL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CHH6X6H2",
    product_title:
      "Samsung Galaxy A03s, 32GB, Black - Prepaid Smartphone (Locked)",
    categorie: "celular",
    product_price: "$49.88",
    product_star_rating: "4",
    product_num_ratings: 103,
    product_url: "https://www.amazon.com/dp/B0CHH6X6H2",
    product_photo:
      "https://m.media-amazon.com/images/I/812woqv69CL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B09QXS3MHQ",
    product_title:
      "Alcatel 1 (32GB) 5.0&quot; Full View Display - Removable Battery - Dual SIM GSM Unlocked US &amp; Global 4G LTE International Version - Volcano Black",
    categorie: "celular",
    product_price: "$39.99",
    product_star_rating: "3.6",
    product_num_ratings: 133,
    product_url: "https://www.amazon.com/dp/B09QXS3MHQ",
    product_photo:
      "https://m.media-amazon.com/images/I/81mNLnhSPqL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0BS4BP8FB",
    product_title:
      "Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6&quot; Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home in S Mode",
    categorie: "computador",
    product_price: "$299.99",
    product_star_rating: "4.3",
    product_num_ratings: 1741,
    product_url: "https://www.amazon.com/dp/B0BS4BP8FB",
    product_photo:
      "https://m.media-amazon.com/images/I/61gKkYQn6lL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CPGKT77T",
    product_title:
      "HP 15.6&quot; Portable Laptop (Include 1 Year Microsoft 365), HD Display, Intel Quad-Core N200 Processor, 16GB RAM, 128GB Storage, Wi-Fi 5, Webcam, HDMI, Numeric Keypad, Windows 11 Home, Red",
    categorie: "computador",
    product_price: "$290.00",
    product_star_rating: "4.3",
    product_num_ratings: 304,
    product_url: "https://www.amazon.com/dp/B0CPGKT77T",
    product_photo:
      "https://m.media-amazon.com/images/I/71pTP-ll4sL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0C3RNRB8W",
    product_title:
      "HP 17 Laptop, 17.3” HD+ Display, 11th Gen Intel Core i3-1125G4 Processor, 32GB RAM, 1TB SSD, Wi-Fi, HDMI, Webcam, Windows 11 Home, Silver",
    categorie: "computador",
    product_price: "$485.00",
    product_star_rating: "4.4",
    product_num_ratings: 570,
    product_url: "https://www.amazon.com/dp/B0C3RNRB8W",
    product_photo:
      "https://m.media-amazon.com/images/I/71CDSpds6jL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CQN41Q6V",
    product_title:
      "LENOVO IdeaPad 1 Laptop, 15.6” FHD Display, Intel Celeron N4500 Processor, 12GB RAM, 512GB SSD, SD Card Reader, Numeric Keypad, HDMI, Wi-Fi 6, Windows 11 Home, 1 Year Office 365, Grey",
    categorie: "computador",
    product_price: "$289.00",
    product_star_rating: "4.3",
    product_num_ratings: 102,
    product_url: "https://www.amazon.com/dp/B0CQN41Q6V",
    product_photo:
      "https://m.media-amazon.com/images/I/71xFyQBB7FL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CNM12GMZ",
    product_title:
      "HP Newest 14&quot; Ultral Light Laptop for Students and Business, Intel Quad-Core N4120, 16GB RAM, 128GB Storage(64GB eMMC+64GB Ghost Manta SD), 1 Year Office 365, Webcam, HDMI, WiFi, USB-A&amp;C, Win 11 S",
    categorie: "computador",
    product_price: "$296.97",
    product_star_rating: "4.2",
    product_num_ratings: 1797,
    product_url: "https://www.amazon.com/dp/B0CNM12GMZ",
    product_photo:
      "https://m.media-amazon.com/images/I/71GpA7p2KDL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CZL2SLCJ",
    product_title:
      "HP Stream 14&quot; HD BrightView Laptop, Intel Celeron N4120, 16GB RAM, 256GB Storage (128GB Emmc+ 128GB USB Card), Intel UHD Graphics, 720p Webcam, Wi-Fi, 1 Year Office 365, Win 11 S, Gold",
    product_price: "$299.00",
    product_star_rating: "4.4",
    product_num_ratings: 1792,
    product_url: "https://www.amazon.com/dp/B0CZL2SLCJ",
    product_photo:
      "https://m.media-amazon.com/images/I/71uuMO6PstL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CT8PWX2J",
    product_title:
      "SGIN Laptops, Laptop 15 Inch, 4GB DDR4 128GB SSD Laptops Computer with Intel Core Processor (up to 2.4 GHz), Webcam, Mini HDMI, USB3.0, Dual WiFi, Type-C, 7000mAh, Numeric Keypad(Sliver)",
    categorie: "computador",
    product_price: "$189.99",
    product_star_rating: "5",
    product_num_ratings: 2,
    product_url: "https://www.amazon.com/dp/B0CT8PWX2J",
    product_photo:
      "https://m.media-amazon.com/images/I/71N7t++Vd2L._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0947BJ67M",
    product_title:
      "HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin &amp; Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0040nr, Snowflake White)",
    categorie: "computador",
    product_price: "$186.97",
    product_star_rating: "3.9",
    product_num_ratings: 1285,
    product_url: "https://www.amazon.com/dp/B0947BJ67M",
    product_photo:
      "https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CPKS65P5",
    product_title:
      "HP Portable Laptop, Student and Business, 14&quot; HD Display, Intel Quad-Core N4120, 16GB DDR4 RAM, 64GB eMMC, 1 Year Office 365, Webcam, RJ-45, HDMI, Wi-Fi, Windows 11 Home, Silver",
    categorie: "computador",
    product_price: "$224.98",
    product_star_rating: "4.1",
    product_num_ratings: 821,
    product_url: "https://www.amazon.com/dp/B0CPKS65P5",
    product_photo:
      "https://m.media-amazon.com/images/I/61IpRGnny7L._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CDQTSSTR",
    product_title:
      "Lenovo IdeaPad 1 Student Laptop, Intel Dual Core Processor, 20GB RAM, 1TB SSD + 128GB eMMC, 15.6&quot; FHD Display, 1 Year Office 365, Windows 11 Home, Wi-Fi 6, Webcam, Bluetooth, SD Card Reader, Grey",
    categorie: "computador",
    product_price: "$390.00",
    product_star_rating: "4.2",
    product_num_ratings: 305,
    product_url: "https://www.amazon.com/dp/B0CDQTSSTR",
    product_photo:
      "https://m.media-amazon.com/images/I/61ZCdzmymsL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B09VRX9YVW",
    product_title:
      "HP Newest 14&quot; HD Laptop, Windows 11, Intel Celeron Dual-Core Processor Up to 2.60GHz, 4GB RAM, 64GB SSD, Webcam, Dale Pink(Renewed) (Dale Pink)",
    categorie: "computador",
    product_price: "$158.97",
    product_star_rating: "4.1",
    product_num_ratings: 1584,
    product_url: "https://www.amazon.com/dp/B09VRX9YVW",
    product_photo:
      "https://m.media-amazon.com/images/I/61MGsq1ZVaL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0BRT67MWZ",
    product_title:
      "Dell Inspiron 3511 Laptop, 15.6&quot; Full HD Touchscreen, Intel Core i5-1135G7 (Beats Intel i7-1065G7), 32GB DDR4 RAM, 1TB PCIe SSD, SD Card Reader, HDMI, Wi-Fi, Windows 11 Home, Black",
    categorie: "computador",
    product_price: "$519.00",
    product_star_rating: "4.1",
    product_num_ratings: 384,
    product_url: "https://www.amazon.com/dp/B0BRT67MWZ",
    product_photo:
      "https://m.media-amazon.com/images/I/719yYrijeKL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CRDCW3Q3",
    product_title:
      "ASUS 15.6” Vivobook Go Laptop, Intel Celeron N4500, 4GB RAM, 128GB SSD, Windows 11 in S Mode, Star Black, L510KA-ES04",
    categorie: "computador",
    product_price: "$199.99",
    product_star_rating: "4.3",
    product_num_ratings: 1056,
    product_url: "https://www.amazon.com/dp/B0CRDCW3Q3",
    product_photo:
      "https://m.media-amazon.com/images/I/61tyIqBNztL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0C4G4L53W",
    product_title:
      "HP Newest Pavilion 15.6&quot; HD Touchscreen Anti-Glare Laptop, 16GB RAM, 1TB SSD Storage, Intel Core Processor up to 4.1GHz, Up to 11 Hours Long Battery Life, Type-C, HDMI, Windows 11 Home, Silver",
    categorie: "computador",
    product_price: "$415.25",
    product_star_rating: "4.2",
    product_num_ratings: 462,
    product_url: "https://www.amazon.com/dp/B0C4G4L53W",
    product_photo:
      "https://m.media-amazon.com/images/I/71aTEZOda0L._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CHHSFMRL",
    product_title:
      "Sceptre New 27-inch Gaming Monitor 100Hz 1ms DisplayPort HDMI x2 100% sRGB AMD FreeSync Build-in Speakers, Eye Care Frameless Machine Black 2024 (E275W-FW100T)",
    categorie: "Monitor",
    product_price: "$99.97",
    product_star_rating: "4.6",
    product_num_ratings: 32064,
    product_url: "https://www.amazon.com/dp/B0CHHSFMRL",
    product_photo:
      "https://m.media-amazon.com/images/I/71jdr9u9YhL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0BY9NPLP4",
    product_title:
      "Acer KB272 EBI 27&quot; IPS Full HD (1920 x 1080) Zero-Frame Gaming Office Monitor | AMD FreeSync Technology | Up to 100Hz Refresh | 1ms (VRB) | Low Blue Light | Tilt | HDMI &amp; VGA Ports,Black",
    categorie: "Monitor",
    product_price: "$99.99",
    product_star_rating: "4.6",
    product_num_ratings: 2957,
    product_url: "https://www.amazon.com/dp/B0BY9NPLP4",
    product_photo:
      "https://m.media-amazon.com/images/I/81FTa3aSdnL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B07KXSR99Y",
    product_title:
      "Sceptre Curved 24-inch Gaming Monitor 1080p R1500 98% sRGB HDMI x2 VGA Build-in Speakers, VESA Wall Mount Machine Black (C248W-1920RN Series)",
    product_price: "$84.97",
    categorie: "Monitor",
    product_star_rating: "4.6",
    product_num_ratings: 21668,
    product_url: "https://www.amazon.com/dp/B07KXSR99Y",
    product_photo:
      "https://m.media-amazon.com/images/I/71P0M7tKjYL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CVM2GJCN",
    product_title:
      "PHILIPS 221V8LB 22 inch Full HD (1920 x 1080) Monitor, 100Hz Refresh Rate, VESA, HDMI x1, VGA x1, LowBlue Mode, Adaptive Sync, 4 Year Advance Replacement Warranty",
    product_price: "$69.99",
    categorie: "Monitor",
    product_star_rating: "4.6",
    product_num_ratings: 3379,
    product_url: "https://www.amazon.com/dp/B0CVM2GJCN",
    product_photo:
      "https://m.media-amazon.com/images/I/71RTruFctrL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B07Z8TC28F",
    product_title:
      "ASUS VA24EHE 23.8” Monitor 75Hz Full HD (1920x1080) IPS Eye Care HDMI D-Sub DVI-D,Black",
    categorie: "Monitor",
    product_price: "$89.00",
    product_star_rating: "4.6",
    product_num_ratings: 4107,
    product_url: "https://www.amazon.com/dp/B07Z8TC28F",
    product_photo:
      "https://m.media-amazon.com/images/I/71hhyibUmtL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B07774L6TT",
    product_title:
      "Sceptre 22 inch 75Hz 1080P LED Monitor 99% sRGB HDMI X2 VGA Build-In Speakers, Machine Black (E225W-19203R series)",
    product_price: "$69.97",
    categorie: "Monitor",
    product_star_rating: "4.6",
    product_num_ratings: 9310,
    product_url: "https://www.amazon.com/dp/B07774L6TT",
    product_photo:
      "https://m.media-amazon.com/images/I/61Zpru3io-L._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0C1KPXPM9",
    product_title:
      "SAMSUNG 34&quot; ViewFinity S50GC Series Ultra-WQHD Monitor, 100Hz, 5ms, HDR10, AMD FreeSync, Eye Care, Borderless Design, PIP, PBP, LS34C502GANXZA, 2023, Black",
    categorie: "Monitor",
    product_price: "$249.99",
    product_original_price: "$379.99",
    currency: "USD",
    product_star_rating: "4.4",
    product_num_ratings: 2362,
    product_url: "https://www.amazon.com/dp/B0C1KPXPM9",
    product_photo:
      "https://m.media-amazon.com/images/I/71y4oBIWcdL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0B6DFG1FQ",
    product_title:
      "Acer Nitro KG241Y Sbiip 23.8” Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms (VRB) | ZeroFrame Design | 1 x Display Port 1.2 &amp; 2 x HDMI 2.0,Black",
    categorie: "Monitor",
    product_price: "$109.99",
    product_star_rating: "4.5",
    product_num_ratings: 5481,
    product_url: "https://www.amazon.com/dp/B0B6DFG1FQ",
    product_photo:
      "https://m.media-amazon.com/images/I/71yo3bmyBnL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0C5NDN7W3",
    product_title:
      "AOPEN acer 20E0Q bi 19.5-inch Professional HD+ (1600 x 900) Monitor | 75Hz Refresh Rate | VESA Mountable Eye Protection: BlueLight Filter &amp; Flickerless Technology (1 x HDMI &amp; VGA Port)",
    categorie: "Monitor",
    product_price: "$59.99",
    product_star_rating: "4.3",
    product_num_ratings: 778,
    product_url: "https://www.amazon.com/dp/B0C5NDN7W3",
    product_photo:
      "https://m.media-amazon.com/images/I/91lyLDhDJ7L._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CG9HF9KW",
    product_title:
      "SANSUI 27 Inch Monitor, IPS 100Hz Computer Monitor Full HD 1920 x 1080P with HDMI VGA Interface Eye Care Frameless 100 x 100mm VESA (ES-27X3AL, HDMI Cable Included)",
    categorie: "Monitor",
    product_price: "$98.99",
    product_star_rating: "4.4",
    product_num_ratings: 582,
    product_url: "https://www.amazon.com/dp/B0CG9HF9KW",
    product_photo:
      "https://m.media-amazon.com/images/I/71-S9Yk-GUL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B01CX26WIG",
    product_title:
      "SAMSUNG 27&quot; CF39 Series FHD 1080p Curved Computer Monitor, Ultra Slim Design, AMD FreeSync, 4ms response, HDMI, DisplayPort, VESA Compatible, Wide Viewing Angle, LC27F398FWNXZA, Black",
    product_price: "$149.99",
    categorie: "Monitor",
    product_original_price: "$169.99",
    currency: "USD",
    product_star_rating: "4.6",
    product_num_ratings: 20736,
    product_url: "https://www.amazon.com/dp/B01CX26WIG",
    product_photo:
      "https://m.media-amazon.com/images/I/91SZVWfPjdL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B078HQH2B2",
    product_title:
      "Sceptre New 22 Inch FHD LED Monitor 75Hz 2X HDMI VGA Build-in Speakers, Machine Black (E22 Series), 1920 x 1080 Pixels",
    categorie: "Monitor",
    product_price: "$69.97",
    product_star_rating: "4.4",
    product_num_ratings: 7886,
    product_url: "https://www.amazon.com/dp/B078HQH2B2",
    product_photo:
      "https://m.media-amazon.com/images/I/61Yjn0kIHXL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0B928B6BC",
    product_title:
      "LG UltraGear QHD 34-Inch Curved Gaming Monitor 34GP63A-B, VA with HDR 10 Compatibility and AMD FreeSync Premium, 160Hz, Black",
    categorie: "Monitor",
    product_price: "$314.65",
    product_star_rating: "4.5",
    product_num_ratings: 1229,
    product_url: "https://www.amazon.com/dp/B0B928B6BC",
    product_photo:
      "https://m.media-amazon.com/images/I/81soN3bwVFL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0B9NNWXVP",
    product_title:
      "Portable Monitor 15.6inch FHD 1080P USB C HDMI Gaming Ultra-Slim IPS Display w/Smart Cover &amp; Speakers,HDR Plug&amp;Play, External Monitor for Laptop PC Phone Mac (15.6&#x27;&#x27; 1080P)",
    categorie: "Monitor",
    product_price: "$89.98",
    product_star_rating: "4.5",
    product_num_ratings: 5767,
    product_url: "https://www.amazon.com/dp/B0B9NNWXVP",
    product_photo:
      "https://m.media-amazon.com/images/I/81F99hab1GL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CSDZP44V",
    product_title:
      "BLU G73 | 2023 | 3-Day Battery | Unlocked | 6.8” HD+ Infinity Display | 128/6GB | Triple 50MP Camera | US Version | US Warranty | Grey",
    categorie: "celular",
    product_price: "$99.99",
    product_star_rating: "4.2",
    product_num_ratings: 30,
    product_url: "https://www.amazon.com/dp/B0CSDZP44V",
    product_photo:
      "https://m.media-amazon.com/images/I/81TeO+nqxnL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0D1B6L2VN",
    product_title:
      "A23 Unlocked Android Phone 6.7-inch HD LCD Unlocked Cell Phone 4GB+128GB Android 13 Smartphone 5500 mAh Large Battery Unlocked Phone 50MP+13MP Camera 5G Dual SIM (Green)",
    categorie: "celular",
    product_price: "$109.99",
    product_star_rating: "5",
    product_num_ratings: 4,
    product_url: "https://www.amazon.com/dp/B0D1B6L2VN",
    product_photo:
      "https://m.media-amazon.com/images/I/71WHbylnDGL._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
  {
    asin: "B0CN1Q2X3B",
    product_title:
      "SAMSUNG Galaxy A25 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple Camera System, Expandable Storage, Stereo Speakers,US Version,2024,Black",
    categorie: "celular",
    product_price: "$118.00",
    product_star_rating: "3.7",
    product_num_ratings: 100,
    product_url: "https://www.amazon.com/dp/B0CN1Q2X3B",
    product_photo:
      "https://m.media-amazon.com/images/I/61cwMOVn17L._AC_SX444_SY639_FMwebp_QL65_.jpg",
  },
];
