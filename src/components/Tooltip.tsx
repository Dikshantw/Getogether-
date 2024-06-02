import React, { useState } from "react";

interface TooltipProps {
  x: number;
  y: number;
  guestName: string;
  onSave: (guestName: string) => void;
  onClose: () => void;
}

const Tooltip: React.FC<TooltipProps> = ({
  x,
  y,
  guestName,
  onSave,
  onClose,
}) => {
  const [name, setName] = useState(guestName);

  const handleSave = () => {
    onSave(name);
    onClose();
  };

  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        background: "white",
        border: "1px solid black",
        padding: "10px",
        zIndex: 1000,
      }}
    >
      {guestName ? (
        <p>{guestName}</p>
      ) : (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter guest name"
            style={{ marginBottom: "10px" }}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose} style={{ marginLeft: "10px" }}>
            Close
          </button>
        </>
      )}
    </div>
  );
};

export default Tooltip;
