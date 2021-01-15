import React from 'react';
import {useState, useRef} from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage'
function ChatRoom({firestore, auth}) {
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField:'id'});
   
  const [formValue, setFormValue] = useState('')


  const dummy = useRef()
  const sendMessage = async (e) => {
    e.preventDefault();
    const {uid, photoURL, displayName} = auth.currentUser;
    await messagesRef.add({
        text:formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        displayName,
    });
    setFormValue('');
    dummy.current.scrollIntoView({behavior:'smooth'});
  }

    return (
       <>
       <main id="main">
           {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} auth={auth} />)}
       <div ref={dummy}></div>
       </main>
       <form onSubmit={sendMessage}>
           <input value={formValue} placeholder="Hit Enter to Send" onChange={e => setFormValue(e.target.value)} />
           <button className="send" type="submit">Send</button>
       </form>
       </>
    );
}

export default ChatRoom;