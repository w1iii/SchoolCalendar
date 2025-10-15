import { useState, useEffect } from "react";
import Calendar from "./Calendar";
import EventForm from "./EventForm";
import EventList from "./EventList";
import "./index.css";

export default function App() {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : {};
  });
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (date, eventName) => {
    setEvents(prev => ({
      ...prev,
      [date]: [...(prev[date] || []), eventName],
    }));
  };

  return (
    <div className="app-container">
      <div className="calendar-section">
        <Calendar onSelectDate={setSelectedDate} />
        {selectedDate && (
          <EventForm
            date={selectedDate}
            onAdd={addEvent}
            onClose={() => setSelectedDate(null)}
          />
        )}
      </div>
      <EventList events={events} />
    </div>
  );
}
