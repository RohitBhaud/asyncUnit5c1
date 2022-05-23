import React from "react";
import styles from "./taskHeader.module.css";
import data from '../../data/tasks.json'
const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = data.length;
  let unCompletedTask =data.filter((e)=>e.done==false).length ;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
     unCompletedTask- <b data-cy="header-remaining-task">{unCompletedTask}</b>
     totalTask- <b data-cy="header-total-task">{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
