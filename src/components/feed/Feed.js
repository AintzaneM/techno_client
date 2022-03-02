import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
// import { Posts } from '../../data';

const Feed = ({username}) => {
  console.log(username)

  const [posts, setPosts] = useState([])
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async() => {
      const res =  username 
      ? await axios.get("/posts/profile/" + username) 
      : await axios.get("posts/timeline/" + user._id)
      setPosts(res.data)

    }
    
    fetchPosts()
  }, [username, user._id])
  return (
    <Container className="feed">
      <FeedWrapper>
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </FeedWrapper>
    </Container>
  )
}

export default Feed


const Container = styled.div`
flex: 5.5;
padding: 20px;
`
const FeedWrapper = styled.div`

`