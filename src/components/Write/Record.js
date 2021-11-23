import React from 'react';
import Responsive from '../common/Responsive';
import styled from 'styled-components';
import SideInfoBar from '../Main/SideInfoBar';
import Editor from './Editor';
import PersonInfo from './PersonInfo';

const Wrapper = styled(Responsive)`

`
const Spacer = styled.div`
  height : 1.5rem;
`

const Main = () => {
    return(
    <>
    <Spacer/>
        <Wrapper>
            <SideInfoBar/>
            <PersonInfo/>
            <Editor/>
        </Wrapper>
    </>
    );
}

export default Main;