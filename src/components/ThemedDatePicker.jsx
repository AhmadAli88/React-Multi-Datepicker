import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/red.css"
const ThemedDatePicker = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <h3>Dark Themed Date Picker</h3>
      <DatePicker value={value} onChange={setValue} className="red" />
    </div>
  );
};

export default ThemedDatePicker;
