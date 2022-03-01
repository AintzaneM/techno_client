import axios from 'axios';
import {useRef} from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom"


const Register = () => {
  const username = useRef()
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();


  const handleClick = async (event) => {
    event.preventDefault()
    if(passwordAgain.current.value !== password.current.value){
      console.log(passwordAgain.current.value)
      console.log(password.current.value)
      // return "Passwords don't match"
      password.current.setCustomValidity("Paswords don't match")
    }else {
      const user = {
        username : username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try {

      await axios.post("/auth/register", user);
      navigate("/login")


      }catch(error){
        console.log(error)
      }
    }
    // loginCall({email: email.current.value, password: password.current.value},dispatch );
    console.log("clicked")
  };


  return (
    <Container className='register-container'>
      <RegisterWrapper className="register-wrapper">
        <div className='register-left'>
          <h3 className='register-logo'>LOGO</h3>
          <span className='register-desc'>connect with other friends and groups</span>
        </div>

        <div className='register-right'>
          <form className='register-box' onSubmit={handleClick}>
            <input 
              className='input-register' 
              ref={username}  
              required 
              placeholder='username'
            >
            </input>
            <input 
              className='input-register' 
              ref={email} 
              required 
              type= "email" 
              placeholder='email'>
            </input>
            <input 
              className='input-register' 
              ref={password} 
              required 
              type= "password" 
              placeholder='password'
              minLength="6">
              
            </input>
            <input 
              className='input-register' 
              ref={passwordAgain} 
              required 
              type= "password" 
              placeholder='repeat-password'
              minLength="6">
            </input>
            <button className='button-register' type="submit">SignUp</button>
            <button className='button-register'>Login in your account</button>
          </form>

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