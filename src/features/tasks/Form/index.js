import { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimd = newTaskContent.trim();
    if (!contentTrimd) {
      return;
    }
    addNewTask(contentTrimd);
    setNewTaskContent("");
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input 
        className="form__input"
        placeholder="Co jest do zrobenja?"
        value={newTaskContent}
        onChange={({target}) => setNewTaskContent(target.value)}
        />
        <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;