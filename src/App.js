import React from 'react';
import './App.css';
import { HomePage } from '../src/pages/homepage';
import ShopPage from './pages/shoppage';
import {Route, Switch} from 'react-router-dom';
import Header from './Component/header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/shop' component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
