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

### Test
- enzyme-adapter-react-16
- enzyme
- redux-mock-store
- Jest-dom

## Requerimientos

- Ultima version de Node LTS, o preferentemente ultimo stable
- npm 


## Como levantar el entorno ?

```Bash

# En una terminal
cd server
npm install
nodemon server
correra en el puerto http://localhost:3002

# En otro terminal
cd client
npm install
npm run start
Abrir http://localhost:3010 en el navegador.
```

## Testear
Se realizaron una serie de test a modo de prueba y ejemplo
```Bash
cd client
npm run test
```

### Repositorio

```sh
https://github.com/fdopazo/prueba-front
```

### Nota

Las imagenes de los resultados no se visualizan con una calidad decente, ya que el endpoint que se brindó solamente tiene una imagen thumbnail, como posible solución a esto se puede consultar la documentacion de la api y encontrar una mejor imagen para mostrar.

Hay un dato en particular que no existe más en el resultado de la api, referido con los decimales, por lo que se corrigió en el front para mostrarlo de manera correcta.
