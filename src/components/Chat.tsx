import EventTab from "./EventTab";
import InviteButton from "./InviteButton";
import TabBar from "./TabBar";

const Chat = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="absolute w-[393px] h-[725px] bg-white"
          style={{ top: "0px" }}
        >
          <div className="flex justify-between items-center absolute z-10 mt-[44px] mx-2 w-[375px] h-[40px]">
            <h3 className="font-bold text-[34px] leading-[41px]">Chat</h3>
            <div className="flex justify-center items-center gap-3">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.36389 9.83154C2.36389 5.5063 5.90799 2 10.2799 2C14.6517 2 18.1958 5.5063 18.1958 9.83154C18.1958 11.6622 17.561 13.3461 16.4972 14.6795L22.5795 20.697L21.2625 22L15.1801 15.9825C13.8323 17.035 12.1302 17.6631 10.2799 17.6631C5.90799 17.6631 2.36389 14.1568 2.36389 9.83154ZM10.2799 3.84271C6.93667 3.84271 4.22647 6.524 4.22647 9.83154C4.22647 13.1391 6.93667 15.8204 10.2799 15.8204C13.6231 15.8204 16.3333 13.1391 16.3333 9.83154C16.3333 6.524 13.6231 3.84271 10.2799 3.84271Z"
                  fill="#8E8E8E"
                />
              </svg>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8491 5C10.8491 6.10457 11.7542 7 12.8706 7C13.9871 7 14.8922 6.10457 14.8922 5C14.8922 3.89543 13.9871 3 12.8706 3C11.7542 3 10.8491 3.89543 10.8491 5Z"
                  fill="#8E8E8E"
                />
                <path
                  d="M12.8706 14C11.7542 14 10.8491 13.1046 10.8491 12C10.8491 10.8954 11.7542 10 12.8706 10C13.9871 10 14.8922 10.8954 14.8922 12C14.8922 13.1046 13.9871 14 12.8706 14Z"
                  fill="#8E8E8E"
                />
                <path
                  d="M12.8706 21C11.7542 21 10.8491 20.1046 10.8491 19C10.8491 17.8954 11.7542 17 12.8706 17C13.9871 17 14.8922 17.8954 14.8922 19C14.8922 20.1046 13.9871 21 12.8706 21Z"
                  fill="#8E8E8E"
                />
              </svg>
            </div>
          </div>
          <EventTab />
          <InviteButton />
          <div className="absolute bottom-0 w-full">
            <TabBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
