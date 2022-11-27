import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const DateFind = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />
    </div>
  );
};

export default DateFind;
