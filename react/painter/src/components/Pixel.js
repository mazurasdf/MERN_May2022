import React, {Component} from "react";

class Pixel extends Component{
    constructor(props){
        super(props);
        this.state = {
            filled: false
        }
    }

    render(){
        return(
            <div className={this.state.filled ? "pixel filled" : "pixel"} onClick={()=>{this.setState({filled: !this.state.filled})}}>
            </div>
        )
    }
}

export default Pixel;