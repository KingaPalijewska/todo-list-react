import React from 'react';
import Section from "../../../../common/Section";
import Header from "../../../../common/Header";
import Container from "../../../../common/Container";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={!!task && (
                    <>
                        <strong>Ukończono:</strong>:{task.done ? "Tak" : "Nie"} </>
                )}
            />
        </Container>
    );
}

export default TaskPage;










