import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons";
import {AuthContext} from "../../context/AuthContext";
import { useRef } from 'react';
import axios from 'axios';

const Share = () => {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const [file, setFile] = useState(null)
  

    const submitHandler = async(event) => {
        event.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
            
        }

        console.log("newPost,", newPost)

        console.log(newPost)
        if(file){
            console.log("file",file)
            const data= new FormData();
            console.log("dataa",data)
            // const fileName = Date.now() + file.name;
            console.log(file.name)
            // console.log("fileName",fileName)
            data.append("name", file.name);
            data.append("img", file[0])
            // data.append("name", filename);
            newPost.img = file.name;
            console.log(newPost, "new post")
       
        try {
            await axios.post("/upload", data)
            console.log(data, "dataaa")
 
         }catch(error){
             console.log(error)
            }
        } 
        try {
           await axios.post("/posts", newPost)
        //    window.location.reload()
           console.log(newPost, "newPost")

        }catch(error){}
    }

    
  return (
    <Container className='share'>
        hey its share
        <ShareWrapper className="share-wrapper">
            <div className='share-top'>
                <img className='share-profile-img' src={user.profilePicture ? PF + user.profilePicture : PF +"/noAvatar.png" } alt=""/>
                <input 
                type= "text" 
                placeholder={"Whats in your mind " + user.username + "?"} 
                className='share-input'
                ref={desc}
                >

                </input>
            </div>
            <hr className='share-hr'/>
            <form className='share-bottom' onSubmit = {submitHandler}>
                <label htmlFor = "file" className='share-options'>
                    <div className='share-option'>
                        <PermMedia htmlColor="tomato" className='share-option-icon'/>
                        <span className='share-option-text'>Photo/Video</span>
                        <input
                            style={{display:"none"}}
                            type ="file" 
                            id="file" 
                            accept=".png, .jpeg, .jpg, .mp4, .mp3" 
                            onChange={(event) => setFile(event.target.files[0])} 
                        >

                        </input>
                        <Label htmlColor="blue" className='share-option-icon'/>
                        <span className='share-option-text'>Tag</span>
                        <Room htmlColor="green" className='share-option-icon'/>
                        <span className='share-option-text'>Location</span>
                        <EmojiEmotions htmlColor="orange" className='share-option-icon'/>
                        <span className='share-option-text'>Feelings</span>
                    </div>
                </label>
                <Button className="share-button" type="submit">Share</Button>
            </form>

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