import logo from './logo.svg';
import './App.css';
import TestComp from './components/TestComp';

function App() {
  const message = "hey it's me!!!";
  const style = {
    backgroundColor: "cornflowerblue",
    height:"200px"
  }

  const printMessage = () => {
    console.log("hey you pressed me!");
    //return undefined
  }

  const printCustomMessage = (phrase) => {
    console.log(phrase);
  }

  return (
    <div className="App">
      <label htmlFor="name">Name:</label>
      <input name="name" type="text"/>

      <h1 style={style}>{message}</h1>
      <h1>2+2={2+2}</h1>

      <button onClick={printMessage}>click for message</button>
      <button onClick={()=>printCustomMessage("the custom message")}>click for custom message</button>
      <button onClick={(event)=>{console.log(event)}}>click for event info</button>
      <button onClick={(event)=>{console.log(event)}}>click for other info</button>


      <marquee><TestComp message="weeeeeeeeeeeeeeeee" num="5"/></marquee>
      <TestComp message="hey i'm second!" num={5}/>
      <TestComp/>
      <TestComp/>
      <TestComp/>
    </div>
  );
}

export default App;
