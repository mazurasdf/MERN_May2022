import PokeCard from '../components/PokeCard';
import {useState} from "react";

function Cards() {
  const [pokeList, setPokeList] = useState([])
  const [input, setInput] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setPokeList([...pokeList, input]);
    setInput("");
  }

  return (
    <div className="App">
      <h1>make the strongest pokemon team!!</h1>
      <form className='w-25 d-block mx-auto my-3' onSubmit={onSubmitHandler}>
        <input type="text" placeholder="add to your team" value={input} onChange={event=>setInput(event.target.value)}/>
        <input type="submit" className='btn btn-info d-block mx-auto my-1'/>
      </form>
      {/* <PokeCard name="pikachu"/> */}
      <div className='list'>
      {
        pokeList.map((item,i)=>{
          return <PokeCard key={i} name={item}/>
        })
      }
      </div>
    </div>
  );
}

export default Cards;