import React from 'react';
import './App.css';
import { HomePage } from '../src/pages/homepage';
import ShopPage from './pages/shoppage';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/shop' component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
