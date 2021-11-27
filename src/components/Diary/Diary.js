import React from 'react';
import Responsive from '../common/Responsive';
import styled from 'styled-components';
import SideInfoBar from '../Main/SideInfoBar';
import PersonInfo from './PersonInfo';
import Posts from './Posts';

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
            <Posts/>
        </Wrapper>
    </>
    );
}

export default Main;