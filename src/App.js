import TasksPage from "./features/tasks/TasksPage";
import Task from "./features/tasks/TaskPage";
import AuthorPage from "./features/taska/author/AuthorPage";
import {
    HashRouter,
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
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);