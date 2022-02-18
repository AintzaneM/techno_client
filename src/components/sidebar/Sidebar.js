import React from 'react';
import styled from 'styled-components';
import {RssFeed, ChatBubble, Group} from "@material-ui/icons";
import Friend from '../friend/Friend';
import { Users } from '../../data';

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
                    <span className='sidebar-list-item-text'>Project development</span>

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
                {Users.map((user) => (
                    <Friend key= {user.id} user={user}/>
                ))}
                 
           
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
position:sticky;
top: 60px;


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

`

const Button = styled.button`
width: 150px;
border: none;
padding: 10px;
border-radius: 5px;
font-weight: bold;
`