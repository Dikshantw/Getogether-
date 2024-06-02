import EventTab from "./EventTab";
import SeatingArrangment from "./SeatingArrangment";
import TabBar from "./TabBar";

const Planner = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="absolute w-[393px] h-[725px] bg-white"
          style={{ top: "0px" }}
        >
          <div className="flex justify-between items-center absolute z-10 mt-[44px] mx-2 w-[375px] h-[40px]">
            <h3 className="font-bold text-[34px] leading-[41px]">Planner</h3>
          </div>
          <EventTab />

          <SeatingArrangment />
          <div className="absolute bottom-0 w-full">
            <TabBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Planner;
