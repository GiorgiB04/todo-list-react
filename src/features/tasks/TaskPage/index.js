import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znalezniono zadania 🦖"}
        body={
          !!task && (
            <>
              <strong>Ukońcono: </strong>
              {task.done ? "Tak" : "Nie"}
            </>
          )
        }
      />
    </Container>
  );
}

export default TaskPage;
