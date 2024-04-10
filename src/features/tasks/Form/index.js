import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Input, Button } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimd = newTaskContent.trim();
    
    if (!contentTrimd) {
      return;
    }

    dispatch(addTask({
      content: contentTrimd,
      done: false,
      id: nanoid(),
    }));


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