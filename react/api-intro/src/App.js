import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [city, setCity] = useState("");

  const getInfo = (event) => {
    event.preventDefault();

    fetch("https://api.openbrewerydb.org/breweries?by_city=" + city)
      .then(data => data.json())
      .then(res=>{
        console.log(res);
        setBreweries(res);
      })
      .catch(err=>console.log(err))
  }

  return (
    <div className="App">
      <h1>get brewery info!</h1>
      <form onSubmit={getInfo}>
        <input type="text" placeholder="city" onChange={(event)=>setCity(event.target.value)} className="form-control w-25 d-block mx-auto my-2"/>
        <button type="submit" className='btn btn-info btn-lg d-block mx-auto my-2'>get info!</button>
      </form>

      <ul>
        {
          breweries.map((item,i)=>{
            return <li key={i}><a href={item.website_url}>{item.name}</a></li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
