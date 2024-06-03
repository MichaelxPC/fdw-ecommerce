Descripción
Este proyecto de fundamentos web implementa una tienda online básica utilizando tecnologías como HTML, CSS (con Tailwind CSS), JavaScript y herramientas de desarrollo como Prettier. El proyecto simula la funcionalidad de un ecommerce, permitiendo a los usuarios navegar por diferentes categorías de productos, visualizar detalles de productos individuales.

Secciones:

#Manual de usuario:
La seccion le explicara al usuario la funcionalidad basica de la aplicacion, el usuario tendra que digitar, codigo, nombre, precio, numero de feeds, estrellas, imagen por select o por url, domicilio si tiene precio o no. Se podra crear el producto o limpiar los campos

#Crear producto:
La seccion es para la crearcion de productos, el usuario tendra que digitar, codigo, nombre, precio, numero de feeds, estrellas, imagen por select o por url, domicilio si tiene precio o no. Se podra crear el producto o limpiar los campos.

#Productos:
Los productos creados seran vizualizados en la seccion de producto, esta seccion llamara la localstorage donde se tendran almacenados los productos y este los mostrara con todos sus atributos.

#Productos - tabla:
Los productos creados seran vizualizados en la seccion de producto, esta seccion llamara la localstorage donde se tendran almacenados los productos y este los mostrara con todos sus atributos. Se podra filtrar por precio, por un campo de nombre y categoria. la aplicacion tiene boton de "filtrar" o de limpiar campos

Tecnologías Utilizadas
Front-end:
HTML5 para estructuración del contenido
CSS3 para estilos visuales
Tailwind CSS para un framework CSS rápido y flexible
JavaScript para agregar interactividad y lógica

Herramientas:
Prettier para formatear código de manera consistente

Instrucciones para su instalacion:
npm install

Tailwind:
Para poder actulizar los cambios de tailwind se necesita ejecutar el siguiente cli para
ver los cambios en tiempo real en el proyecto
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

Prettier:
Tener la extension de prettier instalada para un formato automatico

Recursos Adicionales
Documentación de Tailwind CSS: https://tailwindcss.com/
Documentación de Prettier: https://prettier.io/
