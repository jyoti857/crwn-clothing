import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBQubA4IX-uI5_HhebsA3LdcBVm_sXLn5I",
        authDomain: "crown-db-3fb64.firebaseapp.com",
        databaseURL: "https://crown-db-3fb64.firebaseio.com",
        projectId: "crown-db-3fb64",
        storageBucket: "crown-db-3fb64.appspot.com",
        messagingSenderId: "191270543034",
        appId: "1:191270543034:web:b02c94eeab820c97d22c83",
        measurementId: "G-W7HRW4MYQD"
    };

export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log("snapShot --> ", snapShot);
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(err){
            console.log("if error, then display --> ", err.message);
        }
    }
    return userRef;

    // console.log("from creareUserProfileDocument ---> ", firestore.doc('users/534jm4t80'));
}

firebase.initializeApp(config);

export const auth  = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;