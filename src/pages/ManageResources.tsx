import { Container } from "react-bootstrap";
import { MyResourcesTable } from "../components/ResourcesTable";
import MyMainContentHeader from "../components/MainContentHeader";

export default function ManageResources() {

    const title = "RECURSOS";
    const subtitle = "Listado de recursos";

    const header = MyMainContentHeader(title, subtitle, true);

    return(
        <>
            <Container fluid>
                {header}
                <MyResourcesTable/>
            </Container>
        </>
    );
}