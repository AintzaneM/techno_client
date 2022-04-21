import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
// import { Posts } from '../../data';

export default function Feed({ username }) {
  console.log("usernameefeed",username)
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  // console.log("ussserr",user._id)
  // console.log(user.username)

  useEffect(() => {
    console.log("feed rendered")
    
    const fetchPosts = async() => {
 
      const res = username
      // console.log("reeees",res)
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts()
  }, [username, user._id]);

  return (
    <Container className="feed">
      <FeedWrapper className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {console.log("possts",posts)}
        {posts.map((post) => (
         
          <Post key={post._id} post={post} />
          
        ))}
      </FeedWrapper>
    </Container>
  );
}


const Container = styled.div`
flex: 5.5;
padding: 20px;
`
const FeedWrapper = styled.div`

`