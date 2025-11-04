import React from "react";
import { data } from "../data/db";
import CardProfile from "./CardProfile";

const ListCardsProfile = () => {
  return (
    <div>
      {data.map((user) => (
        <CardProfile user={user} key={user.id} />
      ))}
    </div>
  );
};

export default ListCardsProfile;
