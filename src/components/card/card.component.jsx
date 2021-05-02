import React from "react";
import "./card.styles.css";

const Cards = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`}
    ></img>
    <h2 key={props.key}>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);

export default Cards;
