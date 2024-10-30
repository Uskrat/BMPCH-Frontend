//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { getMe, UserAPIObject } from "../api/api";
import { useAuth } from "../hooks/useAuth";

function UserInformation() {
	const { authenticated } = useAuth();

	if (authenticated() == false) {
		return <Nav.Link href="/login">Ingresar</Nav.Link>;
	}

	const { isLoading, isError, data } = useQuery<UserAPIObject, Error>({
		queryKey: ["getAuthenticatedUser"],
		queryFn: getMe,
	});

	if (isLoading)
		return (
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Cargando...</span>
			</Spinner>
		);
	else if (isError) return <b>Error al cargar</b>;

	return (
		<NavDropdown title={data?.document} id="basic-nav-dropdown">
			<Link to="/perfil">
				<NavDropdown.Item href="/perfil">Mi Perfil</NavDropdown.Item>
			</Link>
			<Link to="/logout">
				<NavDropdown.Item href="/logout">Cerrar Sesión</NavDropdown.Item>
			</Link>
		</NavDropdown>
	);
}

export default function MyNavbar() {
	const x = (d: string, l: string) => {
		return {
			display: d,
			link: l,
		};
	};

	const navbarTitle = "Biblioteca Municipal de Chiclayo";

	const navbarLinks = [
		//x("Bib. MPCH", "/"),
		x("Panel Admin", "/admin-panel"),
		x("Perfil", "/perfil"),
		x("Catálogo", "/catalogo"),
		x("Ayuda", "/ayuda"),
	];

	//console.log(navbarLinks);

	const tsxLinks = navbarLinks.map((link, i) => (
		<Nav.Link key={i} href={link.link}>
			{link.display}
		</Nav.Link>
	));

	// ../assets/Escudo_de_Armas_la_Ciudad_de_Chiclayo.png
	return (
		<>
			<Navbar expand="md" sticky="top" className="bg-body-tertiary">
				<Container fluid>
					<Navbar.Brand href="/">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Escudo_de_Armas_la_Ciudad_de_Chiclayo.png/1200px-Escudo_de_Armas_la_Ciudad_de_Chiclayo.png"
							alt="Logo de la Municipalidad Provincial de Chiclayo"
							width={40}
							height={40}
						/>
						{navbarTitle}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />

					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-md`}
						aria-labelledby={`offcanvasNavbarLabel-expand-md`}
						placement="start"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>{navbarTitle}</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								{tsxLinks}
								<UserInformation></UserInformation>
							</Nav>
							<Form className="d-flex"></Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}
