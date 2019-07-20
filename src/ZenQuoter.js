import React, {Component} from 'react';
import axios from 'axios';
import './ZenQuoter.scss';

class ZenQuoter extends Component{

     constructor(props){
         super(props);
         this.state={quote: " "};
     }

     componentDidMount(){
         //load Data
         axios.get("https://api.github.com/zen").then(response=>{
             setTimeout(() =>
              {
                 this.setState({ quote:response.data});
             },3000)});
         


         
     }
     render() {
         return (
              <div>
                  <h1>Always remember....</h1>
                  <p>{this.state.quote}</p>
              </div>
         );
     }
}
export default ZenQuoter;