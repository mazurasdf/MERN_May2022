import React, {Component} from "react";

class ClassCounter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    render(){
        const clickHandler = () => {
            this.setState({count: this.state.count + 1});
        }

        return(
            <div className="border p-5 w-50 d-block mx-auto my-3">
                <h1>class count: <em>{this.state.count}</em></h1>

                <button onClick={clickHandler} className="btn btn-lg btn-primary">click me!</button>
            </div>
        )
    }
}

export default ClassCounter;