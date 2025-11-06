import { useEffect, useState } from "react";

import ButtonApp from "./components/ButtonApp";
import ButtonPropsApp from "./components/ButtonPropsApp";
import CounterApp from "./components/CounterApp";
// import CardProfile from "./components/CardProfile";
import ListCardsProfile from "./components/ListCardsProfile";
import ProductsList from "./components/ProductsList";

function App() {
  //Javascript
  // const [show, setShow] = useState(true);

  const user = "React";
  // const mascotas = ["Gato", "Perro", "Loro"];

  // const alertMessage = () => {
  //   alert(`Bienvenido/a ${user}`);
  // };

  // const showMessage = () => alert("Esto es un mensaje desde props");

  // const showProfiles = () => {
  //   setShow(!show);
  // };

  return (
    <div>
      <h1>Hola {user}😎</h1>
      <div style={{ display: "flex" }}>
        {/* <ButtonApp dato={user} animales={mascotas} /> */}
        {/* <ButtonPropsApp title="Mostrar/ocultar" action={showProfiles} />

<ButtonPropsApp title="Saludar" action={alertMessage} />
<ButtonPropsApp title="Mensaje" action={showMessage} /> */}
      </div>
      <ListCardsProfile />
      {/* <CardProfile /> */}
      {/* {show && <ListCardsProfile />} */}

      {/* <ProductsList /> */}
      {/* <CounterApp initialState={10} /> */}
    </div>
  );
}

export default App;
