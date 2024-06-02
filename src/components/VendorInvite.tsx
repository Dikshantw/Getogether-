import React, { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Vendor {
  name: string;
  department: string;
  price: string;
  contact: string;
}

const VendorInvite: React.FC = () => {
  const [vendor, setVendor] = useState<Vendor>({
    name: "",
    department: "",
    price: "",
    contact: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVendor({
      ...vendor,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(`${vendor.name} has joined Getogether`);
    setVendor({
      name: "",
      department: "",
      price: "",
      contact: "",
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="absolute w-[393px] h-[725px] bg-white"
        style={{ top: "0px" }}
      >
        <div className="flex justify-between items-center absolute z-10 mt-[44px] mx-2 w-[375px] h-[40px]">
          <h3 className="font-bold text-[34px] leading-[41px]">
            Vendor Invite
          </h3>
        </div>

        <div className=" ml-5 mr-10 mt-28">
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <label className="flex flex-col mb-4">
              Name
              <input
                className=" p-2 mt-1 rounded bg-[#ffe6e6]"
                type="text"
                name="name"
                value={vendor.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="flex flex-col mb-4">
              Department
              <input
                className=" p-2 mt-1 rounded bg-[#ffe6e6]"
                type="text"
                name="department"
                value={vendor.department}
                onChange={handleChange}
                required
              />
            </label>
            <label className="flex flex-col mb-4">
              Price
              <input
                className=" p-2 mt-1 rounded bg-[#ffe6e6]"
                type="text"
                name="price"
                value={vendor.price}
                onChange={handleChange}
                required
              />
            </label>
            <label className="flex flex-col mb-4">
              Contact Information
              <input
                className=" p-2 mt-1 rounded bg-[#ffe6e6] "
                type="text"
                name="contact"
                value={vendor.contact}
                onChange={handleChange}
                required
              />
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

export default VendorInvite;
