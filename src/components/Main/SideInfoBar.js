import react from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  float : left;
  text-align : center;
`

const Profile = styled.div`
  border : 1px solid black;
  border-radius : 50%;
  width : 100px;
  height : 100px;
  margin: 0 auto;
  margin-bottom : 15px;
`

const Username = styled.span`
    font-size : 1rem;
`
const SideInfoBar = () => {
    return (
    <>
        <Wrapper>
            <Profile></Profile>
            <Username>담당자 이름</Username>
        </Wrapper>
    </>
    );
};

export default SideInfoBar;