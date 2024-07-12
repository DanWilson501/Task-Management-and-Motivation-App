// U5223-1368

import React from 'react';
import TaskGenerator from './components/TaskGenerator';
import FancyText from './components/FancyText';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <FancyText title="Task Management and Motivation App" text="Welcome to a fresh new day! Be ready to start a productivea positive day." />
      <TaskGenerator />
    </div>
  );
}

export default App;
