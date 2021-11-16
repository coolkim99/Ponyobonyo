import react from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const ListDiv = styled.div`
    border : 1px solid lightgray;
    height : 87%;
`

const TableHeader = styled.div`
    background-color : lightgray;
    height : 30px;
    line-height : 30px;
`
const ProgramTitle = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 200px;
    text-align: center;
    
`
const ClassRoomTitle = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 50px;
    text-align: center;
`

const TimeTitle = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 200px;
    text-align: center;
`

const InstructorTitle = styled.div`
    display : inline-block;
    width : 185px;
    text-align: center;
`

const Projects = () => {
    return(
        <>
        <ListDiv>
            <TableHeader>
                <ProgramTitle>프로그램 이름</ProgramTitle>
                <ClassRoomTitle>분반</ClassRoomTitle>
                <TimeTitle>시간</TimeTitle>
                <InstructorTitle>강사</InstructorTitle>
            </TableHeader>
        </ListDiv>
        </>
    );
}

export default Projects;