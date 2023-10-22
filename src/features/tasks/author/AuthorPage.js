import Container from "../../../common/Container"
import Section from "../../../common/Section";
import Header from "../../../common/Header";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Kinga Palijewska"
            body={
                <>
                    <p>
                        <strong> Moją ogromną pasją jest</strong>
                    </p>
                    <p>
                        Nie zdajecie sobie sprawy<em>jak bardzo</em>muzyka
                    </p>
                </>
            }
        />
    </Container>
);