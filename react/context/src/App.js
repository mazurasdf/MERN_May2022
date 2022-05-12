import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route, Link} from "react-router-dom";
import Bio from './views/Bio';
import {useState} from "react";
import ColorContext from "./contexts/ColorContext";
import NavBar from './components/NavBar';
import Cards from './views/Cards';

function App() {
  const [themeColor, setThemeColor] = useState("palevioletred");

  return (
    <div className="App">
      <ColorContext.Provider value={{themeColor,setThemeColor}}>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Bio/>
          </Route>

          <Route exact path="/cards">
            <Cards/>
          </Route>
        </Switch>
      </ColorContext.Provider>
    </div>
  );
}

export default App;
