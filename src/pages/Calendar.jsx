import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import '../styles/calendar.css'


const events = [
  {
    title : "일~?",
    start : "2024-05-30",
    type: "work"
  },
  {
    title : "일12~23?",
    start : "2024-05-31",
    type: "work"
  },
  {
    title : "여행",
    start : "2024-05-28",
    type: "travel",
  },
  {
    title : "work2.",
    start : "2024-05-28",
    type: "work",
  },

  {
    title : "일과여행의향연..",
    start : "2024-05-28",
    type: "work",
  },
  {
    title : "여행",
    start : "2024-05-25",
    type: "travel",
  }
]; 




export default function Calendar() {
  const [selectedWorkDateEvents, setSelectedWorkDateEvents] = useState([]);
  const [selectedTravelDateEvents, setSelectedTravelDateEvents] = useState([]);

  const dateClick = (info) => {
    //날짜 클릭 시, 아래 페이지에 일정 나오는 함수 
    const date = info.dateStr;
    const dailyWorkPlan = events.filter(event => (event.start === date || event.end === date) && event.type === "work");
    const dailyTravelPlan = events.filter(event => (event.start === date || event.end === date) && event.type === "travel");
    setSelectedWorkDateEvents(dailyWorkPlan);
    setSelectedTravelDateEvents(dailyTravelPlan);

  }


  const renderDayCellContent = (info) => {
    let number = document.createElement("a");
    number.classList.add("fc-daygrid-day-number");
    number.innerHTML = info.dayNumberText.replace("일", "");
    if (info.view.type === "dayGridMonth") {
      return { html: number.outerHTML };
    }
    return {
      domNodes: []
    };
  };

   

  const eventContent = (info) => {
    // 이벤트 유형(work,travel)에 따른 이벤트 색상 변화 
    let title = info.event.title;
    if(info.event.title.length > 4){
      title = info.event.title.substring(0, 4) + "..";
    }
    if (info.event._def.extendedProps.type === "travel") {
      return { 
        html: `<div class="fc-content fc-event-work" style = "background-color:#B2DEFC;border: 1px solid #B2DEFC;color:#000 ">${title}</div>` 
      };
    } else if (info.event._def.extendedProps.type === "work") {
      return { 
        html: `<div class="fc-content fc-event-travel style = "background-color:#FF9559;border: 1px solid #FF9559">${title}</div>` 
      };
    }
  };
  
  

  return (
    <div className = "calendar-page-wrapper">
      <FullCalendar 
          plugins={[ interactionPlugin,dayGridPlugin ]}
          defaultView="dayGridMonth" 
          selectable = "true"
          height="auto"
          locale="ko"
          dayCellContent={renderDayCellContent}
          events = {events}
          eventContent={eventContent}
          dateClick={dateClick}
        />


      <div className = "plan-wrapper">
        <div>Working Planning</div>
        {selectedWorkDateEvents.length > 0 ? (
          selectedWorkDateEvents.map((event, index) => (
            <button key={index} className='plan-box-btn'>
              <div className='event-title'>{event.title}</div>
              {/* <div className='event-dates'>{event.start} - {event.end ? event.end : event.start}</div> */}
            </button>
          ))
        ) : (
          <div></div>
        )}
        <button className ="plan-box-btn">
          <div className ="plan-plus-wrapper">+</div>
        </button>
      </div>


      <div className = "plan-wrapper">
        <div>Travel Planning</div>
        {selectedTravelDateEvents.length > 0 ? (
          selectedTravelDateEvents.map((event, index) => (
            <div key={index} className='plan-box-btn' style={{border:"2px solid #B2DEFC"}}>
              <div className='event-title'>{event.title}</div>
            </div>
          ))
        ) : (
          <div></div>
        )}
        <button className ="plan-box-btn" style={{border:"2px solid #B2DEFC"}}>
          <div className ="plan-plus-wrapper">+</div>
        </button>
      </div>






    </div>
  )
}
