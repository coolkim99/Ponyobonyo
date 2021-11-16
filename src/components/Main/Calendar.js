import react from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/interaction';
import './calender.scss';

const Cal = styled.div`
  width : 609px;
  height : 300px;
  float :right;
  display : inline-block;
  padding : 24px;
  border : 0.1px gray solid;
  border-radius : 5px;
`
const Spacer = styled.div`
  height : 1.5rem;
`

const Calendar = () => {
    return(
        <>
        <Cal>
        <FullCalendar
            plugins={[ dayGridPlugin, interaction ]}
            initialView = 'dayGridMonth'
            dayMaxEvents = {true}
            moreLinkClick = "popover"
            eventDisplay = 'block'
            eventBackgroundColor = "#1864ab"
            height = "300px"
            />
        </Cal>
        </>
    );
}

export default Calendar;