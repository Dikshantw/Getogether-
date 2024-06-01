import { useState } from "react";

const GuestTable = () => {
  const [guestList, setGuestList] = useState([
    { name: "Aditya Kurapika", companions: 5, phone: 7458965214, seat: 1 },
    { name: "Aditya Kurapika", companions: 5, phone: 7458965214, seat: 1 },
    { name: "Aditya Kurapika", companions: 5, phone: 7458965214, seat: 1 },
    { name: "Aditya Kurapika", companions: 5, phone: 7458965214, seat: 1 },
  ]);

  const addGuest = () => {
    const newGuest = {
      name: "New Guest",
      companions: 3,
      phone: 1234567890,
      seat: 2,
    };
    setGuestList([...guestList, newGuest]);
  };

  return (
    <div className="flex-grow overflow-auto mt-[151px] h-[500px] mx-2 p-1">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Companions</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Seat</th>
          </tr>
        </thead>
        <tbody>
          {guestList.map((guest, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{guest.name}</td>
              <td className="py-2 px-4 border-b">{guest.companions}</td>
              <td className="py-2 px-4 border-b">{guest.phone}</td>
              <td className="py-2 px-4 border-b">{guest.seat}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="absolute px-[25px] py-[13px] pb-[14px] pl-[25px] pr-[25px] rounded-2xl bg-[#fa7f84] text-white"
        style={{
          bottom: "119px",
          left: "309px",
          right: "24px",
          top: "558px",
        }}
        onClick={addGuest}
      >
        +
      </button>
    </div>
  );
};

export default GuestTable;
