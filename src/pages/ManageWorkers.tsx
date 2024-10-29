import { Container } from "react-bootstrap";
import MyMainContentHeader from "../components/MainContentHeader";
import { MyUsersTable } from "../components/WorkersTable";

export default function ManageWorkers() {

    const title = "TRABAJADORES";
    const subtitle = "Listado de trabajadores";

    const header = MyMainContentHeader(title, subtitle, true);

    return(
        <>
            <Container fluid>
                {header}
                <MyUsersTable/>
            </Container>
        </>
    );
}