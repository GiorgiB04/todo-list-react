import "./style.css";


const Tasks = ({tasks, hideDone, removeTask}) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
      className={`task__item${task.done && hideDone ? " task__hidden" : ""}`}>
        <button className="task__button js-done"> 
          {task.done ? "✔" : ""}
          </button>
          <span className={`form__text ${task.done ? " task__decoration " : ""}`}>
          {task.content}
          </span>
          <button className="remove__button" 
          onClick={() => removeTask(task.id)}>
          🗑
          </button>
      </li>
    ))}
  </ul>
);

export default Tasks;