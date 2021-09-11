import React from 'react';
import Responsive from '../common/Responsive';
import styled from 'styled-components';
import SideInfoBar from './SideInfoBar';
import MainContents from './MainContens';

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
            <MainContents/>
        </Wrapper>
    </>
    );
}

export default Main;