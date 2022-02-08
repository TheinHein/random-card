import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  constructor(props) {
    super(props);
    const angle = Math.random() * 90 - 45;
    const xCord = Math.random() * 40 - 20;
    const yCord = Math.random() * 40 - 20;
    this._transform = `rotate(${angle}deg) translate(${xCord}px,${yCord}px)`;
  }
  render() {
    return (
      <img
        className="Card"
        style={{
          transform: this._transform,
        }}
        src={this.props.image}
        alt={this.props.value + this.props.suit}
      />
    );
  }
}

export default Card;
