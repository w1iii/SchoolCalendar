import { useState } from "react";

export default function EventForm({ date, onAdd, onClose }) {
  const [name, setName] = useState("");

  const selectedDate = new Date(date);

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleSubmit = () => {
    if (name.trim()) {
      onAdd(selectedDate, name); // pass real Date object
      setName("");
      onClose();
    }
  };

  return (
    <div className="event-dialog">
      <div className="dialog-content">
        <h3>Add Event for {formattedDate}</h3>

        <input
          type="text"
          placeholder="Event name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="dialog-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
}
