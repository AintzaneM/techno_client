import React from 'react'
import styled from 'styled-components'
import {Search, Chat, Notifications, Person} from "@material-ui/icons"
import { red } from '@material-ui/core/colors'

const Header = () => {
  return (
    <Nav>
      <NavMenuLeft className='NavMenuLeft'>
        <Logo>
          <a href="/" alt="" />
          <img src="/images/profile.jpg" alt="" />
        </Logo>
        <span>Techno-test</span>
      </NavMenuLeft>

      <NavMenuCenter  className='NavMenuCenter'>
        <div className='searchBar'>
          <Search className='search-img' />
          <input placeholder="search for your mentor" className='searchInput' />
        </div>
      </NavMenuCenter >

      <NavMenuRight className='NavMenuRight'>
        <div className='NavMenuRight-Links'>
          <a href="/">
            {/* <img src="/images/home-icon.svg" alt="" /> */}
            <span>HOME</span>
          </a>
          <a href="/">
            {/* <img src="/images/search-icon.svg" alt="" /> */}
            <span>MENTORS</span>
          </a>

        </div>
        <div className='NavMenuRight-Icons'>
          <div className='NavMenuRight-IconsItem'>
            <Person />
            <span className='NavMenuRight-IconsCounter'>1</span>
          </div>
          <div className='NavMenuRight-IconsItem'>
            <Chat />
            <span className='NavMenuRight-IconsCounter'>2</span>
          </div>
          <div className='NavMenuRight-IconsItem'>
            <Notifications />
            <span className='NavMenuRight-IconsCounter'>1</span>
          </div>
        </div>
      </NavMenuRight>
      <img src="/images/profile.jpg" className='Nav-ImageProfile' />

      {/* <SignOut>
                signout */}
      {/* <UserImg src={userPhoto} alt={userName} />
                <DropDown>
                    <span onClick={handleAuth}>Sign out</span>
                </DropDown> */}
      {/* </SignOut> */}
      {/* </>
        )} */}
    </Nav>
  )
}

const Nav = styled.nav`
position: sticky;
top: 0;
left: 0;
right: 0;
height: 70px;
width: 100%;
background-color: yellow;
display:flex;
justify-content: space-between;
align-items: center;
// padding: 0 36px;
// letter-spacing: 16px;
z-index: 3;
color: black;

.Nav-ImageProfile {
  width: 32px;
  height: 32px;
  border-radius:50%;
  object-fit: cover;
  margin-right: 10px;
}
`;

const NavMenuLeft = styled.div`
flex:3;
// background-color: violet;
display:flex;
justify-content: center;
align-items: center;
span {
  font-weight: bold;
 
}
`

const Logo = styled.a`
// padding: 0;
width: 80px;
// margin-top: 4px;
// margin-left: 20px;
max-height: 80px;
font-size: 24px;
display: flex;

img {
    displat:block;
    width: 100%;
}
`;

const NavMenuCenter = styled.div`
flex:5;
width: 100%;
height: 30px;
background-color: white;
display: flex;
align-items:center;
// justify-content: center;
border-radius: 30px;

input {
  border: none;
  width: 70%;

}
.searchBar {
  display:flex;
  align-items: center;
}
input: focus {
  outline: none;
}
.search-img {
  font-size: 20px; !important;
  margin-left: 10px;
  margin-right: 5px;
}
`

const NavMenuRight = styled.div`
flex:4;
display: flex;
align-items: center;
justify-content: space-around;
color: green;

// background-color: grey;

.NavMenuRight-Links {
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
  span{
    margin: 10px;;
  }
}
.NavMenuRight-Icons{
  display:flex;
  // align-items:center;
  // justify-content: center;

}
.NavMenuRight-IconsItem {
  margin-right: 15px;
  cursor: pointer;
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;

}

.NavMenuRight-IconsCounter {
  width: 15px;
  height: 15px;
  font-size: 15px;
  background-color: red;
  border-radius: 50%;
  color: white;
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  align-items: center;
  // text-align: center;
  justify-content: center;


}
`


// const NavMenu = styled.div`
// align-items: center;
// display: flex;
// flex-flow: row nowrap;
// height: 100%;
// justify-content: flex-end;
// margin: 0px;
// padding: 0px;
// position: relative;
// margin-right: auto;
// margin-left: 25px;

//   a {
//     display: flex;
//     align-items: center;
//     padding: 0 12px;

//     img {
//       height: 20px;
//       min-width: 20px;
//       width: 20px;
//       z-index: auto;
//     }

//     span {
//       color: black;
//       font-size: 13px;
//       letter-spacing: 1.42px;
//       line-height: 1.08;
//       padding: 2px 0px;
//       white-space: nowrap;
//       position: relative;

//       &:before {
//         background-color: rgb(249, 249, 249);
//         border-radius: 0px 0px 4px 4px;
//         bottom: -6px;
//         content: "";
//         height: 2px;
//         left: 0px;
//         opacity: 0;
//         position: absolute;
//         right: 0px;
//         transform-origin: left center;
//         transform: scaleX(0);
//         transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
//         visibility: hidden;
//         width: auto;
//       }
//     }

//     &:hover {
//       span:before {
//         transform: scaleX(1);
//         visibility: visible;
//         opacity: 1 !important;
//       }
//     }
  // }

// @media (max-width: 768px) {
//     display: none
// }
// `;

const Login = styled.a`
background-color: rgb(0, 0, 0 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all .2s ease 0s;

&:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
}
`
// const UserImg = styled.img`
// height: 100%;
// `;

const DropDown = styled.div`
position:absolute;
top: 48px;
right: 0px;
background-color: rgb(19, 19, 19);
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 4px;
box-shadow: rgb(0 0 0/ 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 100px;
opacity: 0;
`;

// const SignOut = styled.div`
// position:relative;
// height: 48px;
// width: 48px;
// display: flex;
// cursor: pointer;
// align-items: center;
// justify-content: center;
// color:white;
// ${UserImg} {
//     border-radius: 50%;
//     width: 100%;
//     height: 100%;
// }

// &:hover {
//     ${DropDown} {
//         opacity: 1;
//         transition-duration: 1s;

//     }
// }
// `;

export default Header