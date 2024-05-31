import { useState } from "react";

const InviteButton = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const whatsappLink = (text: string) => {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  };

  const inviteMessage = `You're invited! Join us via the following links:
Vendor Invite Link: https://localhost:5173/vendor-invite
Guest Invite Link: https://localhost:5173/guest-invite`;

  return (
    <div
      className="absolute w-[393px] h-[725px] bg-white"
      style={{ top: "0px" }}
    >
      <button
        className="absolute px-[25px] py-[13px] pb-[14px] pl-[25px] pr-[25px] rounded-2xl bg-[#fa7f84] text-white"
        style={{
          bottom: "119px",
          left: "309px",
          right: "24px",
          top: "558px",
        }}
        onClick={() => setIsDrawerOpen(true)}
      >
        +
      </button>

      {isDrawerOpen && (
        <div className="absolute z-10 bottom-0 flex justify-center items-center ">
          <div className="w-[393px] p-4 bg-[#fdcdcd] shadow-lg rounded-t-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Send Invites</h2>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => setIsDrawerOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="flex justify-center">
              <a
                href={whatsappLink(inviteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp Logo"
                  className="w-6 h-6"
                />
                <span>Send via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InviteButton;
