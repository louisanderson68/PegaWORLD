import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import '../styles/Event.css';


function EventDetails({ event, hasLocation, renderTitleWithIcon }) {
  return (
    <div className="event__details">
      {renderTitleWithIcon()}
      <p className="event__category" aria-label={`Event category: ${event.category_title}`}>
        {event.category_title}
      </p>
      <p className="event__time" aria-label={`Event time: ${event.time}`}>
        <FontAwesomeIcon icon={faClock} className="event__time-icon me-1" />
        <span>{event.time}</span>
      </p>
      {hasLocation && (
        <p className="event__location" aria-label={`Location: ${event.location}`}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="event__location-icon" />
          {event.location}
        </p>
      )}
    </div>
  );
}

function Event({ event, view = 'agenda' }) {
  const hasLocation = !!event.location;
  const categoryClass = `category-${event.category.toLowerCase().replace(/\s+/g, '-')}`;

  const renderTitleWithIcon = () => (
    <h5 className="event__title">
      {event.category === 'PegaWORLD main conference' && (
        <img src="/pega-logo--dark.svg" alt="Pega logo" className="event__icon" />
      )}
      {event.title}
    </h5>
  );

  if (view === 'agenda') {
    const eventClass = event.isEnabled ? 'event__item event__item--enabled' : 'event__item event__item--disabled';

    return (
      <li className={`${eventClass} ${categoryClass}`}>
        <div className="event__container" aria-label={`Event: ${event.title}`}>
          {/*<EventTime time={event.time} isByTime={isByTime} />*/}
          <EventDetails event={event} hasLocation={hasLocation} renderTitleWithIcon={renderTitleWithIcon} />
        </div>
      </li>
    );
  }

  if (view === 'dayview') {
    return (
      <li className={`dayview__event-item ${categoryClass}`}>
        <div className="dayview__event-time" aria-label={`Event time: ${event.time}`}>
          <span>{event.time}</span>
        </div>
        <div className="dayview__event-details" aria-label={`Event: ${event.title}`}>
          {renderTitleWithIcon()}
          <p className="dayview__event-category" aria-label={`Event category: ${event.category_title}`}>
            {event.category_title}
          </p>
          {hasLocation && (
            <p className="dayview__event-location" aria-label={`Location: ${event.location}`}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="event__location-icon" />
              {event.location}
            </p>
          )}
        </div>
      </li>
    );
  }

  return null;
}

export default Event;
