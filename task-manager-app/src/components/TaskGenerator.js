import React, { useState } from 'react';
import tasks from '../tasks';
import FancyText from './FancyText';

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
      <FancyText title={false} text="Well done! Push ahead and today will be great!" />
    </div>
  );
}

export default TaskGenerator;
