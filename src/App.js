import React, { useState } from 'react';
import Search from './components/Search';
import Recipes from './components/Recipes';
import './App.css';

function App() {
  const [entry, setEntry] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <Recipes entry={entry} setEntry={setEntry} />
      </header>
      <Search setEntry={setEntry} />
    </div>
  );
}

export default App;
