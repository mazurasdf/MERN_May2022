import React, {Component} from "react";
import Pixel from "./Pixel";

class Row extends Component{
    render(){
        return(
            <div className="d-flex justify-content-center w-100">
                <Pixel/>
                <Pixel/>
                <Pixel/>
                <Pixel/>
                <Pixel/>
                <Pixel/>
                <Pixel/>
                <Pixel/>
                <Pixel/>
                <Pixel/>
            </div>
        )
    }
}

export default Row;