import AddEventButton from "./EventButton";

const EventTab = () => {
  return (
    <div className="flex border justify-center items-center absolute z-10 mt-[101px] mx-2 w-[375px] h-[50px]">
      <div className=" ml-72">
        <AddEventButton />
      </div>
    </div>
  );
};

export default EventTab;
