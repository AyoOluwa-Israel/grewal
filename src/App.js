import React, { useState, useEffect } from 'react'
import Login from './components/UI/Login'
import firebase from './components/config/firebase'
import Home from './components/UI/Home'

const App = () => {

  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  useEffect(() => {
    authListener();
    
  })

  const handleLogin = () => {
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((u) => {
      console.log("succesfull login");
    })
    .catch(err => {
      console.log("Error" +err.toString());
    })
  }

  const handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((u) => {
      console.log("succesfull SignedUp");
    })
    .catch(err => {
      console.log("Error" +err.toString());
    })
  }

  const handleLogout = () => {
    
  }

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        setUser({user});
      }else{
        setUser(user)
      }
    })
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }



  return (
    <div>
      {
        user ? (
          <Home handleLogout={handleLogout} />
        ) : (
          <Login handleLogin={handleLogin} 
          handleSignUp={handleSignUp}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          />
        )
      }
      
    </div>
  )
}

export default App
