import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  }

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input 
      className="form__input"
      placeholder="Co jest do zrobenja?"
      value={newTaskContent}
      onChange={({target}) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;