import React from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';
import './signup.scss';



class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    handleSubmit = async e =>{
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('password does not match!');
            return;
        }
        try{ 
            console.log("from sign up email ---> ", email, password, confirmPassword, displayName)
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }catch(err) {
            console.log("error in signup ---> ", err.message);
        }
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        console.log("from render method -->", email, password)
        return(
        <div className = 'sign-up'>
            <h1 className = 'title'>I don't have an account </h1>
            <span>sign up your accout with email and password</span>
        <form className = 'sign-up-form' onSubmit = {this.handleSubmit}>
            <FormInput type = 'text' 
                name = 'displayName'
                value = {displayName}
                label = 'Display name'
                required
                handleChange = {this.handleChange} />
            <FormInput 
                type= 'email' 
                name = 'email' 
                label="Email"
                value = {email} 
                handleChange = {this.handleChange} />
            <FormInput type = 'password' 
                name = 'password'
                value = {password}
                label = 'Password'
                required
                handleChange = {this.handleChange}/>
            <FormInput type = 'password' 
                name = 'confirmPassword'
                value = {confirmPassword}
                label = 'Confirm password'
                required
                handleChange = {this.handleChange}/>
                <CustomButton type = 'submit' onClick = {this.handleSubmit}> SIGNUP</CustomButton>
            </form>

            </div>
        );
    }
};

export default Signup;