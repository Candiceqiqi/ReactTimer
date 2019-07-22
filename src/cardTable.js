import React, { Component } from 'react';
import Cards from './Cards';
import axios from 'axios';
import './CardTable.scss';


class CardTable extends Component {

    static defaultProps = {
        deck_count: 1,
        count: 1
    }
    constructor(props) {
        super(props);
        this.state = {
            deck_id: " ",
            cards_remaining: " ",
            cards: [

            ]

        }
        this.DrawCards = this.DrawCards.bind(this);
    }

    async componentDidMount() {
        let reponse = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${this.props.deck_count}`);

        let data = reponse.data;
        console.log(data);
        this.setState(state => {
            return {
                "deck_id": data.deck_id,
                "cards_remaining": data.remaining

            }
        }
        )
    }


    async DrawCards() {

        let url = `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=${this.props.count}`;
        let reponse = await axios.get(url);
        let data = reponse.data;
        let cards = data["cards"].map(m => {
            return {
                "url": m["image"],
                "degree": this.state.cards_remaining
            }
        });

        console.log("cards==" + cards);
        this.setState(state => {
            state["cards"].push(cards[0]);
            return {
                "cards_remaining": data.remaining,
                "cards": state["cards"]

            }
        })

        console.log(data);



    }
    showCards() {
        if (this.state.cards_remaining === 0) {
            return <div>There are no cards left</div>
        }
        if (this.state.cards.length === 0)
            return <h1>Welcome!</h1>
        else
            return this.state.cards.map(m => (<Cards url={m["url"]} number={m["degree"]} />));

    }



    render() {
        return (
            <div className="CardTable">
                <button onClick={this.DrawCards} >GIMME A CARD!</button>

                {this.showCards()}
            </div>
        );
    }



}
export default CardTable;