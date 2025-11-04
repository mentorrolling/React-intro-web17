import { useState } from "react";
import "../css/card.css";

const CardProfile = ({ user }) => {
  const [like, setLike] = useState(false);

  const { firstName, lastName, avatar, email } = user;
  // const usuario = {
  //   name: "Hedy Lamarr",
  //   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  //   imageSize: 90,
  // };

  return (
    <div className="card">
      <img
        style={{ borderRadius: "50%" }}
        src={avatar}
        alt={firstName + " " + lastName}
        onClick={() => alert(`Email: ${email}`)}
      />
      <h3>{firstName + " " + lastName}</h3>
      <div>
        {like ? (
          <i
            className="fa fa-heart like"
            aria-hidden="true"
            onClick={() => setLike(!like)}
          ></i>
        ) : (
          <i
            className="fa fa-heart-o like"
            aria-hidden="true"
            onClick={() => setLike(!like)}
          ></i>
        )}
      </div>
    </div>
  );
};

export default CardProfile;
