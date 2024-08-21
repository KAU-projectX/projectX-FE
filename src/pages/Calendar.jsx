import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../styles/calendar.css';



export default function Calendar() {
  //캘린더 일정 담는 events 
  const [events, setEvents] = useState([
    {
      title: "경주여행", start: "2024-08-17", type: "work",
    },
    {
      title: "업무마감일", start: "2024-08-01", type: "work",
    },    {
      title: "여행가쟈 ", start: "2024-08-30", type: "travel",
    },
  ])
  const [selectedWorkDateEvents, setSelectedWorkDateEvents] = useState([]);
  const [selectedTravelDateEvents, setSelectedTravelDateEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null); // 날짜 상태 추가
  const [isAddingWork, setIsAddingWork] = useState(false); //Work일정 추가 확인 
  const [isAddingTravel, setIsAddingTravel] = useState(false); //Travel일정 추가 확인 
  const [newWorkEventTitle, setNewWorkEventTitle] = useState(''); 
  const [newTravelEventTitle, setNewTravelEventTitle] = useState(''); 

  // 일정 추가 시, 업로드 
  const workInputRef = useRef(null);
  const travelInputRef = useRef(null);

  // 날짜 클릭 이벤트 
  const dateClick = (info) => {
    const date = info.dateStr;
    console.log('test하고 지우기 | 날짜 클릭, 오늘 날짜 : ', date);



    // Remove the selected class from all date cells
    const calendarEl = document.querySelector('.fc');
    calendarEl.querySelectorAll('.fc-daygrid-day').forEach(dayCell => {
      dayCell.classList.remove('selected-date');
    });

    // Add the selected class to the clicked date cell
    info.dayEl.classList.add('selected-date');

    setSelectedDate(date); // 날짜를 상태로 저장
    const dailyWorkPlan = events.filter(
      (event) => (event.start === date || event.end === date) && event.type === 'work'
    );
    const dailyTravelPlan = events.filter(
      (event) => (event.start === date || event.end === date) && event.type === 'travel'
    );
    setSelectedWorkDateEvents(dailyWorkPlan);
    setSelectedTravelDateEvents(dailyTravelPlan);
  };

  const renderDayCellContent = (info) => {
    let number = document.createElement('a');
    number.classList.add('fc-daygrid-day-number');
    number.innerHTML = info.dayNumberText.replace('일', '');
    if (info.view.type === 'dayGridMonth') {
      return { html: number.outerHTML };
    }
    return {
      domNodes: [],
    };
  };


  //이벤트 캡쳐링 
  const handleEventClick = (info) => {
    const date = info.event.startStr;
  
    // 클릭된 이벤트의 날짜에 해당하는 이벤트들만 필터링하여 처리
    const dailyWorkPlan = events.filter(
      (event) => event.start === date && event.type === 'work'
    );
    const dailyTravelPlan = events.filter(
      (event) => event.start === date && event.type === 'travel'
    );
  
    setSelectedDate(date);
    setSelectedWorkDateEvents(dailyWorkPlan);
    setSelectedTravelDateEvents(dailyTravelPlan);
  };
  

  const eventContent = (info) => {
    let title = info.event.title;
    if (info.event.title.length > 4) {
      title = info.event.title.substring(0, 4) + '..';
    }
    if (info.event._def.extendedProps.type === 'travel') {
      return {
        html: `<div class="fc-content fc-event-work" style="background-color:#B2DEFC;border: 1px solid #B2DEFC;color:#000 ">${title}</div>`,
      };
    } else if (info.event._def.extendedProps.type === 'work') {
      return {
        html: `<div class="fc-content fc-event-travel style="background-color:#FF9559;border: 1px solid #FF9559">${title}</div>`,
      };
    }
  };

  // 일정 추가 버튼 클릭 시, 실행 함수 
  const handleWorkPlusClick = () => {
    setIsAddingWork(true);
    setTimeout(() => {
      if (workInputRef.current) {
        workInputRef.current.focus();
      }
    }, 0);
  };

  const handleTravelPlusClick = () => {
    setIsAddingTravel(true);
    setTimeout(() => {
      if (travelInputRef.current) {
        travelInputRef.current.focus();
      }
    }, 0);
  };


  //일정 입력
  const handleWorkInputChange = (e) => {
    setNewWorkEventTitle(e.target.value);
  };

  const handleTravelInputChange = (e) => {
    setNewTravelEventTitle(e.target.value);
  };


  //일정 저장 
  const handleWorkSave = () => {
    if (newWorkEventTitle.trim() !== '' && selectedDate) {
      const newEvent = { title: newWorkEventTitle, start: selectedDate, type: 'work' };
      setEvents([...events,newEvent ])
      setSelectedWorkDateEvents([...selectedWorkDateEvents, newEvent]);
    }
    setIsAddingWork(false);
    setNewWorkEventTitle('');
  };

  const handleTravelSave = () => {
    if (newTravelEventTitle.trim() !== '' && selectedDate) {
      const newEvent = { title: newTravelEventTitle, start: selectedDate, type: 'travel' };
      setEvents([...events,newEvent ])
      setSelectedTravelDateEvents([...selectedTravelDateEvents, newEvent]);
    }
    setIsAddingTravel(false);
    setNewTravelEventTitle('');

  };


  //일정 추가 취소 
  const handleWorkCancel = () => {
    setIsAddingWork(false);
    setNewWorkEventTitle('');
  };

  const handleTravelCancel = () => {
    setIsAddingTravel(false);
    setNewTravelEventTitle('');
  };

  return (
    <div className="calendar-page-wrapper">
      <FullCalendar
        plugins={[interactionPlugin, dayGridPlugin]}
        defaultView="dayGridMonth"
        selectable="true"
        height="auto"
        locale="ko"
        dayCellContent={renderDayCellContent}
        events={events}
        eventClick={handleEventClick}
        eventContent={eventContent}
        dateClick={dateClick}
      />

      <div className="plan-wrapper">

        <div className = "selected-date-text"> {selectedDate ? selectedDate: '선택된 날짜가 없습니다.' } </div>
        <div>Working Planning</div>
        {selectedWorkDateEvents.length > 0 &&
          selectedWorkDateEvents.map((event, index) => (
            <button key={index} className="plan-box-btn">
              <div className="event-title">{event.title}</div>
            </button>
          ))}
        {isAddingWork ? (
          <div className="input-wrapper">
            <input 
              ref={workInputRef}
              value={newWorkEventTitle}
              onChange={handleWorkInputChange}
              className="new-event-input"
              placeholder="새로운 일 일정을 추가하세요"
            />
            <button onClick={handleWorkSave} className="save-btn">저장</button>
            <button onClick={handleWorkCancel} className="cancel-btn">취소</button>
          </div>
        ) : (
          <button className="plan-box-btn" onClick={handleWorkPlusClick}>
            <div className="plan-plus-wrapper">+</div>
          </button>
        )}
      </div>

      <div className="plan-wrapper">
        <div>Travel Planning</div>
        {selectedTravelDateEvents.length > 0 &&
          selectedTravelDateEvents.map((event, index) => (
            <div key={index} className="plan-box-btn" style={{ border: '2px solid #B2DEFC' }}>
              <div className="event-title">{event.title}</div>
            </div>
          ))}
        {isAddingTravel ? (
          <div className="input-wrapper">
            <input
              ref={travelInputRef}
              value={newTravelEventTitle}
              onChange={handleTravelInputChange}
              className="new-event-input"
              placeholder="New Travel Event"
            />
            <button onClick={handleTravelSave} className="save-btn">저장</button>
            <button onClick={handleTravelCancel} className="cancel-btn">취소</button>
          </div>
        ) : (
          <button className="plan-box-btn" style={{ border: '2px solid #B2DEFC' }} onClick={handleTravelPlusClick}>
            <div className="plan-plus-wrapper">+</div>
          </button>
        )}
      </div>
    </div>
  );
}
