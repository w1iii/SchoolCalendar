export default function EventList({ events }) {
  const dates = Object.keys(events).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  return (
    <>
      <div className="event-section">

        <div className="event-list-header">
            <h3>Upcoming Events</h3>
          </div>

        <div className="event-list">
          {dates.length === 0 && <p>No events yet.</p>}
          {dates.map((date) => {
            const formattedDate = new Date(date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            });

            return (
              <div key={date} className="event-day">
                <h4>{formattedDate}</h4>
                <div className="events">
                <ul>
                  {events[date].map((e, i) => (
                    <li key={i}>
                      <button> - </button>
                      {e}
                    </li>
                  ))}
                </ul>
                </div>
            </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
