import React, { useEffect, useState } from 'react';
import './Header.scss';
import './Header.media.scss';
import { Link, NavLink } from 'react-router-dom';
import headerLogo from '../../img/mac.png';

const Header = ({ headerActive, handleBurgerActive, overflow }) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.matchMedia('(max-width: 768px)').matches) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.addEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		const toggleOverflow = () => {
			if (overflow && window.matchMedia('(max-width: 768px)').matches) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		};

		toggleOverflow();

		window.addEventListener('resize', toggleOverflow);

		return () => window.addEventListener('resize', toggleOverflow);
	}, [overflow]);

	return (
		<header
			className={`header ${isMobile ? 'header__mobile' : ''} ${
				headerActive ? 'header_active' : ''
			}`}
		>
			<div className="container">
				<Link to="/" className="header__logo">
					<img src={headerLogo} alt="logo" />
				</Link>
				<menu className="header__menu menu">
					<ul className="menu__list">
						<li className="menu__item">
							<NavLink
								onClick={() => handleBurgerActive()}
								to="https://andreykuh96.github.io/ReactPortfolio/about"
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
								onClick={() => handleBurgerActive()}
								className={({ isActive }) =>
									isActive
										? 'menu__link_active'
										: 'menu__link'
								}
								to="https://andreykuh96.github.io/ReactPortfolio/experience"
							>
								мой опыт
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								onClick={() => handleBurgerActive()}
								className={({ isActive }) =>
									isActive
										? 'menu__link_active'
										: 'menu__link'
								}
								to="https://andreykuh96.github.io/ReactPortfolio/skills"
							>
								мои навыки
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								onClick={() => handleBurgerActive()}
								className={({ isActive }) =>
									isActive
										? 'menu__link_active'
										: 'menu__link'
								}
								to="https://andreykuh96.github.io/ReactPortfolio/portfolio"
							>
								мои работы
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								onClick={() => handleBurgerActive()}
								className={({ isActive }) =>
									isActive
										? 'menu__link_active'
										: 'menu__link'
								}
								to="https://andreykuh96.github.io/ReactPortfolio/contacts"
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
