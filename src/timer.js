import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
        this.clock();
        console.log("in constructor");
    }
    // componentDidMount() {
    //     setInterval(state=>{
    //         this.setState(()=>({time:new Date()})
    //             )
    //     }, 1000);
    //     console.log("mounting");

    // }
    clock(){
        
        setInterval(()=>{
            let lock=this.state.time;
            lock++;
            this.setState(()=>({time:lock})
                )
        }, 1000);
    }
    render() {
        return (
            <div>
           {this.state.time}
            </div>
        );
    }

}
export default Timer;