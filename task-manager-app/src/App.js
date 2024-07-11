// U5223-1368

import React from 'react';
import TaskGenerator from './components/TaskGenerator';
import FancyText from './components/FancyText';

const App = () => {
  return (
    <div className="app">
      <FancyText title="Task Management and Motivation App" text="Welcome to a fresh day! You are en route to starting a productive an positive day." />
      <TaskGenerator />
    </div>
  );
}

export default App;
