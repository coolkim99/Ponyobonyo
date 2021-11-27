import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : 1100px;
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

`

const Post = ({ title }) => {
    return(
        <Wrapper>
            <Header>
                <Title>제목 : {title}</Title>
                <Date>날짜 : 00.00.00</Date>
            </Header>
            <Contents></Contents>
        </Wrapper>
    );
}

export default Post;