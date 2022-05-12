import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const MarqueeForm = (props) => {
    const [form, setForm] = useState(1);
    const history = useHistory();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        //send the user to this URL
        history.push("/marquee/" + form);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="number" onChange={(event)=>setForm(event.target.value)}/>
                <button style={{display:"none"}} className="btn btn-sm btn-primary" type="submit">go!</button>
            </form>
        </div>
    )
}

export default MarqueeForm;