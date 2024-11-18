import { useState } from "react";
import DatePicker from "react-multi-date-picker";

const CustomFormatPicker = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <h3>Custom Date Format</h3>
      <DatePicker
        value={value}
        onChange={setValue}
        format="YYYY/MM/DD HH:mm"
        inputClass="custom-input"
      />
    </div>
  );
};

export default CustomFormatPicker;
