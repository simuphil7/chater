import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

function SignIn(props) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        props.auth.signInWithPopup(provider);
    }
    return (
        <div className="btn Coral"> <button className="sign-in" onClick={signInWithGoogle}  >Sign in with Google<span className="Coralwave1"></span><span className="Coralwave2"></span><span className="Coralwave3"></span></button></div>
    );
}

export default SignIn;