import React from "react";
import { useParams } from "react-router-dom";

const Marquee = (props) => {
    const {times} = useParams();

    return(
        <div>
            {
                [...Array(parseInt(times))].map((item,i)=>{
                    return <marquee key={i}><h1>fun and wacky sliding text</h1></marquee>
                })
            }
            
        </div>
    )
}

export default Marquee;