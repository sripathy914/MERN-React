import logo from './logo.svg';
import './App.css';
import PropsFunction from './Components/FunctionComponent/PropsFunction';
import StateComponent from './Components/ClassComponent/StateComponent';

function App() {
  return (
    <div className="App">
      <StateComponent rollno="21CDR050" name="Sripathy"></StateComponent>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            My github profile
        </p>
        <a
          className="App-link"
          href="https://www.github.com/sripathy914"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
