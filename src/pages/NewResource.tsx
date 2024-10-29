import { Button, Container, Form } from "react-bootstrap";
import MyMainContentHeader from "../components/MainContentHeader";
import MyTextForm from "./TextForm";

export default function NewResource() {

    const title = "NUEVO RECURSO";
    const subtitle = "";

    const header = MyMainContentHeader(title, subtitle, false);

    const isbnForm = MyTextForm("ISBN", "...", true);

    return(
        <>
            <Container fluid>
                {header}
                <Container>
                    <h6 className="mb-3" style={{fontWeight: 'bold'}}>DATOS DEL RECURSO</h6>
                    {isbnForm}
                </Container>
            </Container>
        </>
    );
}