import React, {useState, useEffect} from 'react';
import './App.css';
import { HomePage } from '../src/pages/homepage';
import ShopPage from './pages/shoppage';
import {Route, Switch} from 'react-router-dom';
import Header from './Component/header';
import SigninAndSignupPage from './pages/sign-in-and-sign-up-page';
import { auth } from './firebase/firebase-utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    console.log(currentUser);
  }, [currentUser]);

  // ComponentWillUnmount 
  useEffect(() =>{
    return () => {
      unsubscribeFromAuth();
    }
  })
  return (
    <div>
      <Header currentUser = {currentUser}/>
      <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/shop' component={ShopPage} />
          <Route exact path = '/signin' component={SigninAndSignupPage} />
        </Switch>
    </div>
  );
}

export default App;
