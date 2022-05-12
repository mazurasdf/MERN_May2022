import React, {useEffect, useState, useContext} from 'react';
import axios from "axios";
import ColorContext from '../contexts/ColorContext';

const PokeCard = (props) => {
    const [pokeData, setPokeData] = useState();
    const {themeColor} = useContext(ColorContext);

    useEffect(()=>{
        console.log("use effect is running for the pokemon" + props.name);
        axios.get("https://pokeapi.co/api/v2/pokemon/" + props.name)
            .then(res => {
                console.log(res.data.sprites.front_default);
                setPokeData(res.data);
                
            })
            .catch(err=>console.log(err))
    },[])

    const style = {
        backgroundColor: themeColor + "80",
        border: `3px solid ${themeColor}`
    }

    return(
        <div style={style} className="pokeCard">
            <img src={pokeData ? pokeData.sprites.front_default : ""} alt={props.name}/>
            <h1>{props.name}</h1>
            <h2>types:</h2>
            {
                pokeData &&
                pokeData.types.map((item,i)=>{
                    return <li key={i}>{item.type.name}</li>
                }) 
            }
        </div>
    )
}

export default PokeCard;