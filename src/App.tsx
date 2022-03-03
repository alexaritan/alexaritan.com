import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationBar } from './navigation/NavigationBar';
import { NavigationDrawer } from './navigation/NavigationDrawer';
import { Home } from './Home';
import { Example } from './albums/Example';

export const App = () => {
	const [navIsOpen, setNavOpen] = useState(false);

	return (
		<>
			<NavigationBar
				navIsOpen={navIsOpen}
				setNavOpen={() => setNavOpen(!navIsOpen)}
			/>
			<NavigationDrawer navIsOpen={navIsOpen} setNavOpen={setNavOpen} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='example' element={<Example />} />
			</Routes>
		</>
	);
};
