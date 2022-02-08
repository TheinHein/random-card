import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      deck_id: "",
      cards: [
        {
          code: "",
          image: "",
          images: {
            svg: "",
            png: "",
          },
          value: "",
          suit: "",
        },
      ],
      remaining: null,
      shuffled: "",
    };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    const url =
      "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const response = await axios.get(url);
    const { deck_id } = response.data;
    this.setState({ deck_id });
  }
  async getCard() {
    try {
      const url = `https://www.deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`;
      const response = await axios.get(url);
      const { cards, remaining, success } = response.data;
      if (!success) {
        throw new Error("No Card Remaining");
      }
      this.setState((st) => ({
        cards: [...st.cards, ...cards],
        remaining: remaining,
      }));
    } catch (e) {
      alert(e);
    }
  }
  render() {
    return (
      <div className="Deck">
        <h1 className="Deck-title">Card Dealer</h1>
        <h2 className="Deck-title subtitle">A Little Demo Using React</h2>

        <div className="Deck-cardArea">
          {this.state.cards.map((card) => (
            <Card
              image={card.image}
              value={card.value}
              suit={card.suit}
              key={card.code}
            />
          ))}
        </div>

        <button className="getCard-btn" onClick={this.getCard}>
          Give Me a Card!
        </button>
      </div>
    );
  }
}

export default Deck;
