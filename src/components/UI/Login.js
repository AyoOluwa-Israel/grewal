import React from 'react'


const Login = ({ handleLogin, handleSignUp, email, password, handlePasswordChange, handleEmailChange }) => {

  
  return (
    <div style={{ textAlign: 'center' }}>
        <div>
          <div>Email</div>
          <input id="email" value={email} placeholder="Enter Email.." type="text" onChange={handleEmailChange}/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" value={password} placeholder="Enter Password.." onChange={handlePasswordChange} type="text"/>
        </div>
        <button style={{margin: '10px'}} onClick={handleLogin}>Login</button>
        <button style={{margin: '10px'}} onClick={handleSignUp}>Sign Up</button>
      </div>
  )
}

export default Login
