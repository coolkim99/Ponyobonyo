import react from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import StudentContainer from '../../container/main/StudentContainer';

const ListDiv = styled.div`
    border : 1px solid lightgray;
    height : 87%;
`
const TableHeader = styled.div`
    background-color : lightgray;
    height : 30px;
    line-height : 30px;
`
const NameTitle = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 150px;
    text-align: center;
    
`
const BirthdayTitle = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 150px;
    text-align: center;
`

const PhoneTitle = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 200px;
    text-align: center;
`
const ParentTitle = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 150px;
    text-align: center;
`

const RelationshipTitle = styled.div`
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


const StudentList = () => {
    return(
        <>
        <ListDiv>
            <TableHeader>
                <NameTitle>이름</NameTitle>
                <BirthdayTitle>생년월일</BirthdayTitle>
                <ParentTitle>보호자 이름</ParentTitle>
                <PhoneTitle>보호자 전화번호</PhoneTitle>
                <RelationshipTitle>보호자 관계</RelationshipTitle>
                <Exe>비고</Exe>
            </TableHeader>
            <StudentContainer/>
        </ListDiv>
        </>
    );
}

export default StudentList;