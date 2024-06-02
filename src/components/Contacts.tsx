import React from "react";
import MessageItem from "./MessageItem";

const Contacts: React.FC = () => {
  const messages = [
    {
      profileImage:
        "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
      name: "Arpit",
      date: "31/04/24",
      message: "What kind of strategy is better?",
    },
    {
      profileImage:
        "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
      name: "Sarah ",
      date: "01/06/24",
      message: "Can we reschedule the meeting?",
    },
    {
      profileImage:
        "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
      name: "David Smith",
      date: "01/06/24",
      message: "I'll send the report by EOD.",
    },
    // Add more messages as needed
  ];

  return (
    <div className="flex-grow overflow-auto mt-[151px] h-[400px] mx-2 p-1">
      {messages.map((msg, index) => (
        <MessageItem key={index} message={msg} />
      ))}
    </div>
  );
};

export default Contacts;
