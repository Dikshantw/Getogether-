import React, { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Guest {
  name: string;
  companions: string;
  phone: string;
  allergies: string;
  attending: string;
}

const GuestInvite: React.FC = () => {
  const [guest, setGuest] = useState<Guest>({
    name: "",
    companions: "",
    phone: "",
    allergies: "",
    attending: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuest((prevGuest) => ({
      ...prevGuest,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(`${guest.name} has joined Getogether`);
    setGuest({
      name: "",
      companions: "",
      phone: "",
      allergies: "",
      attending: "",
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="absolute w-[393px] h-[725px] bg-white"
        style={{ top: "0px" }}
      >
        <div className="flex justify-between items-center absolute z-10 mt-[44px] mx-2 w-[375px] h-[40px]">
          <h3 className="font-bold text-[34px] leading-[41px]">Guest Invite</h3>
        </div>

        <div className=" ml-5 mr-10 mt-28">
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <label className="flex flex-col mb-4">
              Name
              <input
                className=" p-2 mt-1 rounded bg-[#ffe6e6]"
                type="text"
                name="name"
                value={guest.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="flex flex-col mb-4">
              Companions
              <input
                className=" p-2 mt-1 rounded bg-[#ffe6e6]"
                type="text"
                name="companions"
                value={guest.companions}
                onChange={handleChange}
                required
              />
            </label>
            <label className="flex flex-col mb-4">
              Phone Number
              <input
                className=" p-2 mt-1 rounded bg-[#ffe6e6]"
                type="text"
                name="phone"
                value={guest.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label className="flex flex-col mb-4">
              Allergies (if any)
              <input
                className=" p-2 mt-1 rounded bg-[#ffe6e6] "
                type="text"
                name="allergies"
                value={guest.allergies}
                onChange={handleChange}
              />
            </label>
            <label>
              Attending:
              <select
                name="attending"
                value={guest.attending}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <button
              className="bg-[#fa7f84] text-[#fdccd5] rounded-2xl py-4 px-20  mt-9"
              type="submit"
            >
              JOIN
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default GuestInvite;
