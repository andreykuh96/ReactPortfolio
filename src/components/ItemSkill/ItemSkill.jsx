import React from 'react';
import './ItemSkill.scss';

const ItemSkill = ({ icon, header, descr }) => {
	return (
		<div className="itemSkill">
			<div className="itemSkill__icon">
				<span className={`icon-${icon}`}></span>
			</div>
			<div className="itemSkill__header">{header}</div>
			<div className="itemSkill__descr">{descr}</div>
		</div>
	);
};

export default ItemSkill;
