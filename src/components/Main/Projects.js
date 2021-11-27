import react from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import ProjectList from './ProjectList';

const Wrapper = styled.div`
  width : 550px;
    height : 300px;
    border : 0.1px gray solid;
    border-radius : 5px;
    display : inline-block;
    padding : 24px;
`

const A = styled.div`
    margin-bottom : 24px;

`
const Title = styled.div`
display : inline-block;
margin-right : 100px
`
const AddProgram = styled.button`
    display : inline-block;
`
const DeleteProgram = styled.button`
    display : inline-block;
`
const SearchInput = styled.input`
    display : inline-block;
    width : 100px;
    height : 19px;
    float : right;
    margin-right : 10px
`
const SearchButton = styled.button`
    display : inline-block;
    float : right;
`


const Projects = () => {
    return(
        <>
        <Wrapper>
            <A>
                <Title>프로그램 리스트</Title>
                <AddProgram>프로그램 추가</AddProgram>
                <DeleteProgram>프로그램 삭제</DeleteProgram>
                <SearchButton>검색</SearchButton>
                <SearchInput/>
            </A>
            <ProjectList/>
        </Wrapper>
        </>
    );
}

export default Projects;