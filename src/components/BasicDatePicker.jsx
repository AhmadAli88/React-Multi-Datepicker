import  { useState } from "react";
import DatePicker from "react-multi-date-picker";

const BasicDatePicker = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <h3>Basic Date Picker</h3>
      <DatePicker value={value} onChange={setValue} />
      <p>Selected Date: {value.toString()}</p>
    </div>
  );
};

export default BasicDatePicker;
