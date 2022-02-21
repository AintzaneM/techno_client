import React from 'react';
import styled from "styled-components";
import Login from './Login';
import {Person} from '@material-ui/icons';
import Rightbar from './rightbar/Rightbar';
import Sidebar from './sidebar/Sidebar';
import Feed from './feed/Feed';
import Header from './Header';

const Home = (props) => {
  return (
    <>
      <Header/>
      <Container className='home-container'>
            <Sidebar/>
            <Feed/>
            <Rightbar />
    </Container>
    </>
    
  )
}

const Container = styled.div`
display: flex;
width: 100%;
// position: relative;
// min-height: calc(100vh - 250px);
// overflow-x: hidden;
// display: flex;
// top: 72px;
// padding: 0 calc(3.5vw + 5px);
// &:after {
//   background: url("/images/home-background.png") center center / cover
//     no-repeat fixed;
//   content: "";
//   position: absolute;
//   inset: 0px;
//   opacity: 1;
//   z-index: -1;
// }
`;

const Link = styled.a`
// opacity: 1;
height: 100%;
width: 5vw;
// z-index: 0;
background-color: red;
`


export default Home