import './App.css';
import BasicDatePicker from './components/BasicDatePicker';
import CustomFormatPicker from './components/CustomFormatPicker';
import DateTimePicker from './components/DateTimePicker';
import DisabledDatesPicker from './components/DisabledDatesPicker';
import LocalizedDatePicker from './components/LocalizedDatePicker';
import MultiDatePicker from './components/MultiDatePicker';
import RangePicker from './components/RangePicker';
import ResponsivePicker from './components/ResponsivePicker';
import ThemedDatePicker from './components/ThemedDatePicker';

function App() {
  return (
    <div>
      <BasicDatePicker />
      <CustomFormatPicker/>
      <DateTimePicker/>
      <DisabledDatesPicker/>
      <LocalizedDatePicker/>
      <MultiDatePicker/>
      <RangePicker/>
      <ResponsivePicker/>
      <ThemedDatePicker/>
    </div>
  );
}

export default App;
