import { useState } from "react";
import DatePicker from "react-multi-date-picker";

const DisabledDatesPicker = () => {
  const [value, setValue] = useState(new Date());
  const disabledDates = [new Date(2024, 0, 1), new Date(2024, 11, 25)];

  return (
    <div>
      <h3>Disable Specific Dates</h3>
      <DatePicker value={value} onChange={setValue} disabled={disabledDates} />
    </div>
  );
};

export default DisabledDatesPicker;
