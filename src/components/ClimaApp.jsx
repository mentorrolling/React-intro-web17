import React, { useEffect, useState } from "react";
import { infoClima } from "../helpers/ClimaAPI";

const ClimaApp = () => {
  const [datosClima, setDatosClima] = useState(null);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  useEffect(() => {
    obtenerCoordenadas();
  }, []);

  const success = (pos) => {
    const { latitude, longitude } = pos.coords;
    infoClima(latitude, longitude).then((response) => setDatosClima(response));
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const obtenerCoordenadas = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  };
  /*
Documentación:
https://developer.mozilla.org/es/docs/Web/API/Geolocation/getCurrentPosition
*/

  return (
    <>
      {datosClima && (
        <article className="weather">
          <section>
            <img
              src={`https://openweathermap.org/img/wn/${datosClima.weather[0].icon}@2x.png`}
              alt=""
            />
            <div>
              <p>{datosClima.weather[0].description}</p>
              <p>{Math.ceil(datosClima.main.temp)}C°</p>
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default ClimaApp;

/*

¿Qué hace este componente?
El componente ClimaApp muestra el clima actual del lugar donde te encuentras usando tu ubicación y la API de OpenWeatherMap.

Explicación paso a paso:

Importaciones
----------------
useEffect y useState son funciones de React para manejar datos y efectos secundarios.
infoClima es una función que obtiene información del clima usando coordenadas.

Estado
-------
const [datosClima, setDatosClima] = useState(null);
Aquí se crea una variable (datosClima) para guardar la información del clima. Al principio está vacía (null).

Opciones de geolocalización
------------------------------
Se definen opciones para pedir la ubicación del usuario (más precisión, tiempo de espera, etc.).
useEffect

useEffect(() => { obtenerCoordenadas(); }, []);
Cuando el componente aparece en pantalla, se llama a la función obtenerCoordenadas para pedir la ubicación.

Funciones para geolocalización
--------------------------------
success: Si se obtiene la ubicación, toma la latitud y longitud y pide la información del clima usando infoClima. Cuando llega la respuesta, la guarda en datosClima.
error: Si hay un error al obtener la ubicación, muestra un mensaje en la consola.
Obtener coordenadas

obtenerCoordenadas usa el navegador para pedir la ubicación del usuario.
Renderizado

Si ya se tiene la información del clima (datosClima), se muestra:
- Un ícono del clima.
- La descripción del clima (por ejemplo, "nublado").
- La temperatura redondeada y en grados Celsius.

Resumen
----------
- El componente pide tu ubicación.
- Usa esa ubicación para buscar el clima actual.
- Muestra el clima en pantalla con un ícono, descripción y temperatura.

*/
