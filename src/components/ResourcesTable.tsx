import { useQuery } from "@tanstack/react-query";
import { getAllTexts, TextAPIObject } from "../api/api";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import MyEditButton from "./EditButton";
import MyDeleteButton from "./DeleteButton";

function buildTableContent<T extends Object>(
	colspan: number,
	isLoading: boolean,
	isError: boolean,
	data: T[] | undefined,
	mapFn: any
) {
	if (isLoading)
		return (
			<tr>
				<td colSpan={colspan}>Cargando recursos...</td>
			</tr>
		);

	if (isError)
		return (
			<tr>
				<td colSpan={colspan}>Error al cargar recursos.</td>
			</tr>
		);

	return data?.map(mapFn);
}

export function MyResourcesTable() {
	const {
		isLoading,
		isError,
		data: books,
	} = useQuery<TextAPIObject[], Error>({
		queryKey: ["getAllTexts"],
		queryFn: getAllTexts,
	});

	/*
	 */
	const tableContent: any = buildTableContent(9, isLoading, isError, books, (book: TextAPIObject) => (
		<tr key={book.id}>
			<td>{book.id}</td>
			<td>{book.title}</td>
			<td>{book.editorial.name}</td>
			<td>{book.type.typename}</td>
			<td>{book.publicationDate.toString()}</td>
			<td>{book.pages}</td>
			<td>{book.edition}</td>
			<td>{book.volume}</td>
			<td>
				<MyEditButton/>
			</td>
			<td>
				<MyDeleteButton/>
			</td>
		</tr>
	));

	return (
		<>
			<Table striped bordered hover style={{ tableLayout: 'fixed', width: '100%' }}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Título</th>
						<th>Editorial</th>
						<th>Tipo</th>
						<th>Fecha Publicación</th>
						<th>Páginas</th>
						<th>Edición</th>
						<th>Volumen</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>{tableContent}</tbody>
			</Table>
		</>
	);
}