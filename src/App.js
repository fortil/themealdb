import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Search from './components/Search';
import Recipes from './components/Recipes';
import Item from './components/Item';
import { HooksProvider } from './hook';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <HooksProvider>
          <header className="App-header">
            <Switch>
              <Route path="/recipe/:recipeId">
                <Item />
              </Route>
              <Route path="/">
                <Recipes />
              </Route>
            </Switch>
          </header>
          <Search />
        </HooksProvider>
      </div>
    </Router>
  );
}

export default App;
