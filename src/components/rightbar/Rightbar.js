import React from 'react';
import styled from 'styled-components';
import { Users } from '../../data';
import Online from '../online/Online';

const Rightbar = () => {
  return (
    <Container className='rightbar'>
      <RightbarWrapper className="rightbar-wrapper">
        <div className='rightbar-data-container'>
          <img className='rightbar-data-img' src="/images/gift.png" alt=""/>
          <span className='rightbar-data-text'><b>Doe</b> and <b>4 more friends </b> have Birthdays Projects</span>
          
        </div>
        <img className='rightbar-add-img' src="/images/ad.png" alt=""></img>
        <h4 className='rightbar-title'>Online Friends</h4>
        <ul className='rightbar-friend-list'>
          {Users.map((user) => (
            <Online key = {user.id} user ={user} />

          ))}
        </ul>


      </RightbarWrapper>
    </Container>
  )
}

export default Rightbar


const Container = styled.div`
color: black;
flex: 3.5;

`

const RightbarWrapper = styled.div`
padding: 20px 20px 0 0;


.rightbar-data-container{
display:flex;
align-items: center;

}
.rightbar-data-img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.rightbar-data-text {
  font-weight: 300;
  font-size: 15px;
}
.rightbar-add-img {
  width: 100%;
  border-radius: 10px;
  margin: 30px 0
}

.rightbar-title{
  margin-bottom: 20px;
}
.rightbar-friend-list{
  height: calc(50vh - 50px);
  margin: 0;
  padding: 0;
  list-style: none;

  overflow-y: scroll;

::-webkit-scrollbar {
    width:5px;
    
}
::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    
}
::-webkit-scrollbar-thumb {
    background-color:grey;  
}

`