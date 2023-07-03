import React from 'react';
import './Skill.scss';
import './Skill.media.scss';

const Skill = ({ skillImg, name, className, changeSkillActive, id }) => {
	return (
		<div onClick={() => changeSkillActive(id)} className={className}>
			<div className="skill__img">
				<img src={skillImg} alt="first skill" />
			</div>
			<div className="skill__name">{name}</div>
		</div>
	);
};

export default Skill;
