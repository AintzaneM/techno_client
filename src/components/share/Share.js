import React from 'react'
import styled from 'styled-components'
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"

const Share = () => {
  return (
    <Container className='share'>
        hey its share
        <ShareWrapper className="share-wrapper">
            <div className='share-top'>
                <img className='share-profile-img' src="/images/profile.jpg" alt=""/>
                <input type= "text" placeholder="Whats in your mind?" className='share-input'></input>
            </div>
            <hr className='share-hr'/>
            <div className='share-bottom'>
                <div className='share-options'>
                    <div className='share-option'>
                        <PermMedia htmlColor="tomato" className='share-option-icon'/>
                        <span className='share-option-text'>Photo/Video</span>
                        <Label htmlColor="blue" className='share-option-icon'/>
                        <span className='share-option-text'>Tag</span>
                        <Room htmlColor="green" className='share-option-icon'/>
                        <span className='share-option-text'>Location</span>
                        <EmojiEmotions htmlColor="orange" className='share-option-icon'/>
                        <span className='share-option-text'>Feelings</span>
                    </div>
                </div>
                <Button className="share-button">Share</Button>
            </div>

        </ShareWrapper>
    </Container>
  )
}

export default Share


const Container = styled.div`
width: 100%;
height: 170px;
border-radius: 10px;
// background-color: red;
-webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);


`

const ShareWrapper = styled.div`
padding: 10px;
.share-top{
    display:flex;
    align-items: center;

}
img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    object-fit: cover;
    margin-right: 10px;

}
.share-input{
    border: none;
    width: 80%;
}
.share-input:focus{
    outline: none;
}
.share-hr {
    margin: 20px;
}
.share-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // background-color: red;
}

.share-options{
    display: flex;
    margin-left: 20px;
    

}
.share-option{
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
}

.share-option-icon {
    font-size: 18px;
    margin-right: 3px;
}

.share-option-text{
    font-size: 14px;
    font-weight: bold;
    margin-right: 15px;
    cursor: pointer;
}

`

const Button = styled.button`
border: none;
padding: 7px;
border-radius: 5px;
background-color: green;
font-weight: bold;
margin-right: 20px;
cursor: pointer;
color:white


`