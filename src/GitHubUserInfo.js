import React, {Component} from 'react';
import axios from 'axios';
import { thisExpression } from '@babel/types';


class GitHubUserInfo extends Component{

    constructor(props){
        super(props);
        this.state={
            img:" ",
            userName:" "
        }
    }


async componentDidMount(){
      let url=`https://api.github.com/users/${this.props.userId}`;
    let response=await axios.get(url);
    let data=response.data;
    this.setState(()=>({
        img:data.avatar_url,
        userName:data.name
    }))
    console.log(response.data);

}
render() {
    return (
         <div>
         <div> <img src={this.state.img} alt={this.state.userName}/> </div> 
        <div>{this.state.userName}</div>
         </div>
    );
}


}

export default GitHubUserInfo;