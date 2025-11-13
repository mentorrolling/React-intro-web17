const apiKey = "e3e500cbb8977b4c121b9a50e5f059a1";

const infoClima = async (lat, long) => {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=es&appid=${apiKey}`
  );
  const data = await resp.json();

  return data;
};

export { infoClima };

/*
¿Qué hace este archivo?
Este archivo tiene una función que pide información del clima a una página web (OpenWeatherMap) usando la latitud y longitud de un lugar.

Explicación paso a paso:

apiKey
-------
const apiKey = "...";
Es una clave especial que te da OpenWeatherMap para poder usar su servicio.

Función infoClima
-------------------
const infoClima = async (lat, long) => { ... }
Es una función que recibe dos datos: latitud (lat) y longitud (long).

Pedir datos del clima
----------------------
Usa fetch para pedirle a OpenWeatherMap el clima de ese lugar.
La dirección web incluye la latitud, longitud, idioma español y la clave.

Convertir la respuesta
-----------------------
const data = await resp.json();
Convierte la respuesta en un objeto que JavaScript puede usar.

Devolver los datos
-------------------
return data;
Devuelve la información del clima para que otros archivos la usen.

Exportar la función
--------------------
export { infoClima };
Permite que otros archivos puedan usar la función infoClima.

Resumen
--------
- Este archivo tiene una función para pedir el clima de cualquier lugar usando latitud y longitud.
- Usa la API de OpenWeatherMap y devuelve los datos listos para usar en tu aplicación.
*/
