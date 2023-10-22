import React from 'react';
import Section from "../../../../common/Section";
import Header from "../../../../common/Header";
import Container from "../../../../common/Container";

function TaskPage() {
    const { id } = useParams();

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={id}
                body={<>nana</>}
            />
        </Container>
    );
}

export default TaskPage;










