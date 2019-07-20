import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuoter.scss';
import GitHubUserInfo from './GitHubUserInfo';

class ZenQuoter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: " ",
            Loaded: false
        };
    }

    componentDidMount() {
        //load Data
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(() => {
                this.setState({
                    quote: response.data,
                    loaded: true
                });

            }, 3000)
        });




    }
    render() {
        return (
            <div className="Quoter">
                <h1>Always remember....</h1>
                {!this.state.loaded ?
                    <div className="loader"></div> :
                    <div>
                        <p>{this.state.quote}</p>
                        <GitHubUserInfo userId="Candiceqiqi" />
                        <GitHubUserInfo userId="Shen" />
                    </div>
                }



            </div>
        );
    }
}
export default ZenQuoter;