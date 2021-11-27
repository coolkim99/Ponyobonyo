import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width : 1100px;
    float : right;
    border : 0.1px gray solid;
    border-radius : 5px;
    margin-bottom : 30px;
    padding : 24px;
`

const Program = styled.div`
    
`

const Name = styled.div`
    
`

const PersonInfo = () => {
    return(
    <>
        <Wrapper>
            <Program>프로그램 명</Program>
            <Name> 환자 이름</Name>
        </Wrapper>
    </>
    );
}

export default PersonInfo;