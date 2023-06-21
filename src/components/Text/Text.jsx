import React from 'react';
import './Text.scss';
import './Text.media.scss';

const Text = ({ title, subtitle, fz36, line }) => {
	return (
		<div className={`text ${fz36 ? 'text_fz36' : ''}`}>
			<h2 className="text__title">{title}</h2>
			<h1 className="text__subtitle">{subtitle}</h1>
			{line ? <span></span> : null}
		</div>
	);
};

export default Text;
