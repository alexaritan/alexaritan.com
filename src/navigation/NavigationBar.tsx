import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Toolbar } from '@mui/material';

export const NavigationBar = ({
	isInDarkMode,
	navIsOpen,
	setDarkMode,
	toggleNavigationDrawer,
}: {
	isInDarkMode: boolean;
	navIsOpen: boolean;
	setDarkMode: (setToDark: boolean) => void;
	toggleNavigationDrawer: () => void;
}) => {
	return (
		<Toolbar>
			<IconButton
				aria-label='open drawer'
				color='inherit'
				edge='start'
				onClick={toggleNavigationDrawer}
			>
				<MenuIcon fontSize='large' />
			</IconButton>
			<IconButton
				aria-label='dark mode toggle'
				color='inherit'
				edge='end'
				onClick={() => setDarkMode(!isInDarkMode)}
			>
				{isInDarkMode ? <Brightness7Icon /> : <ModeNightIcon />}
			</IconButton>
		</Toolbar>
	);
};
