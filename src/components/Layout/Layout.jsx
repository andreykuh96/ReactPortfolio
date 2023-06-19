import React from 'react';
import './Layout.scss';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<div className="container">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default Layout;
