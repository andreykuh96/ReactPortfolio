import React from 'react';
import './Layout.scss';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div className="wrapper">
			<header className="header">
				<menu className="menu">
					<ul className="menu__list">
						<li className="menu__item">
							<NavLink to="/about" className="menu__link">
								про меня
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink to="/experience" className="menu__link">
								мой опыт
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink to="/skills" className="menu__link">
								мои навыки
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink to="/portfolio" className="menu__link">
								мои работы
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink to="/contacts" className="menu__link">
								контакты
							</NavLink>
						</li>
					</ul>
				</menu>
			</header>
			<main className="main">
				<div className="main__wrapper">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default Layout;
