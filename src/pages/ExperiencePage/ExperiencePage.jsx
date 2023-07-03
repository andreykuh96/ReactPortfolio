import React, { useState } from 'react';
import './ExperiencePage.scss';
import './ExperiencePage.media.scss';
import Text from '../../components/Text/Text';
import skill_1 from '../../img/skill_1.png';
import skill_2 from '../../img/skill_2.png';
import skill_3 from '../../img/skill_3.png';
import skill_4 from '../../img/skill_4.png';
import Skill from '../../components/Skill/Skill';
import SkillDescription from '../../components/SkillDescription/SkillDescription';

const ExperiencePage = () => {
	const skills = [
		{
			id: 1,
			img: skill_1,
			name: 'Ninja Coding',
			descr: '"Ninja Coding" - уникальная способность в виртуальном мире программирования, которая позволяет стать невероятно эффективным и точным разработчиком. Активация этой способности позволяет писать больше кода за краткое время, создавать оптимизированные и элегантные решения, а также легко преодолевать сложности программирования. "Ninja Coding" - ключ к мастерству в разработке программного обеспечения.',
			footer: 'Использовать стоит в тех случаях, когда требуется ускорить разработку программного обеспечения',
		},
		{
			id: 2,
			img: skill_2,
			name: 'Fixing Bugs',
			descr: '"Fixing Bugs" - способность разработчика, которая позволяет обнаруживать и исправлять ошибки, недоработки и проблемы. При активации "Fixing Bugs", разработчик мгновенно устраняет все программные баги и глюки, восстанавливая работоспособность. Кроме того, "Fixing Bugs" может улучшать производительность, повышать безопасность и давать команде разработчика дополнительные бонусы.',
			footer: 'Используйте Fixing Bugs, чтобы обеспечить плавное и безопасное окружение для всех участников. Покажите свои навыки в исправлении программных проблем и доставьте удовольствие программирования без багов!',
		},
		{
			id: 3,
			img: skill_3,
			name: 'Code Optimization',
			descr: '"Code Optimization" - это способность, которая позволяет разработчику программного кода мастерски оптимизировать свои навыки написания кода. Когда активируется эта способность, разработчик становится способным создавать код, который работает более эффективно, использует меньше ресурсов и выполняется быстрее. Благодаря "Code Optimization", разработчик может преодолевать любые препятствия, связанные с производительностью кода, и создавать программы, которые работают наивысшей эффективностью.',
			footer: 'Используя эту способность "Code Optimization" мгновенно преображет свой код, делая его оптимальным и эффективным.',
		},
		{
			id: 4,
			img: skill_4,
			name: 'Finding Information',
			descr: '"Finding Information" - это способность, которая дарует разработчику уникальную способность быстро и точно находить необходимую информацию. Когда активируется эта способность, разработчик становится экспертом в области поиска знаний, мгновенно обнаруживая полезные ресурсы и источники информации. Благодаря "Finding Information", разработчик может легко разрешать сложные задачи, находить ответы на вопросы и узнавать о последних тенденциях в своей области. Эта способность позволяет разработчику добывать ценные знания и стать настоящим мастером во вселенной программирования.',
			footer: 'Используя эту способность "Finding Information" я становлюсь настоящим мастером поиска информации. Благодаря своему непревзойденному интуитивному навыку, я мгновенно обнаруживаю источники знаний, которые другие разработчики могут упустить.',
		},
	];

	const [skillActive, setSkillActive] = useState(1);

	const changeSkillActive = (id) => {
		setSkillActive(id);
	};

	return (
		<div className="exp">
			<div className="container">
				<Text
					title="Опыт"
					subtitle="Чем я буду полезен"
					line={true}
					fz36={true}
					center={true}
				/>
				<div className="exp__skill">
					{skills.map((icon) => (
						<Skill
							id={icon.id}
							changeSkillActive={changeSkillActive}
							className={
								skillActive === icon.id
									? 'skill skill_active'
									: 'skill'
							}
							name={icon.name}
							key={icon.id}
							skillImg={icon.img}
						/>
					))}
				</div>
				<div className="exp__skillDescription">
					{skills.map((descr) => (
						<SkillDescription
							className={
								skillActive === descr.id
									? 'descr descr_active'
									: 'descr'
							}
							key={descr.id}
							title={descr.name}
							body={descr.descr}
							footer={descr.footer}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperiencePage;
