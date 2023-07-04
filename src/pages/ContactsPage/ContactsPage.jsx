import React from 'react';
import './ContactsPage.scss';
import './ContactsPage.media.scss';
import img_call from '../../img/call.png';
import Text from '../../components/Text/Text';
import { Link } from 'react-router-dom';

const ContactsPage = () => {
	return (
		<div className="contacts">
			<div className="container">
				<Text
					title={'Контакты'}
					subtitle={'Свяжитесь со мной'}
					fz36={true}
					line={true}
				/>
				<div className="contacts__img">
					<span className="contacts__arrow contacts__arrow_1 icon-arrow"></span>
					<span className="contacts__arrow contacts__arrow_2 icon-arrow"></span>
					<span className="contacts__arrow contacts__arrow_3 icon-arrow"></span>
					<span className="contacts__arrow contacts__arrow_4 icon-arrow"></span>
					<span className="contacts__arrow contacts__arrow_click">
						Click Me
					</span>
					<Link
						to="https://t.me/andreykuhtov"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="contacts__icon contacts__icon_telegram icon-telegram"></span>
					</Link>
					<Link
						to="https://www.instagram.com/andrey.kuh/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="contacts__icon contacts__icon_instagram icon-instagram"></span>
					</Link>
					<Link
						to="https://github.com/andreykuh96"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="contacts__icon contacts__icon_github icon-github"></span>
					</Link>
					<Link
						to="https://vk.com/andrey_kuh"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="contacts__icon contacts__icon_vk icon-vk"></span>
					</Link>
					<img src={img_call} alt="call me" />
				</div>
			</div>
		</div>
	);
};

export default ContactsPage;
