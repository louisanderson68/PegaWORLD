import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import EventList from './EventList';
import agendaData from '../data/agendaData';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/DayView.css';

function DayViewHero({ dayData, handleDayChange, goToPreviousDay, goToNextDay, dayIndex }) {
  return (
    <header className="dayview__hero">
      <div className="container dayview__hero-container">
        <div className="dayview__hero-layout">
          <a href="/" className="dayview__back-to-agenda">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Agenda
          </a>
          <div className="dayview__title-container">
            <h1 className="dayview__day-title">{dayData.day}</h1>
            <p className="dayview__date-title">{dayData.date}</p>
          </div>
          <Dropdown onSelect={handleDayChange} className="dayview__dropdown">
            <Dropdown.Toggle className="pega__dropdown-toggle">Jump to a Day</Dropdown.Toggle>
            <Dropdown.Menu className="pega__dropdown-menu">
              {agendaData.map((d) => (
                <Dropdown.Item key={d.day} eventKey={d.day} className="pega__dropdown-item">
                  {d.day} {d.date}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="dayview__nav-buttons">
          <button
            className="dayview__nav-button"
            onClick={goToPreviousDay}
            disabled={dayIndex === 0}
            aria-label="Previous Day"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> Previous Day
          </button>
          <button
            className="dayview__nav-button ms-2"
            onClick={goToNextDay}
            disabled={dayIndex === agendaData.length - 1}
            aria-label="Next Day"
          >
            Next Day <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
          </button>
        </div>
      </div>
    </header>
  );
}

function DayViewSchedule({ dayData, filteredEvents, selectedTrack, handleTrackChange }) {
  return (
    <section aria-label="Schedule for the Day" className="dayview__schedule-container">
      <div className="container">
        <h2 className="dayview__schedule-title">Schedule for the Day</h2>
        {dayData.day === 'Wednesday' && (
          <div>
            <label htmlFor="dayview__event-dropdown" className="dayview__event-dropdown-label">
              Filter events by track:
            </label>
            <Dropdown onSelect={handleTrackChange} className="dayview__event-dropdown" id="dayview__event-dropdown">
              <Dropdown.Toggle className="pega__dropdown-toggle">
                {selectedTrack === 'all' ? 'All Tracks' : selectedTrack === 'mobile' ? 'Mobile Track' : 'User-Centered Design Track'}
              </Dropdown.Toggle>
              <Dropdown.Menu className="pega__dropdown-menu">
                <Dropdown.Item eventKey="all" className="pega__dropdown-item">All Tracks</Dropdown.Item>
                <Dropdown.Item eventKey="mobile" className="pega__dropdown-item">Mobile Track</Dropdown.Item>
                <Dropdown.Item eventKey="user_centered_design" className="pega__dropdown-item">User-Centered Design Track</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
        <EventList events={filteredEvents} view="dayview" />
      </div>
    </section>
  );
}

function DayView() {
  const { day } = useParams();
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState('all');

  const dayIndex = agendaData.findIndex(d => d.day === day);
  const dayData = agendaData[dayIndex];

  useEffect(() => {
    document.body.classList.add('dayview-page');
    return () => {
      document.body.classList.remove('dayview-page');
    };
  }, []);

  if (!dayData) {
    return <p>Day not found</p>;
  }

  const goToPreviousDay = () => {
    if (dayIndex > 0) {
      navigate(`/day/${agendaData[dayIndex - 1].day}`);
    }
  };

  const goToNextDay = () => {
    if (dayIndex < agendaData.length - 1) {
      navigate(`/day/${agendaData[dayIndex + 1].day}`);
    }
  };

  const handleTrackChange = (trackKey) => {
    setSelectedTrack(trackKey);
  };

  const handleDayChange = (selectedDay) => {
    navigate(`/day/${selectedDay}`);
  };

  const filteredEvents = dayData.day === 'Wednesday'
    ? dayData.events.filter(event =>
        selectedTrack === 'all' ||
        event.track === selectedTrack ||
        (Array.isArray(event.track) && event.track.includes(selectedTrack))
      )
    : dayData.events;

  return (
    <div>
      <DayViewHero
        dayData={dayData}
        handleDayChange={handleDayChange}
        goToPreviousDay={goToPreviousDay}
        goToNextDay={goToNextDay}
        dayIndex={dayIndex}
      />
      <DayViewSchedule
        dayData={dayData}
        filteredEvents={filteredEvents}
        selectedTrack={selectedTrack}
        handleTrackChange={handleTrackChange}
      />
    </div>
  );
}

export default DayView;