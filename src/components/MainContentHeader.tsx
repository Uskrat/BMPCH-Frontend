import { Container, Stack } from "react-bootstrap";
import MySearchForm from "./SearchForm";

export default function MyMainContentHeader(title: string, subtitle: string, search: boolean) {

    const searchForm = MySearchForm();

    return (
        <>
            <Container>
                <Stack direction="horizontal" style={{paddingBottom: '20px'}}>
                    <Stack>
                        <h1 className="mb-0">{title}</h1>
                        <h4 style={{color: '#808080'}}>{subtitle}</h4>
                    </Stack>
                    {search && searchForm}
                </Stack>
            </Container>
        </>
    );
}