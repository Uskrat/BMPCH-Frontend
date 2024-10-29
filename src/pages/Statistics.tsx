import { Container } from "react-bootstrap";
import MyMainContentHeader from "../components/MainContentHeader";

export default function Statistics() {

    const title = "Estadísticas";
    const subtitle = "";

    const header = MyMainContentHeader(title, subtitle, false);

    return(
        <>
            <Container fluid>
                {header}
            </Container>
        </>
    );
}