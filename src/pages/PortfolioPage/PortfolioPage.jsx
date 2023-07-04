import React, { Suspense, lazy } from 'react';
import './PortfolioPage.scss';
import './PortfolioPage.media.scss';
import Text from '../../components/Text/Text';
import Spinner from 'react-svg-spinner';

const PortfolioLink = lazy(() =>
	import('../../components/PortfolioLink/PortfolioLink')
);

const PortfolioPage = () => {
	const links = [
		{
			id: 4,
			path: 'https://andreykuh96.github.io/HolaFashion/',
			className: 'portfolioPage__link_4',
		},
		{
			id: 6,
			path: 'https://andreykuh96.github.io/explorer/',
			className: 'portfolioPage__link_6',
		},
		{
			id: 7,
			path: 'https://andreykuh96.github.io/coffehouse/',
			className: 'portfolioPage__link_7',
		},
		{
			id: 1,
			path: 'https://andreykuh96.github.io/employsitytest/',
			className: 'portfolioPage__link portfolioPage__link_1',
		},
		{
			id: 5,
			path: 'https://andreykuh96.github.io/Flodesk/',
			className: 'portfolioPage__link portfolioPage__link_5',
		},
		{
			id: 2,
			path: 'https://andreykuh96.github.io/SpaceShop/',
			className: 'portfolioPage__link portfolioPage__link_2',
		},
		{
			id: 3,
			path: 'https://andreykuh96.github.io/marvel/',
			className: 'portfolioPage__link portfolioPage__link_3',
		},
		{
			id: 8,
			path: 'https://andreykuh96.github.io/projectReactHooks/',
			className: 'portfolioPage__link portfolioPage__link_8',
		},
		{
			id: 9,
			path: 'https://andreykuh96.github.io/projectReact/',
			className: 'portfolioPage__link portfolioPage__link_9',
		},
	];

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
					{links.map((item) => (
						<Suspense
							key={item.id}
							fallback={
								<Spinner size="200px" color="deepskyblue" />
							}
						>
							<PortfolioLink
								key={item.id}
								path={item.path}
								className={`portfolioPage ${item.className}`}
							/>
						</Suspense>
					))}
				</div>
			</div>
		</div>
	);
};

export default PortfolioPage;
