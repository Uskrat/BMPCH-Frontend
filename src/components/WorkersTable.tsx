import { useQuery } from "@tanstack/react-query";
import { getAllUsers, UserAPIObject } from "../api/api";
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

function firstN(src: string, n: number) {
	return src.slice(0, n) + "...";
}

export function MyUsersTable() {
	const { isLoading, isError, data } = useQuery<UserAPIObject[], Error>({
		queryKey: ["getAllUsers"],
		queryFn: getAllUsers,
	});

	/*
	 */

	const tableContent: any = buildTableContent(6, isLoading, isError, data, (user: UserAPIObject) => (
		<tr key={user.userId}>
			<td>{user.userId}</td>
			<td>{user.roleId}</td>
			<td>{user.documentTypeId}</td>
			<td>{user.document}</td>
			<td>{firstN(user.psk, 12)}</td>
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
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>Rol</th>
						<th>Tipo de Documento</th>
						<th>Documento</th>
						<th>PSK</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>{tableContent}</tbody>
			</Table>
		</>
	);
}
