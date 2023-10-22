import { useDispatch, useSeletor } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import Button from "../Button";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button disabled={loading} onclick={() => dispatch(fetchExampleTasks())}>
            {
                loading
                    ? "Ładowanie...."
                    : "Pobierz przykłądowe zadania"
            }
        </Button>
    );
};