import React from 'react'
import styled from 'styled-components'
import {MoreVert} from "@material-ui/icons"
import {Users} from "../../data"

const Post = (props) => {
    // console.log(props.post.date)
    const user = Users.filter((user)=> user.id===1)
    
  
    console.log(user)
  return (
      
    <Container className='post'>
        <PostWrapper>
            <div className='post-top'>
                <div className='post-top-left'>
                    <img src="/images/profile.jpg" className='post-profile-img' alt=""></img>
                    <span className='post-user-name'>{Users.filter((user) => user.id === props.post?.userId)[0].username}</span>
                    <span className='post-date'>{props.post.date}</span>
                    {/* {console.log(post.post.date)} */}

                </div>
                <div className='post-top-right'>
                    <MoreVert/>   
                </div>
            </div>
            <div className='post-center'>
                <span className='post-text'>{props.post.desc}</span>
                <img className="post-img" src="/images/download.jpeg" className='post-img' alt=""></img>
            </div>

            <div className='post-bottom'>
                <div className='post-bottom-left'>
                    
                    <img src="/images/like.png" className='post-like' alt=""></img>
                    <img src="/images/heart.png" className='post-heart' alt=""></img>
                    <span className='post-like-counter'>{props.post.like} people liked it</span>

                </div>
                <div className='post-bottom-right'>
                    <span className='post-comment-text'> {props.post.comment} comment</span>
                    
                </div>
            </div>


        </PostWrapper>
    </Container>
  )
}

export default Post

const Container = styled.div`
width: 100%;
border-radius: 10px;
-webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
margin: 30px 0;


`

const PostWrapper = styled.div`
padding: 10px;
.post-top{
    display: flex;
    align-items: center;
    justify-content: space-between;

}
.post-profile-img{
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
}

.post-top-left{
    display: flex;
    align-items: center;
}

.post-user-name{
    font-size: 15px;
    font-weight: bold;
    margin: 0 10px;
}

.post-date{
    font-size: 12px;
}
.post-center {
    margin: 20px 0;
}
.post-img {
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
}
.post-bottom{
    display:flex;
    align-items: center;
    justify-content: space-between;

}
.post-bottom-left{
    display: flex;
}
.post-like, .post-heart{
    width: 24px;
    height: 24px;
    margin-right: 5px;
    cursor: pointer;
     
}

.post-like-counter{
    font-size: 15px;
}

.post-comment-text {
    cursor: pointer;
    border-bottom: 1px dashed gray;
    font-size: 15px;

}
`