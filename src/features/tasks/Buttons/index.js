import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
  fetchExampleTask,
} from "../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const IsEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTask())}>
        Pobierz przykłądowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={IsEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>

      )}
    </Wrapper>
  )
};

export default Buttons;