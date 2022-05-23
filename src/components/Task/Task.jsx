import React from "react";
import { Counter } from "../Counter";
import styles from "./task.module.css";

const Task = ({e}) => {
  // console.log(e)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
     {e.done? <input type="checkbox" data-cy="task-checkbox" checked />: <input type="checkbox" data-cy="task-checkbox"  />}
      <div data-cy="task-text">{e.text}</div>
      {/* Counter here */} <Counter e={e}/>
      <button data-cy="task-remove-button">delete</button>
    </li>
  );
};

export default Task;
