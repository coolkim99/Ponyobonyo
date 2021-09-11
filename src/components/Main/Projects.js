import react from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import ProjectList from './ProjectList';

const Wrapper = styled.div`
  width : 490px;
    height : 300px;
    background : lightgray;
    display : inline-block;
    padding : 24px;
    div{
        margin-bottom : 20px;
    }
`
const Spacer = styled.div`
  height : 1.5rem;
`

const Projects = () => {
    return(
        <>
        <Wrapper>
            <div>프로그램 리스트</div>
            <ProjectList/>
        </Wrapper>
        </>
    );
}

export default Projects;