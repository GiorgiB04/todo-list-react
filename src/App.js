import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { Item, List, ListWraper, StyledNavLink } from "./styled";

export default () => (
  <HashRouter>
    <nav>
      <ListWraper>
        <List>
          <Item>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to="/author">O autorze</StyledNavLink>
          </Item>
        </List>
      </ListWraper>

      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/author">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania"></Redirect>
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
