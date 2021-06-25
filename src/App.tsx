// eslint-disable-next-line no-use-before-define
import React from 'react';
import logo from './logo.svg';
import './App.scss';

const logName = (a: string, b: string) => {
  // eslint-disable-next-line no-console
  console.log(a, b);
};

function App() {
  const name = 'sam';
  const newName = 'Peter';
  React.useEffect(() => {
    logName(name, newName);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        <p>
          Edit
          <code>src/App.tsx </code>
          and save to reload. {newName} {name}
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
