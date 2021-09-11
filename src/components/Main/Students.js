import react from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import StudenList from '../Main/StudenList';

const Wrapper = styled.div`
  width : 1030px;
    height : 400px;
    background : lightgray;
    padding : 24px;
    margin-top : 2px;
    div{
        margin-bottom : 24px;
    }
`

const Students = () => {
    return(
        <>
        <Wrapper>
            <div>수강생 리스트</div>
            <StudenList/>
        </Wrapper>
        </>
    );
}

export default Students;