import React from 'react';
import styled from 'styled-components';
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts } from '../../data';

const Feed = () => {
  return (
    <Container className="feed">
      <FeedWrapper>
        <Share/>
        
        {Posts.map((post) => (
          
          <Post key= {post.id} post={post}/>
          
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