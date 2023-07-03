import React from 'react';
import './SkillsPage.scss';
import './SkillsPage.media.scss';
import Text from '../../components/Text/Text';
import ItemSkill from '../../components/ItemSkill/ItemSkill';

const SkillsPage = () => {
	const items = [
		{
			icon: 'html',
			header: 'HTML5',
			descr: 'Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта',
		},
		{
			icon: 'css',
			header: 'CSS3',
			descr: 'Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!',
		},
		{
			icon: 'js',
			header: 'Java Script',
			descr: 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое',
		},
		{
			icon: 'react',
			header: 'React',
			descr: 'Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели',
		},
		{
			icon: 'node',
			header: 'Node.js',
			descr: 'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит',
		},
		{
			icon: 'git',
			header: 'GIT',
			descr: 'Это распределенная система управления версиями, которая позволяет отслеживать изменения в коде для достижения ваших целей.',
		},
		{
			icon: 'figma',
			header: 'Figma',
			descr: 'Это инновационный инструмент для дизайна интерфейсов, который позволяет создавать потрясающие визуальные решения.',
		},
	];

	return (
		<div className="skillPage">
			<div className="container">
				<Text
					title={'Навыки'}
					subtitle={'Что я использую в работе'}
					fz36={true}
					line={true}
					center={true}
				/>
				<div className="skillPage__cards">
					{items.map((item) => (
						<ItemSkill
							key={item.header}
							icon={item.icon}
							header={item.header}
							descr={item.descr}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsPage;
