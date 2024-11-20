import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My React App</h1>
          <p>
            This is a test React application.
          </p>
          <p>
            <em>"The journey of a thousand lines of code begins with a single component."</em>
          </p>
          <button onClick={() => alert('You clicked the button!')} className="btn-primary">
            Click Me!
          </button>
        </header>
      </div>
  );
}

export default App;
