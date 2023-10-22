import TasksPage from "./features/tasks/tasks/TasksPage";
import Task from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import {
    HashRouter
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { toAuthor, toTask, toTasks } from "./routes";
import Navigation from "./Navigation";

export default () => (
    <HashRouter>
        <Navigation />

        <Switch>
            <Route path={toTask()}>
                <Task />
            </Route>
            <Route path={toTask()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route>
                <Redirect to={toTaska()} />
            </Route>
        </Switch>
    </HashRouter>
);