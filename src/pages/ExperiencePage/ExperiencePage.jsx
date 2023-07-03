import React, { useState } from 'react';
import './ExperiencePage.scss';
import './ExperiencePage.media.scss';
import Text from '../../components/Text/Text';
import skill_1 from '../../img/skill_1.png';
import Skill from '../../components/Skill/Skill';
import SkillDescription from '../../components/SkillDescription/SkillDescription';

const ExperiencePage = () => {
	const skills = [
		{
			id: 1,
			name: 'Ninja Coding',
			descr: '"Ninja Coding" - уникальная способность в виртуальном мире программирования, которая позволяет стать невероятно эффективным и точным разработчиком. Активация этой способности позволяет писать больше кода за краткое время, создавать оптимизированные и элегантные решения, а также легко преодолевать сложности программирования. "Ninja Coding" - ключ к мастерству в разработке программного обеспечения.',
			footer: 'Использовать стоит в тех случаях, когда требуется ускорить разработку программного обеспечения',
		},
		{ id: 2, name: 'Ninja Coding', descr: '2222', footer: '22' },
		{ id: 3, name: 'Ninja Coding', descr: '3333', footer: '33' },
		{ id: 4, name: 'Ninja Coding', descr: '4444', footer: '44' },
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
							skillImg={skill_1}
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
