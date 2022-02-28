import React from 'react';
import styled from 'styled-components';
import { Users } from '../../data';
import Online from '../online/Online';
// import Sidebar from '../sidebar/Sidebar';

const Rightbar = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // console.log(props.profile)
  // console.log(user)

  const HomeRightbar = () => {
    return (
      <>
        <div className='rightbar-data-container'>
          <img className='rightbar-data-img' src="/images/gift.png" alt="" />
          <span className='rightbar-data-text'><b>Doe</b> and <b>4 more friends </b> have Birthdays Projects</span>

        </div>
        <img className='rightbar-add-img' src="/images/ad.png" alt=""></img>
        <h4 className='rightbar-title'>Online Friends</h4>
        <ul className='rightbar-friend-list'>
          {Users.map((user) => (
            <Online key={user.id} user={user} />

          ))}
        </ul>
      </>
    )

  } 

  const ProfileRightbar = () => {

    return (
      <>
     <ContainerProfileRightbar>
        <h4 className='profile-rightbar-title'>User info</h4>
        <div className='profile-rightbar-info'>
          <div className='profile-rightbar-info-item'>
            <span className='profile-rightbar-info-key'>City: </span>
            <span className='profile-rightbar-info-value'>{user.city}</span>
          </div>

          <div className='profile-rightbar-info-item'>

            <span className='profile-rightbar-info-key'>From: </span>
            <span className='profile-rightbar-info-value'>{user.from}</span>
          </div>

          <div className='profile-rightbar-info-item'>

            <span className='profile-rightbar-info-key'>Relationship: </span>
            <span className='profile-rightbar-info-value'>{user.relationship ===1 ? "Single" : user.relationship ===2 ? "Married" : "Empty"}</span>
          </div>
        </div>

        <h4 className='profile-rightbar-friends'>User friends</h4>
        
        <div className="followings-container">
        <div className='profile-rightbar-followings'>
          <div className='profile-rightbar-followings-item'>
            <img className='profile-rightbar-followings-item-img' src={`${PF}profile.jpg`} alt=""></img>
            <span className='profile-rightbar-followings-item-name'>janee doe</span>

          </div>

        </div>
        
       
        <div className='profile-rightbar-followings'>
          <div className='profile-rightbar-followings-item'>
            <img className='profile-rightbar-followings-item-img' src={`${PF}profile.jpg`} alt=""></img>
            <span className='profile-rightbar-followings-item-name'>janee doe</span>

          </div>

        </div>


        <div className='profile-rightbar-followings'>
          <div className='profile-rightbar-followings-item'>
            <img className='profile-rightbar-followings-item-img' src={`${PF}profile.jpg`} alt=""></img>
            <span className='profile-rightbar-followings-item-name'>janee doe</span>

          </div>

        </div>

        <div className='profile-rightbar-followings'>
          <div className='profile-rightbar-followings-item'>
            <img className='profile-rightbar-followings-item-img' src={`${PF}profile.jpg`} alt=""></img>
            <span className='profile-rightbar-followings-item-name'>janee doe</span>

          </div>

        </div>

        </div>

        </ContainerProfileRightbar>

      </>
    
    )
  }

  return (
    <Container className='rightbar'>
      <RightbarWrapper className="rightbar-wrapper">
        {user ? <ProfileRightbar/> :  <HomeRightbar/>  }  
        {/* <HomeRightbar/> */}
        


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

const ContainerProfileRightbar = styled.div`

//  font-size: 18px;
//   font-weight: 300;
//   color:red;
.profile-rightbar-title {
  font-size: 18px;
  font-weight: 300;
  color:red;
  margin-bottom: 10px;
}
.profile-rightbar-info{
  margin-bottom: 30px;
}

.profile-rightbar-info-item{
  margin-bottom: 10px;
}

.profile-rightbar-info-key{
  font-weight: 500;
  margin-right: 15px;
  color: #555;
}

.profile-rightbar-info-value{
  font-weight: 300;
}


.followings-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}


.profile-rightbar-followings-item{
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
}
.profile-rightbar-followings-item-img{
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
}

`
