import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

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
		<Box sx={{ flexGrow: 1 }}>
			<AppBar color='transparent' id='navbar' position='sticky'>
				<Toolbar>
					<IconButton
						aria-label='open drawer'
						color='inherit'
						edge='start'
						onClick={toggleNavigationDrawer}
					>
						<MenuIcon fontSize='large' />
					</IconButton>
					<Typography component='div' sx={{ flexGrow: 1 }} variant='h5'>
						Alex Aritan
					</Typography>
					<IconButton
						aria-label='dark mode toggle'
						color='inherit'
						edge='end'
						onClick={() => setDarkMode(!isInDarkMode)}
					>
						{isInDarkMode ? <Brightness7Icon /> : <ModeNightIcon />}
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
