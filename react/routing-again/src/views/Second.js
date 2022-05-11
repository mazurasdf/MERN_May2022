import React from "react";
import { useParams } from "react-router-dom";

const Second = (props) => {
    const {repeatMe, more} = useParams();

    return(
        <div>
            <h1>Second page here</h1>
            <h1>repeat: {repeatMe}, {more}</h1>
        </div>
    )
}

export default Second;