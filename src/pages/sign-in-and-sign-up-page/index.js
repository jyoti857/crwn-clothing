import React from 'react';
import './signinsignup.scss';
import SignIn from '../../Component/signin';
import Signup from '../../Component/signup';

const SigninAndSignupPage = () =>{
    return(
        <div className= 'sign-in-and-sign-up'>
            <SignIn />
            <Signup />
        </div>
    )
}

export default SigninAndSignupPage;