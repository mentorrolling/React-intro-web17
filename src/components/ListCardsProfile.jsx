import { useEffect, useState } from "react";
import { data } from "../data/db";
import CardProfile from "./CardProfile";

const ListCardsProfile = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    //Verificar si la info de los usuarios que viene de data está en localstorage.
    // si no está, guardarlo
    // y si está tarer los datos desde allí
    if (!localStorage.getItem("usuarios")) {
      localStorage.setItem("usuarios", JSON.stringify(data));
      setUsuarios(data);
    } else {
      setUsuarios(JSON.parse(localStorage.getItem("usuarios")));
    }
  }, []);

  //si dejo vacio el array entonces se ejectua en el ciclo de vida del montaje
  //si quiero ejecutar el efecto en el update entonces debo agregar un estado en el array

  //Función que modifique la propiedad like de la bd de cada usuario
  const updateLike = (id) => {
    console.log(id);
    // const index = usuarios.findIndex((user) => user.id === id);

    // const users = [...usuarios];
    // users[index].like = !users[index].like;

    // console.log(users);

    const update = usuarios.map((user) => {
      return user.id === id ? { ...user, like: !user.like } : user;
    });

    setUsuarios(update);
    localStorage.setItem("usuarios", JSON.stringify(update));
  };

  return (
    <div>
      {usuarios.map((user) => (
        <CardProfile user={user} key={user.id} updateLike={updateLike} />
      ))}
    </div>
  );
};

export default ListCardsProfile;
