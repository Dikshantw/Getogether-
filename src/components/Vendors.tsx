import TabBar from "./TabBar";
import VendorTable from "./VendorTable";

const Vendors = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="absolute w-[393px] h-[725px] bg-white"
          style={{ top: "0px" }}
        >
          <div className="flex justify-between items-center absolute z-10 mt-[44px] mx-2 w-[375px] h-[40px]">
            <h3 className="font-bold text-[34px] leading-[41px]">
              Vendor Managment
            </h3>
          </div>
          <VendorTable />
          <div className="absolute bottom-0 w-full">
            <TabBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vendors;
