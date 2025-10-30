import ButtonApp from "./components/ButtonApp";
import CardProfile from "./components/CardProfile";
import ProductsList from "./components/ProductsList";

function App() {
  //Javascript
  const user = "José";

  return (
    <div>
      <h1>Hola {user}😎</h1>
      <ButtonApp />
      <CardProfile />
      <ProductsList />
    </div>
  );
}

export default App;
