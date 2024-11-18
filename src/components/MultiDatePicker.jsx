import { useState } from "react";
import DatePicker from "react-multi-date-picker";

const MultiDatePicker = () => {
  const [values, setValues] = useState([]);

  return (
    <div>
      <h3>Multiple Date Picker</h3>
      <DatePicker multiple value={values} onChange={setValues} />
      <p>Selected Dates: {values.map(date => date.toString()).join(", ")}</p>
    </div>
  );
};

export default MultiDatePicker;
