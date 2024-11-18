import { useState } from "react";
import DatePicker from "react-multi-date-picker";

const RangePicker = () => {
  const [range, setRange] = useState([]);

  return (
    <div>
      <h3>Range Picker</h3>
      <DatePicker range value={range} onChange={setRange} />
      <p>Selected Range: {range.map(date => date?.toString()).join(" - ")}</p>
    </div>
  );
};

export default RangePicker;
