import { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationBar } from './navigation/NavigationBar';
import { NavigationDrawer } from './navigation/NavigationDrawer';
import { Home } from './Home';
import { Example } from './albums/Example';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { FullPagePhoto } from './photo-grid/FullPagePhoto';
import { albumUrl, homeUrl, photoUrl } from './utils/urlBuilders';

export const App = () => {
	const [navIsOpen, setNavOpen] = useState(false);
	//TODO Alex, this line below returns false then true immediately after.
	//It would be nice if it could just return the proper value immediately.
	//That way dark mode would be remembered.
	const defaultToDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const [isInDarkMode, setDarkMode] = useState(defaultToDarkMode);

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
				<Route
					path={albumUrl({ albumName: 'example' })}
					element={<Example />}
				/>
				<Route
					path={photoUrl({ albumName: 'example' })}
					element={<FullPagePhoto />}
				/>
			</Routes>
		</ThemeProvider>
	);
};
