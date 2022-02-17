import React from 'react'
import styled from 'styled-components'
import Share from '../share/Share'
import Post from '../post/Post'

const Feed = () => {
  return (
    <Container className="feed">
      <FeedWrapper>
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
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