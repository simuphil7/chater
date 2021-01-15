import React from 'react';
import 'firebase/firestore'
import 'firebase/auth'

function SignOut(props) {
    return props.auth.currentUser && (
        <button className="sign-out" onClick={()=>props.auth.signOut()}>Sign out</button>
    );
}

export default SignOut;