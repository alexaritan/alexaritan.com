import { useState } from 'react';
import { NavigationBar } from './navigation/NavigationBar';
import { NavigationDrawer } from './navigation/NavigationDrawer';
import { PhotoGrid } from './photo-grid/PhotoGrid';

export const App = () => {
	const [navIsOpen, setNavOpen] = useState(false);

	return (
		<>
			<NavigationBar
				navIsOpen={navIsOpen}
				setNavOpen={() => setNavOpen(!navIsOpen)}
			/>
			<NavigationDrawer navIsOpen={navIsOpen} setNavOpen={setNavOpen} />
			<PhotoGrid
				imageUrls={[
					'https://i.imgur.com/MSCTOFy.jpg',
					'https://i.imgur.com/WJbOiGQ.png',
					'https://i.imgur.com/6kUOwrF.jpg',
					'https://i.imgur.com/MSCTOFy.jpg',
					'https://i.imgur.com/7ZbuWh1.jpg',
					'https://i.imgur.com/MSCTOFy.jpg',
					'https://i.imgur.com/WJbOiGQ.png',
					'https://i.imgur.com/6kUOwrF.jpg',
					'https://i.imgur.com/7ZbuWh1.jpg',
				]}
				title='Photos'
			/>
		</>
	);
};
