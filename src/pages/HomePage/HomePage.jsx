import React from 'react';
import './HomePage.scss';
import './HomePage.media.scss';
import { Link } from 'react-router-dom';
import imgWelcome from '../../img/hi.png';

const HomePage = () => {
	return (
		<div className="HomePage">
			<div className="container">
				<div className="HomePage__about">
					<div className="HomePage__text">
						<h2 className="HomePage__title">Меня зовут Андрей</h2>
						<h1 className="HomePage__subtitle">
							Я web-разработчик из города Витебск
						</h1>
					</div>
					<Link to="portfolio" className="HomePage__btn">
						Портфолио
					</Link>
					<Link to="/about" className="HomePage__btn">
						Про меня
					</Link>
				</div>
				<div className="HomePage__img" />
			</div>
		</div>
	);
};

export default HomePage;
