import React, { useContext } from 'react';
import styled from 'styled-components';
import {MoreVert} from "@material-ui/icons";
// import {Users} from "../../data";
import { useEffect, useState } from 'react';
import axios from "axios";
import {format} from "timeago.js";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Post = ({post}) => {
    //  console.log("pooost",post)
    // const user = Users.filter((user)=> user.id===1)
    // console.log(props.post.like)
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const {user: currentUser} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes])
    
    useEffect(() => {
        const fetchUser = async() => {
          const res = await axios.get(`/users?userId=${post.userId}`)
          setUser(res.data)
    
        }
        
        fetchUser()
      }, [post.userId])

    const likeHandler = () => {
        try {
            axios.put("/posts/"+post._id+"/like", {userId: currentUser._id})

        }catch(error) {

        }
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    
  
    // console.log(user)
  return (
      
    <Container className='post'>
        <PostWrapper>
            <div className='post-top'>
                <div className='post-top-left'>
                    <Link to={`/profile/${user.username}`}>
                        <img 
                        src={ user.profilePicture ? PF+ user.profilePicture : PF + "noAvatar.png"} 
                        className='post-profile-img' 
                        alt=""></img>
                    </Link>
                    <span className='post-user-name'>{user.username}</span>
                    <span className='post-date'>{format(post.createdAt)}</span>
                    {/* {console.log(post.post.date)} */}
                </div>
                <div className='post-top-right'>
                    <MoreVert/>   
                </div>
            </div>
            <div className='post-center'>
                <span className='post-text'>{post?.desc}</span>
                <img className="post-img" src={post.imageUrl}  alt=""></img>
                {/* {console.log(post.file)} */}
            {/* {console.log(props.post.photo)} */}
            </div>

            <div className='post-bottom'>
                <div className='post-bottom-left'>
                    
                    <img src={"https://res.cloudinary.com/do1reqqri/image/upload/v1646825996/techno-gallery/ndbkf4ig75g50txrxjnx.png"} className='post-like' onClick= {likeHandler} alt=""></img>
                    <img src={"https://res.cloudinary.com/do1reqqri/image/upload/v1646825996/techno-gallery/t8bwlgn4opn867kgybiz.png"} className='post-heart' onClick= {likeHandler} alt=""></img>
                    <span className='post-like-counter'>{like} people liked it</span>

                </div>
                <div className='post-bottom-right'>
                    <span className='post-comment-text'> {post.comment} comment</span>
                    
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