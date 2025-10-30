import "../css/card.css";

const CardProfile = () => {
  const usuario = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  return (
    <div>
      <h3>{usuario.name}</h3>
      <img
        style={{ borderRadius: "50%" }}
        className="fotito"
        src={usuario.imageUrl}
        alt={usuario.name}
      />
    </div>
  );
};

export default CardProfile;
