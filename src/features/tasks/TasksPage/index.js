import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import TaskList from "./TaskList";
import Form from "./Form";
import Buttons from "./Buttons";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
