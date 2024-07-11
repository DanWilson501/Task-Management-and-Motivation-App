import React, { useState } from 'react';
import tasks from '../tasks.js';


const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const handleNextTask = () => {
    setCurrentTaskIndex((currentTaskIndex + 1) % tasks.length);
  };

  const currentTask = tasks[currentTaskIndex];
  const status = currentTask.isCompleted ? 'Completed ✔' : 'Pending';

  return (
    <div className="task-generator">
      <div className="task">
        <span>{currentTask.name}</span>
        <span>{status}</span>
      </div>
      <button onClick={handleNextTask}>Next Task</button>
    </div>
  );
}

export default TaskGenerator;
