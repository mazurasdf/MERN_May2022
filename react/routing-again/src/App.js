import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './views/Home';
import Marquee from './views/Marquee';
import Second from './views/Second';
import {Switch, Route, Link} from "react-router-dom";
import MarqueeForm from './components/MarqueeForm';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Routing Practice!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/second/hello/repeater">Second</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/marquee/5">Marquee</Link>
              </li>
              <li className="nav-item">
                <MarqueeForm/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
