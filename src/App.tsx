import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import Catalogue from "./pages/Catalogue";
import Help from "./pages/Help";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./hooks/useAuth";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TextsTable } from "./components/AdminTables";
import ManageResources from "./pages/ManageResources";
import ManageBorrowings from "./pages/ManageBorrowings";
import Statistics from "./pages/Statistics";
import ManageReaders from "./pages/ManageReaders";
import ManageWorkers from "./pages/ManageWorkers";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router>
					<Routes>
						<Route index element={<Login />} />
						<Route path="login" element={<Login />}/>
						<Route path="ayuda" element={<Help></Help>} />
						{/* Routes that use the layout */}
						<Route path="/" element={<Layout />}>
							<Route
								path="catalogo"
								element={
									<ProtectedRoute>
										<Catalogue />
									</ProtectedRoute>
								}
							/>
							<Route
								path="perfil"
								element={
									<ProtectedRoute>
										<Profile />
									</ProtectedRoute>
								}
							/>
							<Route
								path="admin-panel"
								element={
									<ProtectedRoute>
										<AdminPanel></AdminPanel>
									</ProtectedRoute>
								}
							/>
							<Route
								path="gestionar-recursos"
								element={
									<ProtectedRoute>
										<ManageResources/>
									</ProtectedRoute>
								}
							/>
							<Route
								path="gestionar-prestamos"
								element={
									<ProtectedRoute>
										<ManageBorrowings/>
									</ProtectedRoute>
								}
							/>
							<Route
								path="gestionar-lectores"
								element={
									<ProtectedRoute>
										<ManageReaders/>
									</ProtectedRoute>
								}
							/>
							<Route
								path="gestionar-trabajadores"
								element={
									<ProtectedRoute>
										<ManageWorkers/>
									</ProtectedRoute>
								}
							/>
							<Route
								path="estadisticas"
								element={
									<ProtectedRoute>
										<Statistics/>
									</ProtectedRoute>
								}
							/>
							<Route path="*" element={<NoPage />} />
						</Route>
					</Routes>
				</Router>
			</AuthProvider>
		</QueryClientProvider>
	);
}
export default App;
