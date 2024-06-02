import React from "react";

interface Message {
  profileImage: string;
  name: string;
  date: string;
  message: string;
}

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  return (
    <div className="flex items-center p-[10px] border-b border-[#e0e0ee0]">
      <img
        src={message.profileImage}
        alt={message.name}
        className="w-[50px] h-[50px] mr-[10px] rounded-[50%]"
      />
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <span className="font-bold">{message.name}</span>
          <span className="text-[#888] text-[12px]">{message.date}</span>
        </div>
        <div className="text-[#888]">{message.message}</div>
      </div>
    </div>
  );
};

export default MessageItem;
