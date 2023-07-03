import React from 'react';
import './PortfolioPage.scss';
import './PortfolioPage.media.scss';
import Text from '../../components/Text/Text';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
	return (
		<div className="portfolioPage">
			<div className="container">
				<Text
					center={true}
					fz36={true}
					line={true}
					subtitle={'Мои работы'}
					title={'Портфолио'}
				/>
				<div className="portfolioPage__wrapper">
					<Link
						to="https://andreykuh96.github.io/HolaFashion/"
						className="portfolioPage__link portfolioPage__link_4"
						target="_blank"
						rel="noopener noreferrer"
					></Link>
					<Link
						to="https://andreykuh96.github.io/explorer/"
						className="portfolioPage__link portfolioPage__link_6"
						target="_blank"
						rel="noopener noreferrer"
					></Link>
					<Link
						to="https://andreykuh96.github.io/coffehouse/"
						className="portfolioPage__link portfolioPage__link_7"
						target="_blank"
						rel="noopener noreferrer"
					></Link>
					<Link
						to="https://andreykuh96.github.io/employsitytest/"
						className="portfolioPage__link portfolioPage__link_1"
						target="_blank"
						rel="noopener noreferrer"
					></Link>
					<Link
						to="https://andreykuh96.github.io/Flodesk/"
						className="portfolioPage__link portfolioPage__link_5"
						target="_blank"
						rel="noopener noreferrer"
					></Link>
					<Link
						to="https://andreykuh96.github.io/SpaceShop/"
						className="portfolioPage__link portfolioPage__link_2"
						target="_blank"
						rel="noopener noreferrer"
					></Link>
					<Link
						to="https://andreykuh96.github.io/marvel/"
						className="portfolioPage__link portfolioPage__link_3"
						target="_blank"
						rel="noopener noreferrer"
					></Link>
					<Link
						to="https://andreykuh96.github.io/projectReactHooks/"
						className="portfolioPage__link portfolioPage__link_8"
						target="_blank"
						rel="noopener noreferrer"
					></Link>
					<Link
						to="https://andreykuh96.github.io/projectReact/"
						className="portfolioPage__link portfolioPage__link_9"
						target="_blank"
						rel="noopener noreferrer"
					></Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioPage;
