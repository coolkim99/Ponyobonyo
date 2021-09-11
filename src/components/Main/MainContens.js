import React from "react";
import styled from 'styled-components';
import Projects from "./Projects";
import Students from './Students';
import Calendar from "./Calendar";

const Wrapper = styled.div`
  float : right;


  `

const MainContents = () => {
    return(
        <>
            <Wrapper>
                <Projects/>
                <Calendar/>
                <Students/>
            </Wrapper>
        </>
    );
}

export default MainContents;