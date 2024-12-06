import { useContext, useState } from "react";

import { Container, ToastContainer, Toast, Tabs } from "react-bootstrap";

import { TextsTable, AuthorsTable } from "../../components/AdminTables";
import { NewTextForm } from "../../components/form/NewTextForm";
import { NewAuthorForm } from "../../components/form/NewAuthorForm";

import { generateAdminTabs, TabsData } from "../../components/Utils";
import { SearchBar } from "../../components/UIElements";

import CRUDContext from "../../hooks/CRUDContext";
import { EditorialsTable } from "../../components/tables/EditorialsTable";
import NewEditorialForm from "../../components/form/NewEditorialForm";

export default function TextsPage() {
	const [showNewTextModal, setShowNewTextModal] = useState(false);
	const [showNewAuthorModal, setShowNewAuthorModal] = useState(false);
	const [showNewEditorialModal, setShowNewEditorialModal] = useState(false);

	const [reloadTexts, setReloadTexts] = useState(false);
	const [reloadAuthors, setReloadAuthors] = useState(false);
	const [reloadEditorials, setReloadEditorials] = useState(false);

	const context = useContext(CRUDContext);

	const tabsData: TabsData[] = [
		{
			tabKey: "texts",
			tabName: "Textos",
			tabTitle: "Administrar textos",
			buttonTitle: "Agregar texto",
			showModal: showNewTextModal,
			setShowModal: setShowNewTextModal,
			modalTitle: "Añadir nuevo texto",
			reload: reloadTexts,
			setReload: setReloadTexts,
			tabForm: NewTextForm, // JSX.Element
			table: <TextsTable reload={reloadTexts} setReload={setReloadTexts} />, // JSX.Element
		},
		{
			tabKey: "authors",
			tabName: "Autores",
			tabTitle: "Administrar autores",
			buttonTitle: "Agregar autor",
			reload: reloadAuthors,
			setReload: setReloadAuthors,
			showModal: showNewAuthorModal,
			setShowModal: setShowNewAuthorModal,
			modalTitle: "Añadir nuevo autor",
			tabForm: NewAuthorForm, // JSX.Element
			table: <AuthorsTable reload={reloadAuthors} setReload={setReloadAuthors} />, // JSX.Element
		},
		{
			tabKey: "editorials",
			tabName: "Editoriales",
			tabTitle: "Administrar editoriales",
			buttonTitle: "Agregar editorial",
			reload: reloadEditorials,
			setReload: setReloadEditorials,
			showModal: showNewEditorialModal,
			setShowModal: setShowNewEditorialModal,
			modalTitle: "Añadir nueva editorial",
			tabForm: NewEditorialForm, // JSX.Element
			table: <EditorialsTable reload={reloadEditorials} setReload={setReloadEditorials} />, // JSX.Element
		},
	];

	return (
		<>
			<div className="my-4">
				<h1>Módulo de Administración de Textos</h1>
			</div>
			<Container>
				<SearchBar placeholder="Buscar libros" buttonText="Buscar"></SearchBar>
				<ToastContainer position="bottom-end" className="p-3">
					<Toast
						show={context?.entityCreationToast}
						onClose={() => context?.toggleToast()}
						bg={context?.entityToastData.variant}
						delay={3000}
						autohide
					>
						<Toast.Header>
							<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
							<strong className="me-auto">Módulo de Textos</strong>
						</Toast.Header>
						<Toast.Body>{context?.entityToastData.msg}</Toast.Body>
					</Toast>
				</ToastContainer>
				<Tabs>{generateAdminTabs(tabsData)}</Tabs>
			</Container>
		</>
	);
}
