import React from "react";
import { AddTask } from "./AddTask";
import Task from "./Task/Task";

import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { Tasks } from "./Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */} <TaskHeader/>
      {/* Add Task */}<AddTask/>
      {/* Tasks */}<Tasks/>
    </div>
  );
};

export default TaskApp;
