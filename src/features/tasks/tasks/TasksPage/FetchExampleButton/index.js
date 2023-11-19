import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTask, selectLoading } from "../../tasksSlice";
import Button from "../Button";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button disabled={loading} onclick={() => dispatch(fetchExampleTask())}>
            {
                loading
                    ? "Ładowanie...."
                    : "Pobierz przykłądowe zadania"
            }
        </Button>
    );
};