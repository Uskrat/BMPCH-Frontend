import { Container } from "react-bootstrap";
import MyMainContentHeader from "../components/MainContentHeader";

export default function ManageResources() {

    const title = "PRÉSTAMOS";
    const subtitle = "Listado de préstamos";

    const header = MyMainContentHeader(title, subtitle, true);

    return(
        <>
            <Container fluid>
                {header}
            </Container>
        </>
    );
}