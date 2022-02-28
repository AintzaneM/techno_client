import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios';
// import { Posts } from '../../data';

const Feed = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async() => {
      const res = await axios.get("posts/timeline/621ca98be5264d3f5b6554a9")
      setPosts(res.data)

    }
    
    fetchPosts()
  }, [])
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