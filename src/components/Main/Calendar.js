import react from 'react';
import styled from 'styled-components';

const Cal = styled.div`
  width : 490px;
  height : 300px;
  background : lightgray;
  float :right;
  display : inline-block;
  padding : 24px;
`
const Spacer = styled.div`
  height : 1.5rem;
`

const Calendar = () => {
    return(
        <>
        <Cal>
            <div>캘린더</div>
        </Cal>
        </>
    );
}

export default Calendar;