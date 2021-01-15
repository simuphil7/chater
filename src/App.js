import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import SignOut from './components/SignOut'

import {useAuthState} from 'react-firebase-hooks/auth';

import ChatRoom from './components/ChatRoom'
import SignIn from './components/SignIn'

firebase.initializeApp({
  apiKey: "AIzaSyAISOx3JBQCIOg9YYOxXnjdehrGrCcOc4M",
  authDomain: "alphaproject-f85ad.firebaseapp.com",
  databaseURL: "https://alphaproject-f85ad.firebaseio.com",
  projectId: "alphaproject-f85ad",
  storageBucket: "alphaproject-f85ad.appspot.com",
  messagingSenderId: "804965232298",
  appId: "1:804965232298:web:efe8e0a83f0e996a2caad3"


})

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
     <p>iChat</p>
     <SignOut auth={auth}/>
      </header>
      <section>
        {user?<ChatRoom firestore={firestore} auth={auth}/>:<SignIn auth={auth}/>}
      </section>
  {!user?<footer><p> created by simon philip</p></footer>:null}
    </div>
  );
}

export default App;
