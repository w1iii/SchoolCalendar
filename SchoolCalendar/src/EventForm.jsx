import { useState } from "react";

export default function EventForm({ date, onAdd, onClose }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      onAdd(date, name);
      setName("");
      onClose();
    }
  };

  return (
    <div className="event-dialog">
      <div className="dialog-content">
        <h3>Add Event for {date}</h3>
        <input
          type="text"
          placeholder="Event name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div className="dialog-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
}
