import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Word from './components/Word';

function App() {
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("phase");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    setGuesses([...guesses, input]);
  }

  return (
    <div className="App">
      <h1>wordle clone!</h1>
      <form className='w-25 d-block mx-auto my-3' onSubmit={onSubmitHandler}>
        <div className='form-group'>
          <input type="text" className="form-control" placeholder="what's your guess?" onChange={(event)=>{setInput(event.target.value)}}/>
        </div>

        <input type="submit" className='btn btn-success m-1'/>
      </form>


      {
        guesses.map((item,i)=>{
          return <Word key={i} answer={answer} guess={item}/>
        })
      }
    </div>
  );
}

export default App;
