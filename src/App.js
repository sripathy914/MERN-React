import logo from './logo.svg';
import './App.css';
import PropsFunction from './Components/FunctionComponent/PropsFunction';

function App() {
  return (
    <div className="App">
      <PropsFunction name="Sripathy R S" behaviour="good"></PropsFunction>
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
