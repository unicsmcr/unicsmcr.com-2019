import React from 'react';

import './Events.css';

var months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function EventItem(props) {
  return (
    <li>
      <div className="event row">
        <div className="event-date col-3">
          <div className="row event-month">
            <p>{props.event.month}</p>
          </div>
          <div className="row event-day">
            <p>{props.event.day}</p>
          </div>
        </div>
        <div className="col-9">
          <div className="event-name row">
            <p>{props.event.name}</p>
          </div>
          <div className="event-details row">
            <p>
              {props.event.time} · {props.event.place}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  async componentDidMount() {
    let events = [];
    try {
      const response = await fetch('/.netlify/functions/facebook', {
        method: 'get',
        header: { 'Content-Type': 'application/json' },
      });
      events = await response.json();
    } catch (err) {
      console.log(err);
      return;
    }

    // Process events
    events = events.map((event) => {
      var formattedEventStartTime = event.start_time.slice(0, -5);
      var eventDate = new Date(formattedEventStartTime);
      var minutes =
        (eventDate.getMinutes() < 10 ? '0' : '') + eventDate.getMinutes();
      var startTime =
        days[eventDate.getDay()] + ' ' + eventDate.getHours() + ':' + minutes;
      return {
        id: event.id,
        name: event.name,
        day: eventDate.getDate(),
        month: months[eventDate.getMonth()],
        time: startTime,
        place: event.place ? event.place.name : '',
      };
    });

    this.setState({ events: events });
  }

  render() {
    const { events } = this.state;
    if (events.length === 0) return null;

    const mappedEvents = events.map((event) => (
      <EventItem key={event.id} event={event} />
    ));

    return (
      <div>
        <ul>{mappedEvents}</ul>
      </div>
    );
  }
}
