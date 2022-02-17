import React from 'react'
import styled from 'styled-components';

const Rightbar = () => {
  return (
    <Container className='rightbar'>
      Rightbar
      <RightbarWrapper className="rightbar-wrapper">
        <div className='rightbar-data-container'>
          <img className='rightbar-data-img' src="/images/gift.png" alt=""/>
          <span className='rightbar-data-text'><b>Doe</b> and <b>4 more friends </b> have Birthdays Projects</span>
          
        </div>
        <img className='rightbar-add-img' src="/images/ad.png" alt=""></img>
        <h4 className='rightbar-title'>Online Friends</h4>
        <ul className='rightbar-friend-list'>
          <li className='rightbar-friend'>
            <div className='rightbar-firend-img-container'>
              <img className='rightbar-profile-img'src="/images/profile.jpg" alt=""></img>
              <span className='rightbar-online-point'></span>
            </div>
            <span className='rightbar-username-text'>Jane Doe</span>

          </li>

          <li className='rightbar-friend'>
            <div className='rightbar-firend-img-container'>
              <img className='rightbar-profile-img'src="/images/profile.jpg" alt=""></img>
              <span className='rightbar-online-point'></span>
            </div>
            <span className='rightbar-username-text'>Jane Doe</span>

          </li>

          <li className='rightbar-friend'>
            <div className='rightbar-firend-img-container'>
              <img className='rightbar-profile-img'src="/images/profile.jpg" alt=""></img>
              <span className='rightbar-online-point'></span>
            </div>
            <span className='rightbar-username-text'>Jane Doe</span>

          </li>

          <li className='rightbar-friend'>
            <div className='rightbar-firend-img-container'>
              <img className='rightbar-profile-img'src="/images/profile.jpg" alt=""></img>
              <span className='rightbar-online-point'></span>
            </div>
            <span className='rightbar-username-text'>Jane Doe</span>

          </li>
          <li className='rightbar-friend'>
            <div className='rightbar-firend-img-container'>
              <img className='rightbar-profile-img'src="/images/profile.jpg" alt=""></img>
              <span className='rightbar-online-point'></span>
            </div>
            <span className='rightbar-username-text'>Jane Doe</span>

          </li>
          <li className='rightbar-friend'>
            <div className='rightbar-firend-img-container'>
              <img className='rightbar-profile-img'src="/images/profile.jpg" alt=""></img>
              <span className='rightbar-online-point'></span>
            </div>
            <span className='rightbar-username-text'>Jane Doe</span>

          </li>
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
}
.rightbar-friend-list{
  margin: 0;
  padding: 0;
  list-style: none;

}
.rightbar-friend{
  display:flex;
  align-items: center;
  margin-bottom: 15px;
}
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