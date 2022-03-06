import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { albumUrl, homeUrl } from '../utils/urls';
import { albums } from '../albums/constants/albums';

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-start',
}));

export const NavigationDrawer = ({
	navIsOpen,
	setNavOpen,
}: {
	navIsOpen: boolean;
	setNavOpen: (open: boolean) => void;
}) => {
	return (
		<SwipeableDrawer
			anchor='left'
			open={navIsOpen}
			onClose={() => setNavOpen(false)}
			onOpen={() => setNavOpen(true)}
		>
			<DrawerHeader>
				<Box flexGrow={1}>
					<Typography component='h5' variant='h5'>
						Albums
					</Typography>
				</Box>
				<IconButton edge='start' onClick={() => setNavOpen(false)}>
					<CloseIcon />
				</IconButton>
			</DrawerHeader>
			<Box
				sx={{ width: 250 }}
				onClick={() => setNavOpen(false)}
				onKeyDown={() => setNavOpen(false)}
				role='presentation'
			>
				<List>
					<Link to={homeUrl}>
						<ListItem button>
							<ListItemText primary='Home' />
						</ListItem>
					</Link>
					{Object.keys(albums).map((albumName, index) => (
						<Link to={albumUrl({ albumName })} key={index}>
							<ListItem button>
								<ListItemText primary={albums[albumName].title} />
							</ListItem>
						</Link>
					))}
				</List>
			</Box>
		</SwipeableDrawer>
	);
};
