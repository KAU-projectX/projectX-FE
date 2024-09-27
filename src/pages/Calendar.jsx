import React, { useRef, useState } from 'react';
import orange_line from '../assets/img/orange_line.svg';
import blue_line from '../assets/img/blue_line.svg';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ReactModal from 'react-modal';
import '../styles/calendar.css';

ReactModal.setAppElement('#root');

export default function Calendar() {
  const [events, setEvents] = useState([
    {
      title: "경주여행", 
      start: "2024-08-17", 
      end: "2024-08-20",
      type: "work",
    },
    {
      title: "업무마감일", 
      start: "2024-08-01", 
      end: "2024-08-10",
      type: "work",
    },
    {
      title: "여행가쟈", 
      start: "2024-08-30", 
      end: "2024-09-10", 
      type: "travel",
    },
    {
      title: "배낭메고 여행이나", 
      start: "2024-09-02", 
      type: "travel",
    },
  ]);

  const [selectedWorkDateEvents, setSelectedWorkDateEvents] = useState([]);
  const [eventType, setEventType] = useState('work'); // 기본값 설정
  const [selectedTravelDateEvents, setSelectedTravelDateEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState(''); 
  const [hasInput, setHasInput] = useState(false); // 입력 상태 추가

  const workInputRef = useRef(null);
  const travelInputRef = useRef(null);

  const dateClick = (info) => {
    setIsModalOpen(true);
    const date = info.dateStr;

    const calendarEl = document.querySelector('.fc');
    calendarEl.querySelectorAll('.fc-daygrid-day').forEach(dayCell => {
      dayCell.classList.remove('selected-date');
    });
    info.dayEl.classList.add('selected-date');

    setSelectedDate(date);
    const dailyWorkPlan = events.filter(
      (event) => (event.start === date || event.end === date) && event.type === 'work'
    );
    const dailyTravelPlan = events.filter(
      (event) => (event.start === date || event.end === date) && event.type === 'travel'
    );
    setSelectedWorkDateEvents(dailyWorkPlan);
    setSelectedTravelDateEvents(dailyTravelPlan);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderDayCellContent = (info) => {
    let number = document.createElement('a');
    number.classList.add('fc-daygrid-day-number');
    number.innerHTML = info.dayNumberText.replace('일', '');
    if (info.view.type === 'dayGridMonth') {
      return { html: number.outerHTML };
    }
    return { domNodes: [] };
  };

  const handleEventClick = (info) => {
    const date = info.event.startStr;
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
        html: `<div class="fc-content fc-event-travel" style="background-color:#FF9559;border: 1px solid #FF9559">${title}</div>`,
      };
    }
  };

  const handleWorkInputChange = (e) => {
    setNewEventTitle(e.target.value);
    setHasInput(e.target.value.length > 0);
  };

  const handleTravelInputChange = (e) => {
    setNewEventTitle(e.target.value);
    setHasInput(e.target.value.length > 0);
  };

  const handleEventType = () => {
    setEventType(eventType === 'work' ? 'travel' : 'work');
    setNewEventTitle(''); // Reset input when switching types
    setHasInput(false); // Reset input state when switching types
  };

  const handleEventSave = () => {
    if (selectedDate && newEventTitle.trim()) {
      const newEvent = { 
        title: newEventTitle.trim(),
        start: selectedDate, 
        type: eventType 
      };
      setEvents([...events, newEvent]);
      if (eventType === 'work') {
        setSelectedWorkDateEvents([...selectedWorkDateEvents, newEvent]);
      } else {
        setSelectedTravelDateEvents([...selectedTravelDateEvents, newEvent]);
      }
      setNewEventTitle('');
      setHasInput(false); // Clear input state after saving
    }
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


      {/* first wrapper */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="ReactModal Test"
        className="modal-wrapper"
        overlayClassName="modal-overlay-wrapper"
      >


        {/* 날짜 - 1번 div */}
        <div className='modal-date-wrapper'>
          <h3>{selectedDate}</h3>
          <hr/>
        </div>


        {/* 이벤트 - 2번 div, top */}
        <div className='modal-event-wrapper'>
          {selectedWorkDateEvents.length > 0 &&
            selectedWorkDateEvents.map((event, index) => (
              <div key={index} className="modal-plan-box">
                <div className="modal-event-title">
                  <img src={orange_line} alt="|" />
                  {event.title}
                </div>
              </div>
            ))}

          {selectedTravelDateEvents.length > 0 &&
            selectedTravelDateEvents.map((event, index) => (
              <div key={index} className="modal-plan-box">
                <div className="modal-event-title">
                  <img src={blue_line} alt="|" />
                  {event.title}
                </div>
              </div>
            ))}
        </div>


        {/* 계획 - 3번 div, bottom*/}
        <div className='modal-plan-wrapper'>
          <div className="todo-input-wrapper">
            <div className="input-wrapper">
              <input
                ref={eventType === 'work' ? workInputRef : travelInputRef}
                value={newEventTitle}
                onChange={eventType === 'work' ? handleWorkInputChange : handleTravelInputChange}
                className={eventType === 'work' ? 'new-workevent-input' : 'new-travelevent-input'}
                placeholder="&nbsp;&nbsp;입력 시 저장 버튼이 생겨요!"
              />
              {hasInput ? (
                <button 
                  onClick={handleEventSave} 
                  className="save-btn" 
                  style={{
                    color: eventType === 'work' ? '#FF9559' : '#8BCDFB',
                    border: `1px solid ${eventType === 'work' ? '#FF9559' : '#8BCDFB'}`,
                    boxShadow: `0 0 5px ${eventType === 'work' ? '#FF9559' : '#8BCDFB'}` // box-shadow 추가 예시
                  }}
                  >✓</button>
              ) : (
                <button onClick={handleEventType} className={eventType === 'work' ? 'work-type-btn' : 'travel-type-btn'}>
                  {eventType === 'work' ? 'W' : 'T'}
                </button>
              )}
            </div>
          </div>
        </div>
      </ReactModal> 
    </div>
  );
}
