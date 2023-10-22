












return (
    <Container>
        <Header title="Szczegóły zadania" />
        <Section
            title={task ? task.content : "Sorka, nie ma takiego zadania "}
            body={!!task && (
                <>
                    <strong> Ukończone:</strong>: {task.done ? "Tak : "Nie"}

                </>
            )}
        />
    </Container>
