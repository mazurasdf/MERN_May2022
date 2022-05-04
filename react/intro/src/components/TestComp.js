import React, {Component} from "react";

class TestComp extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>your message here: {this.props.message}</h1>
                <h1>calculate: {this.props.num + 1}</h1>
            </div>
        )
    }
}

export default TestComp;