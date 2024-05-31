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
          <InviteButton />
          <TabBar />
        </div>
      </div>
    </>
  );
};

export default Chat;
