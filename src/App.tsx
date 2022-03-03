import { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationBar } from './navigation/NavigationBar';
import { NavigationDrawer } from './navigation/NavigationDrawer';
import { Home } from './Home';
import { PhotoGrid } from './photo-grid/PhotoGrid';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { FullPagePhoto } from './photo-grid/FullPagePhoto';
import { albumUrl, homeUrl, photoUrl } from './utils/urls';
import { useAlbums } from './albums/useAlbums';
import { Albums } from './albums/constants/albums';

export const App = () => {
	const [navIsOpen, setNavOpen] = useState(false);
	//TODO Alex, this line below returns false then true immediately after.
	//It would be nice if it could just return the proper value immediately.
	//That way dark mode would be remembered.
	const defaultToDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const [isInDarkMode, setDarkMode] = useState(defaultToDarkMode);
	const albums = useAlbums() as Albums;

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: isInDarkMode ? 'dark' : 'light',
				},
			}),
		[isInDarkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NavigationBar
				isInDarkMode={isInDarkMode}
				navIsOpen={navIsOpen}
				setDarkMode={setDarkMode}
				toggleNavigationDrawer={() => setNavOpen(!navIsOpen)}
			/>
			<NavigationDrawer navIsOpen={navIsOpen} setNavOpen={setNavOpen} />
			<Routes>
				<Route path={homeUrl} element={<Home />} />
				<Route path={albumUrl()} element={<PhotoGrid />} />
				<Route path={photoUrl()} element={<FullPagePhoto />} />
			</Routes>
		</ThemeProvider>
	);
};
