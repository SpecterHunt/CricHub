import React from "react";
import "./CapHolderCard.css";

const CapHolderCard = (props) => {
  return (
    <div className="wrapper-card">
      <div className="image-wrapper">
        <img src={props.cap}></img>
      </div>
      <p>{props.playerName}</p>
      <p>{props.stats}</p>
    </div>
  );
};

export default CapHolderCard;
