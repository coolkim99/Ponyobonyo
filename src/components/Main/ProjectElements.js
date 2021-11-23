import react from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const ListDiv = styled.div`
    border : 1px solid lightgray;
    height : 87%;
`
const Wrapper = styled.div`
    border-bottom : 0.1px black solid;
    
`

const Program = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 200px;
    text-align: center;
    
`
const ClassRoom = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 50px;
    text-align: center;
`

const Time = styled.div`
    display : inline-block;
    border-right : 0.1px black solid;
    width : 200px;
    text-align: center;
`

const Instructor = styled.div`
    display : inline-block;
    width : 185px;
    text-align: center;
`

const ProjectElemtents = ({program}) => {
    return(
        <>
        <Wrapper>
            <Program>{program.name}</Program>
            <ClassRoom>{program.classroom}</ClassRoom>
            <Time>{program.time}</Time>
            <Instructor>{program.instructor}</Instructor>
        </Wrapper>
        </>
    );
}

export default ProjectElemtents;