import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function MyTextForm(label: string, placeholder: string, o: boolean) {
    return(
        <>
            <div
                style={{
                    border: '1px solid #808080',
                    padding: '10px',
                    width: '40%',
                }}
            >
                <Form>
                    <Form.Group className="mb-0">
                        <Form.Label style={{color: '#808080'}}>
                            {label}
                            {o && <span style={{ color: 'red' }}>*</span>}
                        </Form.Label>
                        <Form.Control placeholder={placeholder} style={{color: '#000'}} />
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}