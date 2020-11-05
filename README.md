# Prueba Front Mercado Libre

> 

La prueba consistia en traer resultados en base a una búsqueda, mostrarlos y tener la posibilidad de mostrar cada detalle de item.

Se realizó un solo repositorio que cuenta con la parte del server y del client.

## Tecnologias Usadas

### Backend

- Node JS
- Express JS
- Axios
- Nodemon (para el desarrollo)

### Frontend

- React Js
- Redux
- Redux-thunk
- Css

## Requerimientos

- Ultima version de Node LTS, o preferentemente ultimo stable
- npm 


## Como levantar el entorno ?

```Bash

# En una terminal
cd packages/server
npm install
nodemon server

# En otro terminal
cd packages/client
npm install
npm run start
```

### Repositorio

```sh
https://github.com/fdopazo/prueba-front
```

### Nota

Las imagenes de los resultados no se visualizan con una calidad decente, ya que el endpoint que se brindó solamente tiene una imagen thumbnail, como posible solución a esto se puede consultar la documentacion de la api y encontrar una mejor imagen para mostrar.

Hay un dato en particular que no existe más en el resultado de la api, referido con los decimales, por lo que se corrigió en el front para mostrarlo de manera correcta.
