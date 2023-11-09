import "./style.css";


const Tasks = (props) => (
  <ul className="tasks">
    {props.tasks.map(task => (
      <li
      className={`task__item${task.done && props.hideDone ? " task__hidden" : ""}`}>
        <button className="task__button js-done"> 
          {task.done ? "✔" : ""}
          </button>
          <span className={`form__text ${task.done ? " task__decoration " : ""}`}>
          {task.content}
          </span>
          <button className="remove__button">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;