import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <FunctionalCounter/>
    </div>
  );
}

export default App;
