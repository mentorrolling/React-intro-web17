import React from "react";

const ButtonPropsApp = ({ title, action }) => {
  return (
    <button style={{ margin: "0px 5px" }} onClick={action}>
      {title}
    </button>
  );
};

export default ButtonPropsApp;
