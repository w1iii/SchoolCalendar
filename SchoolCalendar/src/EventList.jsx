export default function EventList({ events }) {
  const dates = Object.keys(events).sort();

  return (
    <div className="event-list">
      <h3>Upcoming Events</h3>

      {dates.length === 0 && <p>No events yet.</p>}

      {dates.map((date) => {
        const formattedDate = new Date(date).toLocaleDateString("en-US", {
          weekday: "long",   // e.g. Monday
          month: "long",     // e.g. October
          day: "numeric",    // e.g. 15
          year: "numeric",   // e.g. 2025
        });

        return (
          <div key={date} className="event-day">
            <h4>{formattedDate}</h4>
            <ul>
              {events[date].map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
