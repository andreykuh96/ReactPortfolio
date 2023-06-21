import React from 'react';
import './HomePage.scss';
import './HomePage.media.scss';
import { Link } from 'react-router-dom';
import Text from '../../components/Text/Text';

const HomePage = () => {
	return (
		<div className="HomePage">
			<div className="container">
				<div className="HomePage__about">
					<Text
						title="Меня зовут Андрей"
						subtitle="Я web-разработчик из города Витебск"
					/>
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
