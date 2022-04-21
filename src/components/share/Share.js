import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {PermMedia, Label, Room, EmojiEmotions, Cancel} from "@material-ui/icons";
import {AuthContext} from "../../context/AuthContext";
import { useRef } from 'react';
import axios from 'axios';
import Dropzone from "react-dropzone"

const Share = () => {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const [file, setFile] = useState(null)
    


    const submitHandler = async(event) => {
        // console.log("event", event.target.file[0])
        event.preventDefault()

        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }

        // console.log("fileeeee",file)
        // console.log(newPost)

         if(file){
            // console.log("file",file)
            const data= new FormData();
            // console.log("dataaa", data)
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            data.append("upload_preset", "ml_default");

            // console.log(newPost);


        try {
            const results = await axios.post("https://api.cloudinary.com/v1_1/do1reqqri/upload", data)
            // console.log(data, "dataaa")
            // console.log(results, "result")
            const url = results.data.secure_url
            // console.log(url)
            newPost.imageUrl = url;

            // console.log(response)

         }catch(error){
            //  console.log(error)
            }
        }
        console.log(newPost, "new post")

        try {
           await axios.post( "/posts/", newPost)
        //    window.location.reload()
           console.log("newPost",newPost)

        }catch(error){}

    }

  return (
    <Container className='share'>
        hey its share
        <ShareWrapper className="share-wrapper">
              <div className='share-top'>
                  <img className='share-profile-img'
                      src={user.profilePicture ? PF + user.profilePicture : PF + "/noAvatar.png"}
                      alt=""
                  />
                  <input
                      type="text"
                      placeholder={"Whats in your mind " + user.username + "?"}
                      className='share-input'
                      ref={desc}
                  />
                </div>
            <hr className='share-hr'/>
            {file && (
                  <div className="shareImgContainer">
                      <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                      <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
                  </div>
              )}

            <form className='share-bottom' onSubmit={submitHandler} >
            <div className='share-option'>
                <label htmlFor = "file" className='share-options'>

                        <PermMedia htmlColor="tomato" className='share-option-icon'/>
                        <span className='share-option-text'>Photo/Video</span>
                        <input
                            style={{display:"none"}}
                            type ="file"
                            id="file"
                            // name="file"
                            accept=".png, .jpeg, .jpg, .mp4, .mp3"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                </label>
                        <Label htmlColor="blue" className='share-option-icon'/>
                        <span className='share-option-text'>Tag</span>
                        <Room htmlColor="green" className='share-option-icon'/>
                        <span className='share-option-text'>Location</span>
                        <EmojiEmotions htmlColor="orange" className='share-option-icon'/>
                        <span className='share-option-text'>Feelings</span>

            </div>

                <button className="share-button" type="submit" >Share</button>

            </form>



                     {/* {displayFile ? (
                        <img className="preview" alt="preview" src={displayFile} />
                    ) : null}
                     <hr />

                    {loading > 0 ? (
                        <div style={{ width: `${loading}%` }} className="loading">
                            {loading}%
                        </div>
                    ) : null} 
                      <hr />  */}
       

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

.share-button{
    border: none;
padding: 7px;
border-radius: 5px;
background-color: green;
font-weight: bold;
margin-right: 20px;
cursor: pointer;
color:white
}

`

// const Button = styled.button`
// border: none;
// padding: 7px;
// border-radius: 5px;
// background-color: green;
// font-weight: bold;
// margin-right: 20px;
// cursor: pointer;
// color:white


// `