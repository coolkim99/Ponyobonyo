import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const Wrapper = styled.div`
    width : 1100px;
    float : right;
    border : 0.1px gray solid;
    border-radius : 5px;
    margin-bottom : 30px;
    padding : 24px;
    display : flex;
`

const Info = styled.div`
    display: flex;
    width : 1000px;
`

const ProgramWrapper = styled.div`
    height : 20px;
    width : 100px;
    border-right : 0.1px gray solid;
    margin-right : 30px;
`

const Program = styled.div`
`

const Name = styled.div`
    margin : 0 30px;
    display : inline-block;
`
const Birthday = styled.div`
    margin : 0 30px;
`
const Parent = styled.div`
    margin : 0 30px;
`

const Phone = styled.div`
    margin : 0 30px;
`
const Relationship = styled.div`
    margin : 0 30px;
`

const Recode = styled(Button)`
    background : white;
    color : black;
    border : 0.1px gray solid;
    padding : 0.5px;
    font-size : 0.9em;
    font-weight: normal;
    border-radius: 2px;
    margin-right : 4px;
    display : inline-block;

`

const PersonInfo = () => {
    return(
    <>
        <Wrapper>
            <Info>
                <ProgramWrapper>
                    <Program>프로그램 명</Program>
                </ProgramWrapper>
                <Name>환자 이름</Name>
                <Birthday>생년월일</Birthday>
                <Parent>보호자 성함</Parent>
                <Relationship>보호자 관계</Relationship>
                <Phone>000-0000-0000</Phone>
            </Info>
            <Recode>가정일지 조회</Recode>
        </Wrapper>
    </>
    );
}

export default PersonInfo;