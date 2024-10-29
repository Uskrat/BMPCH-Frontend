import { useState } from "react";
import MyNavbar from "../components/Navbar";

import { Outlet } from "react-router-dom";
import MySidebar from "../components/Sidebar";

function Layout() {
	const [showSidebar, setShowSidebar] = useState(true);

	const sidebarWidth = showSidebar ? '200px' : '0';

	const handleToggleSidebar = () => setShowSidebar(prev => !prev);
	const handleCloseSidebar = () => setShowSidebar(false);

	return (
		<>
			<div className="main">
				<MyNavbar onToggleSidebar={handleToggleSidebar}/>
				<div style={{minHeight: '100vh'}}>
					<MySidebar show={showSidebar} onClose={handleCloseSidebar}/>
					<div
						style={{
							paddingTop:'50px',
							flexGrow: 1,
							height:'100%',
							marginLeft: sidebarWidth,
							transition: 'margin-left 0.3s ease'}}
					>
						<div className="main-container">
							<Outlet/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Layout;
