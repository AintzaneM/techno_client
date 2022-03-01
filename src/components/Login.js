import React, { useContext, useRef } from 'react';
import styled from "styled-components";
import { AuthContext } from '../context/AuthContext';
import { loginCall } from '../serverCalls';
import { CircularProgress } from '@material-ui/core';


const Login = () => {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext)

  const handleClick = (event) => {
    event.preventDefault()
    loginCall({email: email.current.value, password: password.current.value},dispatch );
    console.log("clicked")
  };

  console.log(user)
  return (
    <Container className='login-container'>
      <LoginWrapper className="login-wrapper">
        <div className='login-left'>
          <h3 className='login-logo'>LOGO</h3>
          <span className='login-desc'>connect with other friends and groups</span>
        </div>

        <div className='login-right'>
          <form className='login-box' onSubmit={handleClick}>
            <input className='input-login' type="email" required placeholder='email'ref={email}></input>
            <input className='input-login' type="password" placeholder='password' required  minLength="6" ref={password}></input>
            <button className='button-login' 
            type="submit" 
            disabled={isFetching} >
              {isFetching ? <CircularProgress style = {{color:"white", size:"5px"}}/> : "Log in"}
            </button>
            <span className='login-forgot'>Forgot password?</span>
            <button className='button-register'>
            {isFetching ? <CircularProgress style = {{color:"white", size:"15px"}}/> :
              "Create an account"}</button>
            
          </form>

        </div>
      </LoginWrapper>


    </Container>
  )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #f0f2f5;
display: flex;
align-items: center;
justify-content: center;
// color: red;
`

const LoginWrapper = styled.div`
width: 70%;
height:70%;
display: flex;
align-items: center;
background-color: yellow;
.login-left, .login-right {
  flex: 1;
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}
.login-logo {
  font-size: 50px;
  font-weight: 800;
  color: red;
  margin-bottom: 10px;
}

.login-desc{
  font-size: 24px;
}

.login-box {
  height: 300px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.input-login {
  height: 30px;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 18px;
  padding-left: 20px;
}

.input-login: focus{
  outline: none;
}
.button-login {
  height: 30px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  padding-left: 20px;
  background-color: blue;
  color: white;
  font-size: 20px;
  font-wight: 500;
  cursor: pointer;

}

.button-login:disabled{
  cursor: not-allowed
}

.login-forgot{
  text-align: center;
  color: blue;
}

.button-register{
  height: 30px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  padding-left: 20px;
  background-color: blue;
  color: white;
  font-size: 20px;
  font-wight: 500;
  cursor: pointer;
}
`


export default Login