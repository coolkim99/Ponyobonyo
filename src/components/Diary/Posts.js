import React from "react";
import styled from "styled-components";
import Post from "./Post";

const PostsBlock = styled.div`
  width : 1100px;
  float : right;
  border : 0.1px gray solid;
  border-radius : 5px;
  padding : 24px;
`;

const Posts = () => {
    return (
        <PostsBlock>
            <Post/>
        </PostsBlock>
    );
}

export default Posts;