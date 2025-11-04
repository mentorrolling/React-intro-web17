function ButtonApp({ dato, animales }) {
  // console.log(props.dato);
  // console.log(props.animales);

  // const { dato, animales } = props;

  //{ dato:'Albertito', animales:[]}

  const mostrarMensaje = () => {
    alert(`Hola ${dato}`);
  };

  return (
    <div>
      <button onClick={mostrarMensaje}>Click me!</button>
    </div>
  );
}

export default ButtonApp;
