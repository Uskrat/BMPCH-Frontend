import { Container } from "react-bootstrap";
import MyMainContentHeader from "../components/MainContentHeader";

export default function ManageReaders() {

    const title = "LECTORES";
    const subtitle = "Listado de lectores";

    const header = MyMainContentHeader(title, subtitle, true);

    return(
        <>
            <Container fluid>
                {header}
            </Container>
        </>
    );
}