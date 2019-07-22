import React, { Component } from 'react';
import "./Cards.scss";



class Cards extends Component {
    

    componentDidUpdate(){

    }


    render() {
        return (
            <div className="Card" >
              <img src={this.props.url} alt="card" style={ { transform: `rotate(${this.props.number}deg)`} }/>
            </div>
        );
    }
}

export default Cards;