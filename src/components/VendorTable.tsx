import React, { useState, ChangeEvent } from "react";

interface Vendor {
  category: string;
  name: string;
  totalCost: number;
  deposit: number;
  installments: number;
  finalPayment: number;
  paid: number;
  balance: number;
}

const VendorTable: React.FC = () => {
  const initialData: Vendor[] = [
    {
      category: "Venue",
      name: "[Venue Name]",
      totalCost: 0,
      deposit: 0,
      installments: 0,
      finalPayment: 0,
      paid: 0,
      balance: 0,
    },
    {
      category: "Catering",
      name: "[Caterer Name]",
      totalCost: 0,
      deposit: 0,
      installments: 0,
      finalPayment: 0,
      paid: 0,
      balance: 0,
    },
    {
      category: "Photography",
      name: "[Photographer Name]",
      totalCost: 0,
      deposit: 0,
      installments: 0,
      finalPayment: 0,
      paid: 0,
      balance: 0,
    },
    {
      category: "Florist",
      name: "[Florist Name]",
      totalCost: 0,
      deposit: 0,
      installments: 0,
      finalPayment: 0,
      paid: 0,
      balance: 0,
    },
    {
      category: "Music/Entertainment",
      name: "[Entertainment Name]",
      totalCost: 0,
      deposit: 0,
      installments: 0,
      finalPayment: 0,
      paid: 0,
      balance: 0,
    },
    {
      category: "Transportation",
      name: "[Transportation Company Name]",
      totalCost: 0,
      deposit: 0,
      installments: 0,
      finalPayment: 0,
      paid: 0,
      balance: 0,
    },
    {
      category: "Other",
      name: "[Vendor Name]",
      totalCost: 0,
      deposit: 0,
      installments: 0,
      finalPayment: 0,
      paid: 0,
      balance: 0,
    },
  ];

  const [data, setData] = useState<Vendor[]>(initialData);

  const handleChange = (
    index: number,
    field: keyof Vendor,
    value: string | number
  ) => {
    const updatedData = data.map((vendor, i) =>
      i === index ? { ...vendor, [field]: value } : vendor
    );
    setData(updatedData);
  };

  const handleInputChange =
    (index: number, field: keyof Vendor) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "name" ? event.target.value : parseFloat(event.target.value);
      handleChange(index, field, value);
    };

  const calculateTotals = () => {
    return data.reduce(
      (totals, vendor) => {
        totals.totalCost += vendor.totalCost;
        totals.deposit += vendor.deposit;
        totals.installments += vendor.installments;
        totals.finalPayment += vendor.finalPayment;
        totals.paid += vendor.paid;
        totals.balance += vendor.balance;
        return totals;
      },
      {
        totalCost: 0,
        deposit: 0,
        installments: 0,
        finalPayment: 0,
        paid: 0,
        balance: 0,
      }
    );
  };

  const totals = calculateTotals();

  return (
    <div className="flex-grow overflow-auto mt-[151px] h-[500px] mx-2 p-1">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Vendor Category</th>
            <th className="py-2 px-4 border-b">Vendor Name</th>
            <th className="py-2 px-4 border-b">Total Cost</th>
            <th className="py-2 px-4 border-b">Deposit</th>
            <th className="py-2 px-4 border-b">Installments</th>
            <th className="py-2 px-4 border-b">Final Payment</th>
            <th className="py-2 px-4 border-b">Paid</th>
            <th className="py-2 px-4 border-b">Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((vendor, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{vendor.category}</td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={vendor.name}
                  onChange={handleInputChange(index, "name")}
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="number"
                  value={vendor.totalCost}
                  onChange={handleInputChange(index, "totalCost")}
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="number"
                  value={vendor.deposit}
                  onChange={handleInputChange(index, "deposit")}
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="number"
                  value={vendor.installments}
                  onChange={handleInputChange(index, "installments")}
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="number"
                  value={vendor.finalPayment}
                  onChange={handleInputChange(index, "finalPayment")}
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="number"
                  value={vendor.paid}
                  onChange={handleInputChange(index, "paid")}
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="number"
                  value={vendor.balance}
                  onChange={handleInputChange(index, "balance")}
                />
              </td>
            </tr>
          ))}
          <tr className="text-center">
            <td className="py-2 px-4 border-b">
              <strong>Total</strong>
            </td>
            <td></td>
            <td className="py-2 px-4 border-b">
              <strong>${totals.totalCost.toFixed(2)}</strong>
            </td>
            <td className="py-2 px-4 border-b">
              <strong>${totals.deposit.toFixed(2)}</strong>
            </td>
            <td className="py-2 px-4 border-b">
              <strong>${totals.installments.toFixed(2)}</strong>
            </td>
            <td className="py-2 px-4 border-b">
              <strong>${totals.finalPayment.toFixed(2)}</strong>
            </td>
            <td className="py-2 px-4 border-b">
              <strong>${totals.paid.toFixed(2)}</strong>
            </td>
            <td className="py-2 px-4 border-b">
              <strong>${totals.balance.toFixed(2)}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VendorTable;
