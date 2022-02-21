import React from 'react';
import styled from "styled-components";


const Register = () => {
  return (
    <Container className='register-container'>
      <RegisterWrapper className="register-wrapper">
        <div className='register-left'>
          <h3 className='register-logo'>LOGO</h3>
          <span className='register-desc'>connect with other friends and groups</span>
        </div>

        <div className='register-right'>
          <div className='register-box'>
          <input className='input-register' placeholder='username'></input>
            <input className='input-register' placeholder='email'></input>
            <input className='input-register' placeholder='password'></input>
            <input className='input-register' placeholder='repeat-password'></input>
            <button className='button-register'>SignUp</button>
            <button className='button-register'>Login in your account</button>
          </div>

        </div>
      </RegisterWrapper>


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

const RegisterWrapper = styled.div`
width: 70%;
height:70%;
display: flex;
align-items: center;
background-color: yellow;
.register-left, .register-right {
  flex: 1;
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}
.register-logo {
  font-size: 50px;
  font-weight: 800;
  color: red;
  margin-bottom: 10px;
}

.register-desc{
  font-size: 24px;
}

.register-box {
  height: 300px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.input-register {
  height: 30px;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 18px;
  padding-left: 20px;
}

.input-register: focus{
  outline: none;
}
.button-register {
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


export default Register