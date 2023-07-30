import logo from './logo.svg';
import './App.css';
// import Calc from './Components/Calc';
import Bmi from './BmiComponents/Bmi';

function App() {
  return (
    <div className="App">
      {
        // <Calc/>
        <Bmi/>
      }
    </div>
  );
}

export default App;
