import React from 'react';
import Event from './Event';
import '../styles/EventList.css';

function EventList({ events, view }) {
  return (
    <ul className="event__list">
      {events.map((event, index) => (
        <Event key={index} event={event} view={view} />
      ))}
    </ul>
  );
}

export default EventList;
