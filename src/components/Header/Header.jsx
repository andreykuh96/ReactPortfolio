import React from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import headerLogo from '../../img/mac.png';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<Link to="/" className="header__logo">
					<img src={headerLogo} alt="logo" />
				</Link>
				<menu className="header__menu menu">
					<ul className="menu__list">
						<li className="menu__item">
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive
										? 'menu__link_active'
										: 'menu__link'
								}
							>
								про меня
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'menu__link_active'
										: 'menu__link'
								}
								to="/experience"
							>
								мой опыт
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'menu__link_active'
										: 'menu__link'
								}
								to="/skills"
							>
								мои навыки
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'menu__link_active'
										: 'menu__link'
								}
								to="/portfolio"
							>
								мои работы
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'menu__link_active'
										: 'menu__link'
								}
								to="/contacts"
							>
								контакты
							</NavLink>
						</li>
					</ul>
				</menu>
			</div>
		</header>
	);
};

export default Header;
