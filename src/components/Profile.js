import React from 'react'
import styled from 'styled-components'
import Sidebar from './sidebar/Sidebar'
import Header from "./Header"
import Feed from './feed/Feed'
import Rightbar from './rightbar/Rightbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({})
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async() => {
      const res = await axios.get(`/users?username=${username}`)
      setUser(res.data)

    }
    
    fetchUser()
  }, [username])

  return (
    <>
      <Header />
      <Container className='profile-container'>
        <Sidebar />
        <div className='profile-right-container'>
          <div className='profile-right-top-container'>
            <div className='profile-cover-container'>
              <img className="profile-cover-img" src={user.coverPicture || PF + "noCover.png"} alt=""></img>
              <img className="profile-user-img" src={user.profilePicture || PF + "noAvatar.png"} alt=""></img>
            </div>
            <div className='profile-info'>
              <h4 className='profile-info-name'>{user.username}</h4>
              
              <span className='profile-info-desc'>{user.description}</span>

            </div>
          </div>
         
          <div className='profile-right-bottom'>
            <Feed username= {username} />
            <Rightbar user={user}/>
            {console.log(user)}
          </div>

        </div>

      </Container>
    </>

  )
}

export default Profile

const Container = styled.div`
display: flex;

.profile-right-container{
  flex: 9;

}

.profile-cover-container{
  height: 320px;
  position: relative;
  background: grey;

}

.profile-cover-img{
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.profile-user-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 150px;
  border: 3px solid white;

}
.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
.profile-info-name{
  font-size: 24px;
}
.profile-info-desc{
  font-weight: 300;
}
.profile-right-bottom{
  display: flex;
}

`

