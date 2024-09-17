import React, { useState } from 'react';
import { Accordion, Dropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import agendaData, { CATEGORY_CONSTANTS } from '../data/agendaData';
import EventList from './EventList';
import '../styles/Agenda.css';

function Agenda() {
  const [mobileSelectedTrack, setMobileSelectedTrack] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryChange = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  const handleDayInView = (day) => {
    navigate(`/day/${day.day}`);
  };

  const filterEventsByTrack = (events, track) => {
    if (track === 'all') {
      return events;
    }
    return events.filter(event => {
      if (Array.isArray(event.track)) {
        return event.track.includes(track);
      }
      return event.track === track;
    });
  };

  const filterEventsByCategory = (events, category) => {
    return events.map(event => ({
      ...event,
      isEnabled: !category || event.category === CATEGORY_CONSTANTS[category]
    }));
  };

  const wednesdayData = agendaData.find(day => day.day === 'Wednesday');
  const filteredMobileWednesdayEvents = filterEventsByCategory(
    filterEventsByTrack(wednesdayData.events, mobileSelectedTrack),
    selectedCategory
  );
  const filteredDesktopWednesdayEvents = filterEventsByCategory(
    wednesdayData.events,
    selectedCategory
  );

  const renderEventsForDesktop = (events) => {
    let mobileEvents = [];
    let userCenteredEvents = [];
    let rows = [];

    events.forEach((event, index) => {
      const isCentral = Array.isArray(event.track) || !event.track;

      if (isCentral) {
        if (mobileEvents.length > 0 || userCenteredEvents.length > 0) {
          rows.push(
            <div key={`row-${index}`} className="agenda__row-two-column">
              <div className="agenda__track-column">
                <EventList events={mobileEvents} view="agenda" />
              </div>
              <div className="agenda__track-column">
                <EventList events={userCenteredEvents} view="agenda" />
              </div>
            </div>
          );
          mobileEvents = [];
          userCenteredEvents = [];
        }

        rows.push(
          <div key={index} className="agenda__row-full-width">
            <div className="agenda__event-central">
              <EventList events={[event]} view="agenda" />
            </div>
          </div>
        );
      } else {
        if (event.track === 'mobile') {
          mobileEvents.push(event);
        } else if (event.track === 'user_centered_design') {
          userCenteredEvents.push(event);
        }
      }
    });

    if (mobileEvents.length > 0 || userCenteredEvents.length > 0) {
      rows.push(
        <div key={`row-end`} className="agenda__row-two-column">
          <div className="agenda__track-column">
            <EventList events={mobileEvents} view="agenda" />
          </div>
          <div className="agenda__track-column">
            <EventList events={userCenteredEvents} view="agenda" />
          </div>
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="agenda__wrapper">
      <div className="agenda__hero">
        <div className="agenda__hero-layout">
          <div className="agenda__title-container">
            <h1 className="agenda__title">PegaWORLD</h1>
            <p className="agenda__subtitle">Design Track Agenda</p>
          </div>

          <div className="agenda__filter-wrapper">
            <label htmlFor="agenda__filter-dropdown" id="agenda-filter-label" className="agenda__filter-label pega__dropdown-label">Filter events by category:</label>
            <Dropdown onSelect={handleCategoryChange} id="agenda__filter-dropdown" className="agenda__filter-dropdown" role="listbox" aria-labelledby="agenda-filter-label">
              <Dropdown.Toggle variant="primary" className="pega__dropdown-toggle">
                {selectedCategory ? CATEGORY_CONSTANTS[selectedCategory] : 'All Categories'}
              </Dropdown.Toggle>
              <Dropdown.Menu className="pega__dropdown-menu">
                <Dropdown.Item eventKey={null} className="pega__dropdown-item">
                  All Categories
                </Dropdown.Item>
                {Object.keys(CATEGORY_CONSTANTS).map((categoryKey) => (
                  <Dropdown.Item key={categoryKey} eventKey={categoryKey} className={`pega__dropdown-item category-${categoryKey.toLowerCase()}`}>
                    {CATEGORY_CONSTANTS[categoryKey]}
                    <span className={`category-color-box category-${categoryKey.toLowerCase()}`}></span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="d-block d-md-none agenda__mobile-wrapper">
        <Accordion className="agenda__accordion" aria-controls="accordion-list" aria-expanded="false">
          {agendaData.map((day, index) => (
            <Accordion.Item eventKey={index} key={index} className="agenda__accordion-item" role="region" aria-labelledby={`accordion-header-${index}`}>
              <Accordion.Header className="agenda__accordion-button">
                {day.day} - {day.date}
              </Accordion.Header>
              <Accordion.Body className="agenda__accordion-body">
                <div className="agenda__accordion-body-header">
                <h5 className="agenda__accordion-body-title">Events</h5>
                <Button className="btn-yellow btn-small mb-0" onClick={() => handleDayInView(day)} tabIndex="0" aria-label={`View the full day agenda for ${day.day}`}>
                  View Full Day
                </Button>
                </div>
                {day.day === 'Wednesday' ? (
                  <>
                    <Dropdown onSelect={(eventKey) => setMobileSelectedTrack(eventKey)}>
                      <Dropdown.Toggle variant="primary" className="pega__dropdown-toggle mb-3">
                        {mobileSelectedTrack === 'all'
                          ? 'All Events'
                          : mobileSelectedTrack === 'mobile'
                          ? 'Mobile Track'
                          : 'User-Centered Design Track'}
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="pega__dropdown-menu">
                        <Dropdown.Item eventKey="all" className="pega__dropdown-item">All Events</Dropdown.Item>
                        <Dropdown.Item eventKey="mobile" className="pega__dropdown-item">Mobile Track</Dropdown.Item>
                        <Dropdown.Item eventKey="user_centered_design" className="pega__dropdown-item">User-Centered Design Track</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <EventList events={filteredMobileWednesdayEvents} view="agenda" />
                  </>
                ) : (
                  <EventList events={filterEventsByCategory(day.events, selectedCategory)} view="agenda" />
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <div className="d-none d-md-block agenda__container">
        <div className="agenda__row">
          {agendaData.map((day, index) => (
            <div className="agenda__column" key={index}>
              <div className="agenda__column-header">
                <h2 className="agenda__column-title">{day.day} {day.date}</h2>
                <Button className="btn-yellow btn-small mb-0" onClick={() => handleDayInView(day)} tabIndex="0" aria-label={`View the full day agenda for ${day.day}`}>
                  View Full Day
                </Button>
              </div>
              {day.day === 'Wednesday' ? (
                <>
                  {renderEventsForDesktop(filteredDesktopWednesdayEvents)}
                </>
              ) : (
                <div className="agenda__column-inner">
                  <EventList events={filterEventsByCategory(day.events, selectedCategory)} view="agenda" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Agenda;
