import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const ResponsivePicker = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <h3>Responsive Date Picker with Date Panel</h3>
      <DatePicker
        value={value}
        onChange={setValue}
        plugins={[<DatePanel key="date-panel"/>]}
        mobileLabels={{ open: "Select Date" }}
      />
    </div>
  );
};

export default ResponsivePicker;
