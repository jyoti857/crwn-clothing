import React from 'react';
import './signin.scss';
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import { signInWithGoogle, auth } from '../../firebase/firebase-utils';


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
        const {value, name} = e.target;
        this.setState({[name]: value});
    }
    handleSubmit = async e =>{
        e.preventDefault();
        const {email, password}  = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ""});
        }catch(err){
            console.log("error from sign in ", err);
        }
    }
    render(){
        const {email, password} = this.state;
        console.log('render signin email -->', email, password)
        return(
            <div className='sign-in'>
                <h1>I have an account</h1>
                <span>Sign in with email and password </span>
                <form onSubmit = {this.handleSubmit}>
                <FormInput 
                    type= 'email' 
                    name = 'email' 
                    label="Email"
                    value = {email} 
                    handleChange = {this.handleChange} />
                <FormInput 
                    type='password' 
                    name = 'password' 
                    label='password'
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