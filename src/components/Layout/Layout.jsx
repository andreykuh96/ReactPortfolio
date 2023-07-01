import React, { useState } from 'react';
import './Layout.scss';
import './Layout.media.scss';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
	const [burgerActive, setBurgerActive] = useState('');
	const [headerActive, setHeaderActive] = useState('');
	const [overflow, setOverflow] = useState(null);

	const handleBurgerActive = () => {
		setBurgerActive(!burgerActive ? 'burger_active' : '');
		setHeaderActive(!headerActive ? 'header_active' : '');
		setOverflow(burgerActive ? false : true);
	};

	const toggleOverflow = () => {
		if (overflow) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	};

	toggleOverflow();

	return (
		<div className="wrapper">
			<div
				onClick={() => handleBurgerActive()}
				className={`burger ${burgerActive}`}
			>
				<span></span>
			</div>
			<Header
				handleBurgerActive={handleBurgerActive}
				headerActive={headerActive}
			/>
			<main className="main">
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
