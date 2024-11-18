import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { useState } from 'react';

export default function LocalizedDatePicker() {
  const [value, setValue] = useState(new Date());
  return (
    <div>
      <h3>Localized Date Picker (Persian)</h3>
      <DatePicker
        value={value}
        onChange={setValue}
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}
