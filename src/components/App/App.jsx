import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ExperiencePage from '../../pages/ExperiencePage/ExperiencePage';
import PortfolioPage from '../../pages/PortfolioPage/PortfolioPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import SkillsPage from '../../pages/SkillsPage/SkillsPage';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="experience" element={<ExperiencePage />} />
					<Route path="skills" element={<SkillsPage />} />
					<Route path="portfolio" element={<PortfolioPage />} />
					<Route path="contacts" element={<ContactsPage />} />
					<Route path="*" element={<HomePage />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
