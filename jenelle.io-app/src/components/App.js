import logo from './logo.svg';
import './App.css';
import Title from "./Title/title";
import Logo from './Logo/logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Logo/>
        </div>
        <div>
          <Title/>
        </div>
        <p>
          Learn all about your favorite MLB team
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
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
