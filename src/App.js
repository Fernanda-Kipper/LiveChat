import React, { useState } from 'react';
import './styles/App.css';

import googleIcon from './assets/google.svg'
import logoImg from './assets/logo.svg'
import sendImg from './assets/send.svg'

import firebase from './utils/firebase';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="AppContent">
      <header>
        {user ? (
        <>
          <img src={logoImg} alt="Logo"/>
          <SignOut/>
        </>
        ) : null}
      </header>
      <section>
        {user ? <ChatRoom /> : (
          <div className="landing">
            <img src={logoImg} alt="Logo"/>
            <h2>Live Chat, converse com estranhos!</h2>
            <SignIn />
          </div>
        )}
      </section>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}> 
      <img src={googleIcon} alt="ícone do google"/>Faça Login com Google</button>
    </>
  )

}

function SignOut(){
  const signOut = () => {
    auth.signOut()
  }

  return (
    <>
      <button className="sign-out" onClick={signOut}>Logout</button>
    </>
  )
}


function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(10);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      username: displayName
    })

    setFormValue('');
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Fale algo legal :)" />

      <button type="submit" disabled={!formValue}>
        <img src={sendImg} alt="Enviar"/>
      </button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL, username } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <div className="messageHeader">
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="foto de perfil"/>
        <h2>{username}</h2>
      </div>
      <div className="messageContent">
        <p>{text}</p>
      </div>
    </div>
  </>)
}


export default App;