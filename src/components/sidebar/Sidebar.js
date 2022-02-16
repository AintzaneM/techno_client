import React from 'react'
import styled from 'styled-components'
import {RssFeed, ChatBubble, Group} from "@material-ui/icons"

const Sidebar = () => {
  return (
    <Container className="sidebar">
        <SidebarWrapper>
            <ul className="sidebar-list">
                <li className='="sidebar-list-item'>
                    <RssFeed className='sidebar-icon'/>
                    <span className='sidebar-list-item-text'>Feed</span>

                </li>
                <li className='="sidebar-list-item'>
                    <ChatBubble className='sidebar-icon'/>
                    <span className='sidebar-list-item-text'>Chat</span>

                </li>
                <li className='="sidebar-list-item'>
                    <Group className='sidebar-icon'/>
                    <span className='sidebar-list-item-text'>Group</span>

                </li>
                <li className='="sidebar-list-item'>
                    <RssFeed className='sidebar-icon'/>
                    <span className='sidebar-list-item-text'>Try</span>

                </li>
                <li className='="sidebar-list-item'>
                    <RssFeed className='sidebar-icon'/>
                    <span className='sidebar-list-item-text'>Try</span>

                </li>
                <li className='="sidebar-list-item'>
                    <RssFeed className='sidebar-icon'/>
                    <span className='sidebar-list-item-text'>Try</span>

                </li>
                <li className='="sidebar-list-item'>
                    <RssFeed className='sidebar-icon'/>
                    <span className='sidebar-list-item-text'>Try</span>

                </li>
            </ul>

            <Button >
                Show More
            </Button>
            <hr/>

             <ul className='sidebar-friend-list'>
                 <li className='sidebar-friend'>
                     <img className='sidebar-friend-img' src='/images/profile.jpg' alt=""></img>
                     <span className='sidebar-friend-name'>Jane Doe</span>
                 </li>
                 <li className='sidebar-friend'>
                     <img className='sidebar-friend-img' src='/images/profile.jpg' alt=""></img>
                     <span className='sidebar-friend-name'>Mary Doe</span>
                 </li>
                 <li className='sidebar-friend'>
                     <img className='sidebar-friend-img' src='/images/profile.jpg' alt=""></img>
                     <span className='sidebar-friend-name'>Mary Doe</span>
                 </li>
                 <li className='sidebar-friend'>
                     <img className='sidebar-friend-img' src='/images/profile.jpg' alt=""></img>
                     <span className='sidebar-friend-name'>Mary Doe</span>
                 </li>
                 <li className='sidebar-friend'>
                     <img className='sidebar-friend-img' src='/images/profile.jpg' alt=""></img>
                     <span className='sidebar-friend-name'>Mary Doe</span>
                 </li>
                 <li className='sidebar-friend'>
                     <img className='sidebar-friend-img' src='/images/profile.jpg'alt=""></img>
                     <span className='sidebar-friend-name'>Mary Doe</span>
                 </li>
                 <li className='sidebar-friend'>
                     <img className='sidebar-friend-img' src='/images/profile.jpg' alt=""></img>
                     <span className='sidebar-friend-name'>Mary Doe</span>
                 </li>
             </ul>

        </SidebarWrapper>
        
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
flex: 3;
height: calc(100vh - 50px);
background-color: blue;
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

const SidebarWrapper = styled.div`
padding: 20px;

.sidebar-list{
    padding: 0;
    margin:0;
    list-style: none;

}

li{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
hr{
    margin: 20px 0;
}

.sidebar-icon{
    margin-right:15px;
}

.sidebar-friend-list{
    margin:0;
    padding:0;
    list-style: none;
}
.sidebar-friend{
    display: flex;
    align-items: center;
    margin-bottom: 15px;

}
.sidebar-friend-img{
    width:32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
    
}

`

const Button = styled.button`
width: 150px;
border: none;
padding: 10px;
border-radius: 5px;
font-weight: bold;
`