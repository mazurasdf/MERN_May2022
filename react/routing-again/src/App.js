import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './views/Home';
import Marquee from './views/Marquee';
import Second from './views/Second';
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>routing practice!</h1>
      {/* <Home/>
      <Second/>
      <Marquee/> */}
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/second/:repeatMe/:more">
          <Second/>
        </Route>

        <Route exact path="/marquee/:times">
          <Marquee/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
