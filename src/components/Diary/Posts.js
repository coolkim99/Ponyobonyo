import React from "react";
import styled from "styled-components";
import PostContainer from "../../container/diary/PostContainer";

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
            <PostContainer/>
        </PostsBlock>
    );
}

export default Posts;