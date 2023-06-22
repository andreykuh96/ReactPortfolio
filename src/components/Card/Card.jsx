import React from 'react';
import './Card.scss';
import '../../sass/icon-fonts.scss';

const Card = ({ title, text, iconName }) => {
	return (
		<div className="AboutPage__card card">
			<span className={iconName}></span>
			<div className="card__text">
				<div className="card__title">{title}</div>
				<div className="card__description">{text}</div>
			</div>
		</div>
	);
};

export default Card;
