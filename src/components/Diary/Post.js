import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : 1050px;
    padding : 10px;
    background-color : #ededed;
    margin : 10px;
`
const Header = styled.div`
    display : flex;
    border-bottom : 0.1px black solid;
    padding-bottom : 10px;
`
const Title = styled.div`
    diaplay : inline-block;
    width : 85%;
    float : left;
`
const Date = styled.div`
    diaplay : inline-block;
    width : 15%;
    float : right;
`
const Contents = styled.div`
    padding : 20px 0;
`

const Post = ({ post }) => {
    return(
        <Wrapper>
            <Header>
                <Title>제목 : {post.title}</Title>
                <Date>날짜 : {post.date}</Date>
            </Header>
            <Contents>{post.contents}</Contents>
        </Wrapper>
    );
}

export default Post;