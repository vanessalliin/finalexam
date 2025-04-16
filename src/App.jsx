import React from 'react';
import {
  Question1,
  Question2,
  ColourMixTests,
  LargestProductTests,
  DayOfWeekTests,
  PayRaiseTests,
  LeapYearTests
} from './components.jsx';

function App() {
  return (
    <div>
      <Question1 />
      <Question2 />
      <ColourMixTests />
      <LargestProductTests />
      <DayOfWeekTests />
      <PayRaiseTests />
      <LeapYearTests />
    </div>
  );
}

export default App;
