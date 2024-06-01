import { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

const AddEventButton = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [venue, setVenue] = useState("");
  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  const handleSave = () => {
    if (selectedDate) {
      alert(
        `${title} Event scheduled on ${selectedDate.toLocaleString()} at ${venue}`
      );
    }
    setIsDatePickerOpen(false);
  };

  return (
    <div>
      <button
        className="bg-[#fa7f84] text-[#fdccd5] text-xs leading-5 px-3 w-[83px] h-[24px] rounded-3xl"
        onClick={() => setIsDatePickerOpen(true)}
      >
        Add Event
      </button>
      <Dialog
        open={isDatePickerOpen}
        onClose={() => setIsDatePickerOpen(false)}
        PaperProps={{
          sx: {
            width: "370px",
            height: "420px",
            backgroundColor: "#f3bfc5",
          },
        }}
      >
        <DialogTitle>Schedule Event</DialogTitle>
        <DialogContent>
          <form className="flex flex-col w-full">
            <label htmlFor="title" className="flex flex-col mb-4">
              Event
              <input
                type="text"
                className=" p-2 mt-1 rounded bg-[#ffe6e6]"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor="venue" className="flex flex-col mb-4">
              Venue
              <input
                type="text"
                className=" p-2 mt-1 rounded bg-[#ffe6e6]"
                id="venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            </label>
          </form>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            Date and Time
            <Box
              sx={{
                mt: 1,
                backgroundColor: "#fee6e6",
                borderRadius: 1,
                padding: 1,
              }}
            >
              <MobileDateTimePicker
                value={selectedDate}
                onChange={handleDateChange}
              />
            </Box>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <button
            className="bg-red-500 m-1 py-1 px-3 rounded"
            onClick={() => setIsDatePickerOpen(false)}
            color="secondary"
          >
            Cancel
          </button>
          <button
            className="bg-green-500 m-1 py-1 px-3 rounded"
            onClick={handleSave}
            color="primary"
          >
            Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddEventButton;
