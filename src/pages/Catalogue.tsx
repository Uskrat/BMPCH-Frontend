import { Card } from "react-bootstrap";
import BookGroup from "../components/BookGroup";
import MyMainContentHeader from "../components/MainContentHeader";

function Catalogue() {

	const title = "INICIO";
    const subtitle = "";

    const header = MyMainContentHeader(title, subtitle, true);

	return (
		<>
			{header}
			<Card>
				<Card.Body>
					<BookGroup></BookGroup>
				</Card.Body>
			</Card>
		</>
	);
}

export default Catalogue;
