import { useState, useEffect } from "react";
import Calendar from "./Calendar";
import EventForm from "./EventForm";
import EventList from "./EventList";
import "./index.css";

export default function App() {
  // ✅ Keep your main data source consistent
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : {};
  });

  const [selectedDate, setSelectedDate] = useState(null);

  // ✅ Save to localStorage when events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // ✅ Add event to the correct date
  const addEvent = (date, eventName) => {
    setEvents((prev) => ({
      ...prev,
      [date]: [...(prev[date] || []), eventName],
    }));
  };

  return (
    <div className="app-container">
      <div className="calendar-section">
        <Calendar 
          onSelectDate={setSelectedDate}
          events={events}
          />
        {selectedDate && (
          <EventForm
            date={selectedDate}
            onAdd={addEvent}
            onClose={() => setSelectedDate(null)}
          />
        )}
      </div>

      {/* ✅ Pass the real events object */}
      <EventList 
        events={events}
        setEvents={setEvents}
        />
    </div>
  );
}
