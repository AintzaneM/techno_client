import React from 'react'
import styled from 'styled-components'

const Friend = (props) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    console.log(props.user.username)
    return (
        <SidebarFriendList className='sidebar-friend'>
            <img className='sidebar-friend-img' src={PF + props.user.profilePicture} alt=""></img>
            <span className='sidebar-friend-name'>{props.user.username}</span>
        </SidebarFriendList>
    )
}

export default Friend


const SidebarFriendList = styled.li`
display: flex;
align-items: center;
margin-bottom: 15px;
.sidebar-friend-img{
    width:32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
    
}
`