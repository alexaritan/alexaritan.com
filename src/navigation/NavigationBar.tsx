import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar } from '@mui/material';

export const NavigationBar = ({
	navIsOpen,
	setNavOpen,
}: {
	navIsOpen: boolean;
	setNavOpen: () => void;
}) => {
	return (
		<Toolbar>
			<IconButton
				aria-label='open drawer'
				color='inherit'
				edge='start'
				onClick={setNavOpen}
			>
				<MenuIcon fontSize='large' />
			</IconButton>
		</Toolbar>
	);
};
