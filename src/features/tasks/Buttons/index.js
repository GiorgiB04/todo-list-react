import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({setAllDone}) => {
  const {hideDone, tasks} = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
        disabled={tasks.every(({ done }) => done)}
        onClick={setAllDone}
        >
          Ukończ wszystkie
        </Button>
    </Wrapper>
  )  
}

export default Buttons;