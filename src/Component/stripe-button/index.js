import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
// import Stripe from 'stripe';

const StripeCheckoutButton  = ({price}) =>{
    const priceForStripe = price * 100;
    // const publishableKey = 'pk_test_kVB91fpac9Z7LxXQxw7TrWsz0013gCNxpu'
    
    const onToken = token => {
        console.log("if submit successfully!");
        alert("your token is expired ", token);
    };
    window.Stripe.setPublishableKey('pk_test_kVB91fpac9Z7LxXQxw7TrWsz0013gCNxpu');
    // const stripe = Stripe('pk_test_kVB91fpac9Z7LxXQxw7TrWsz0013gCNxpu');
    // var elements = stripe.elements();
    return(
        <StripeCheckout 
        label ='pay now'
        name = 'CRWN Clothing ltd.'
        billingAddress
        shippingAddress
        image ="https://svgshare.com/i/CUz.svg"
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'pay now'
        token = {onToken}
        // stripeKey = {elements}
        />
    )
}

export default StripeCheckoutButton;