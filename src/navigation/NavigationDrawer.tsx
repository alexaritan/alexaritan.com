import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export const NavigationDrawer = ({
	navIsOpen,
	setNavOpen,
}: {
	navIsOpen: boolean;
	setNavOpen: (open: boolean) => void;
}) => {
	return (
		<SwipeableDrawer
			anchor="left"
			open={navIsOpen}
			onClose={() => setNavOpen(false)}
			onOpen={() => setNavOpen(true)}
		>
			<Box
				sx={{ width: 250 }}
				onClick={() => setNavOpen(false)}
				onKeyDown={() => setNavOpen(false)}
				role="presentation"
			>
				<List>
					<ListItem button>
						<ListItemText primary="First link" />
					</ListItem>
				</List>
			</Box>
		</SwipeableDrawer>
	);
};
