export default function EventList({ events }) {
  const dates = Object.keys(events).sort();

  return (
    <div className="event-list">
      <h3>Upcoming Events</h3>
      {dates.length === 0 && <p>No events yet.</p>}
      {dates.map(date => (
        <div key={date} className="event-day">
          <h4>{date}</h4>
          <ul>
            {events[date].map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
