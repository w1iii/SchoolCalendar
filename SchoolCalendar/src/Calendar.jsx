import { useState } from "react";

export default function Calendar({ onSelectDate, events }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const handlePrev = () => setCurrentMonth(m => (m === 0 ? 11 : m - 1));
  const handleNext = () => setCurrentMonth(m => (m === 11 ? 0 : m + 1));

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrev}>←</button>
        <h2>{monthNames[currentMonth]} {currentYear}</h2>
        <button onClick={handleNext}>→</button>
      </div>

      <div className="calendar-grid">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
          <div key={d} className="day-name">{d}</div>
        ))}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="empty"></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          console.log('events in calendar', );
          const date = i + 1;
          const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;


          const hasEvents = events[dateStr] && events[dateStr].length > 0;

          return (
            <div
              key={date}
              className={`day ${hasEvents ? "has-event" : ""}`}
              onClick={() => onSelectDate(dateStr)}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
}
