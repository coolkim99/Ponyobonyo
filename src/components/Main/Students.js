import react from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import StudenList from '../Main/StudenList';


const Wrapper = styled.div`
  width : 1300px;
    height : 400px;
    border : 0.1px gray solid;
    border-radius : 5px;
    padding : 24px;
    margin-top : 2px;
`

const A = styled.div`
    margin-bottom : 24px;

`

const Title = styled.div`
    display : inline-block;
    margin-right : 800px;
`
const AddProgram = styled.button`
    display : inline-block;
`
const DeleteProgram = styled.button`
    display : inline-block;
`
const SearchInput = styled.input`
    display : inline-block;
    width : 150px;
    height : 19px;
    float : right;
    margin-right : 10px
`
const SearchButton = styled.button`
    display : inline-block;
    float : right;
`

const Students = () => {
    return(
        <>
        <Wrapper>
            <A>
                <Title>수강생 리스트</Title>
                <AddProgram>수강생 추가</AddProgram>
                <DeleteProgram>수강생 삭제</DeleteProgram>
                <SearchButton>검색</SearchButton>
                <SearchInput/>
            </A>
            <StudenList/>
        </Wrapper>
        </>
    );
}

export default Students;