import React, { useState } from "react";

const FunctionalCounter = (props) => {
    
    const [count,setCount] = useState(0);
    // const [count,setCount] = useState({first:0,second:4});
    const [anotherCounter, setAnotherCounter] = useState(4);

    const clickHandler = () => {
        setCount(count + 1);
        // setCount({...count,first:count.first+1})

        // count = count + 1;
    }

    const anotherClickHandler = () => {
        setAnotherCounter(anotherCounter + 1);
        // setCount({...count,second:count.second+1})

        // count = count + 1;
    }

    return(
        <div className="border p-5 w-50 d-block mx-auto my-3">
            <h1>function count: <em>{count}</em></h1>
            <h1>another count: <em>{anotherCounter}</em></h1>
            {/* <h1>function count: <em>{count.first}</em></h1>
            <h1>another count: <em>{count.second}</em></h1> */}

            <button onClick={clickHandler} className="btn btn-lg btn-primary">click me!</button>
            <button onClick={anotherClickHandler} className="btn btn-lg btn-primary">click me!</button>
        </div>
    )
}

export default FunctionalCounter;