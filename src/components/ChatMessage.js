import React from 'react';
import '../App.css'
import icon from '../icon.png'

function ChatMessage({message, auth}) {
    const {text, uid,photoURL}  = message;
    const messageClass = uid === auth.currentUser.uid? 'sent':'received';
    
    return (
        <>
        <div className={`props.message ${messageClass}` } style={{display:'flex'}} >
            {photoURL?<img src={photoURL}  alt='pic' style={{marginTop:'2px'}}/>:<img src={icon} alt='pic' style={{marginTop:'2px'}}/>}
            <p>{text}</p>
        </div>
       
        </>
    );
}

export default ChatMessage;