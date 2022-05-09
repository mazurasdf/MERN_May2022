import React from "react";

const Word = (props) => {
    return(
        <div className="letterContainer">
            {
                props.guess.split("").map((letter,i)=>{
                    let style = "letterBox";

                    if(props.answer[i] === letter){
                        style += " green";
                    }
                    else if(props.answer.includes(letter)){
                        style += " yellow";
                    }

                    return <div  key={i} className={style}>{letter}</div>
                })
            }
        </div>
    )
}

export default Word;