import react from 'react';
import styled from 'styled-components';
import program from '../../data/program';

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
    text-align: center;
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
            <Exe>없음</Exe>
        </Wrapper>
        </>
    );
}

export default StudentElemtents;