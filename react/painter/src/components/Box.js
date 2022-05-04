import React, {Component} from "react";

class Box extends Component{
    constructor(props){
        super(props);
        //initial state
        this.state = {
            count: 0
        }
    }

    render(){
        const {secondMessage, message} = this.props;

        const increaseCount = () => {
            this.setState({count: this.state.count + 1});
            // this.state.count++;
        }

        return(
            <div className="p-5 border w-50 mx-auto d-block my-3">
                {/* <h1>message here: {this.props.message}</h1> */}
                <h1>message here: {message.length > 10 ? "too long" : message}</h1>
                <h2>count: {this.state.count}</h2>
                <button onClick={increaseCount} className="btn btn-lg btn-success">click me!</button>
            </div>
        )
    }
}

export default Box;