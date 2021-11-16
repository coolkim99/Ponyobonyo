import react from 'react';
import styled from 'styled-components';

const ListDiv = styled.div`
    border : 1px solid lightgray;
    height : 87%;
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
    width : 600px;
    text-align: center;
`

const StudentElemtents = ({name, birthday, phone, parentName, relationship}) => {
    <ListDiv>
        <Name>{name}</Name>
        <Birthday>{birthday}</Birthday>
        <Phone>{phone}</Phone>
        <Parent>{parentName}</Parent>
        <Phone>{phone}</Phone>
        <Relationship>{relationship}</Relationship>
        <Exe>
            
        </Exe>
    </ListDiv>
}

export default StudentElemtents;