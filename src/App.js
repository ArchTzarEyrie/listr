import './App.scss';
import CreateListForm from './components/CreateListForm';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <CreateListForm />
    </div>
  );
}

export default App;
