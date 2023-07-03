import React from 'react';
import './SkillDescription.scss';
import './SkillDescription.media.scss';

const SkillDescription = ({ title, body, footer, className }) => {
	return (
		<div className={className}>
			<div className="descr__title">{title}</div>
			<div className="descr__body">{body}</div>
			<div className="descr__footer">{footer}</div>
		</div>
	);
};

export default SkillDescription;
