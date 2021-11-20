import react from 'react';
import styled from 'styled-components';
import program from '../../data/program';
import Button from '../common/Button';

const ListDiv = styled.div`
    border : 1px solid lightgray;
    height : 87%;
`
const Wrapper = styled.div`
    border-bottom : 0.1px black solid;
    
`

const Name = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 150px;
    text-align: center;
    
`
const Birthday = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 150px;
    text-align: center;
`
const Parent = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 150px;
    text-align: center;
`

const Phone = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 200px;
    text-align: center;
`

const Relationship = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 150px;
    text-align: center;
`

const Exe = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 450px;
    text-align: right;
`

const Recode = styled(Button)`
    background : white;
    color : black;
    border : 0.1px gray solid;
    padding : 0.5px;
    font-size : 0.9em;
    font-weight: normal;
    border-radius: 2px;
`

const Write = styled(Button)`
    background : white;
    color : black;
    border : 0.1px gray solid;
    padding : 0.5px;
    font-size : 0.9em;
    font-weight: normal;
    border-radius: 2px;
`

const StudentElemtents = ({student}) => {
    return(
        <>
        <Wrapper>
            <Name>{student.name}</Name>
            <Birthday>{student.birthday}</Birthday>
            <Parent>{student.parentName}</Parent>
            <Phone>{student.phone}</Phone>
            <Relationship>{student.relationship}</Relationship>
            <Exe>
                <Recode to='/homerecord'>가정기록 조회</Recode>
                <Write>치료일지 작성</Write>
            </Exe>
        </Wrapper>
        </>
    );
}

export default StudentElemtents;