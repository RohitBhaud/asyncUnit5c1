import React from "react";
import styles from "./tasks.module.css";
import data from '../../data/tasks.json'
import Task from "../Task/Task";

const Tasks = () => {
  // console.log(data,"hhh")
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {data.map((e,i)=>< Task e={e} key={i}/>)}
        {/* Task List */}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
