import React, { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css"; // you must import the css file to use the css file

const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
