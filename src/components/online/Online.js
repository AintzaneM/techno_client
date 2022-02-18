import React from 'react';
import styled from 'styled-components';



const Online = (props) => {
  // console.log(props.user.username)

  return (
    <RightbarList className='rightbar-friend'>
      <div className='rightbar-firend-img-container'>
        <img className='rightbar-profile-img' src="/images/profile.jpg" alt=""></img>
        <span className='rightbar-online-point'></span>
      </div>
      <span className='rightbar-username-text'>{props.user.username}</span>

    </RightbarList>
  )
}

export default Online

const RightbarList = styled.div`

  display:flex;
  align-items: center;
  margin-bottom: 15px;

.rightbar-firend-img-container{
  margin-right: 10px; 
  position: relative;

}
.rightbar-profile-img{
  width: 40px;
  height: 40px;
  border-radius: 50px;
  object-fit: cover;
}

.rightbar-online-point{
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: green;
  position: absolute;
  top: -2px;
  right: 0;
  border: 2px solid white;

}
.rightbar-username-text{
  font-weight: bold;

}
`

