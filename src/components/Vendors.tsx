import TabBar from "./TabBar";

const Vendors = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="absolute w-[393px] h-[725px] bg-white"
          style={{ top: "0px" }}
        >
          <div className="absolute bottom-0 w-full">
            <TabBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vendors;
