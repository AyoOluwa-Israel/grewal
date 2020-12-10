import React from 'react'
import firebase from '../config/firebase'

const Home = () => {

  const handleLogout = () => {
    firebase.auth().signOut();
  }
  return (
    <div>
      <h1>You are logged in</h1>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Home
