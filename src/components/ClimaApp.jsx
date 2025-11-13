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
