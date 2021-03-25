
import './App.css';
import Calendar from './components/Calendar/Calendar.jsx';

import {} from 'date-fns';

function App() {
  return (
    <div className="App">
      <Calendar  currentDate={new Date(2021, 2, 24)} selectedDate = {new Date(2021, 2, 25)}></Calendar>
    </div>
  );
}

export default App;
