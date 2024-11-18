import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

const DateTimePicker = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <h3>Date and Time Picker</h3>
      <DatePicker value={value} onChange={setValue}   plugins={[<TimePicker key="time-picker" />]} />
    </div>
  );
};

export default DateTimePicker;
