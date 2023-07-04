import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioLink = ({ path, className }) => {
	return (
		<Link
			to={path}
			className={`portfolioPage__link ${className}`}
			target="_blank"
			rel="noopener noreferrer"
		></Link>
	);
};

export default PortfolioLink;
