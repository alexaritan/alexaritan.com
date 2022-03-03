import { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NavigationBar } from './navigation/NavigationBar';
import { NavigationDrawer } from './navigation/NavigationDrawer';
import { Home } from './Home';
import { PhotoGrid } from './photo-grid/PhotoGrid';
import { FullPagePhoto } from './photo-grid/FullPagePhoto';
import { albumUrl, homeUrl, photoUrl } from './utils/urls';

export const App = () => {
	const [navIsOpen, setNavOpen] = useState(false);
	const defaultToDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
		noSsr: true,
	});
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
			<Container maxWidth={'lg'} sx={{ mt: 2 }}>
				<Routes>
					<Route path={homeUrl} element={<Home />} />
					<Route path={albumUrl()} element={<PhotoGrid />} />
					<Route path={photoUrl()} element={<FullPagePhoto />} />
				</Routes>
			</Container>
		</ThemeProvider>
	);
};
