import React from 'react';
import './signin.scss';
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import { signInWithGoogle } from '../../firebase/firebase-utils';


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }
    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.setState({email: '', password: ""});
    }
    render(){
        const {email, password} = this.state;
        return(
            <div className='sign-in'>
                <h1>I have an account</h1>
                <span>Sgin in with email and password </span>
                <form onSubmit = {this.handleSubmit}>
                <FormInput 
                    type= 'email' 
                    name = 'email' 
                    label="Email"
                    placeholder = 'email' 
                    value = {email} 
                    handleChange = {this.handleChange} />
                <FormInput 
                    type='password' 
                    name = 'password' 
                    label='password'
                    placeholder = 'password' 
                    value = {password} 
                    handleChange = {this.handleChange} />
                <div className='buttons'>
                    <CustomButton
                        type = 'submit' 
                        value = "submit form" 
                        onClick = {this.handleSubmit}>Sign in
                    </CustomButton>
                    <CustomButton onClick = {signInWithGoogle} isGoogleSignin>
                        Signin With Google
                    </CustomButton>
                </div>
                </form>
            </div>
        )
    }
}


export default SignIn;