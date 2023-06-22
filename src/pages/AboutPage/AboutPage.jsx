import React from 'react';
import './AboutPage.scss';
import './AboutPage.media.scss';
import Text from '../../components/Text/Text';
import Card from '../../components/Card/Card';

const AboutPage = () => {
	return (
		<div className="AboutPage">
			<div className="container">
				<div className="AboutPage__img"></div>
				<div className="AboutPage__wrapper">
					<Text
						title="Про меня"
						subtitle="Меня зовут Андрей"
						fz36
						line
					/>
					<p className="AboutPage__about">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum
					</p>
					<div className="AboutPage__cards">
						<Card
							iconName="icon-web"
							title="Web-разработка"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua."
						/>
						<Card
							iconName="icon-mobile"
							title="Разработка приложений"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua."
						/>
						<Card
							iconName="icon-design"
							title="UI/UX Design"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
