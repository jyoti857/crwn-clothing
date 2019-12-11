import React, {useEffect} from 'react';
import './App.css';
import { HomePage } from '../src/pages/homepage';
import ShopPage from './pages/shoppage';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './Component/header';
import SigninAndSignupPage from './pages/sign-in-and-sign-up-page';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import { setCurrentUser } from './redux/user/user-action';
import {connect} from 'react-redux';
import CheckoutPage from './pages/checkoutpage';

const App = props =>{
  // const [currentUser, setCurrentUser] = useState(null);
  const {setCurrentUser, currentUser} = props;
  let unsubscribeFromAuth = null;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      if(user){
      const userRef = await createUserProfileDocument(user);
      userRef.onSnapshot(snapShot => {
        console.log(snapShot);
        setCurrentUser({id: snapShot.id, ...snapShot.data()});
      })
    }else{
      setCurrentUser(user); // if no user present the user set to be null here, once user logs out then 
      // this user would be null and no user be in state
    }
    });
  }, []);
  

  // ComponentWillUnmount 
  useEffect(() =>{
    if(unsubscribeFromAuth){
    return () => {
      unsubscribeFromAuth();
    }}
  });
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/shop' component={ShopPage} />
          <Route exact path = '/signin' render = {() => currentUser ? (<Redirect to='/' /> )
              : (<SigninAndSignupPage />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
    </div>
  );
}
const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser,
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
