//Promesas de Javascript

const accesoSistema = () => {
  let active = true;

  return new Promise((resolve, reject) => {
    //resolve: método que nos permite recibir el mensaje o los datos cuando la promesa se cumple

    //reject: método que nos devuelve el resultado cuando falla la promesa

    console.log("Respuesta pendiente...");
    setInterval(() => {
      if (active) {
        resolve("El acceso está permitido");
      } else {
        reject("No tiene accesos al sistema");
      }
    }, 3000);
  });
};

accesoSistema()
  .then((response) => alert(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Proceso terminado."));

console.log("Hola alumnos, cómo están?");

//-------------------------------------------------

//fetch

const url = "https://fakestoreapi.com/products";
const productos = [];
//método get
// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// async - await

const getProducts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Hubo un error: ", error);
    throw new Error("Error al obtener los productos");
  }
};

getProducts()
  .then((respuesta) => {
    productos.push(...respuesta);
    console.log(productos);
  })
  .catch((error) => console.log(error));
