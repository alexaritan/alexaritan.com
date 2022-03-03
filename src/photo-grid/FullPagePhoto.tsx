import { Dialog, useMediaQuery } from '@mui/material';
import { useCallback } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { albumUrl, parseAlbumFromUrl } from '../utils/urls';

export const FullPagePhoto = () => {
	const [searchParams] = useSearchParams();
	const src = searchParams.get('src');
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const theme = useTheme();
	const shouldRenderNavIcons = useMediaQuery(theme.breakpoints.up('sm'));

	const handleClose = useCallback(
		() =>
			navigate(albumUrl({ albumName: parseAlbumFromUrl({ path: pathname }) })),
		[navigate]
	);

	return (
		<Dialog fullScreen open={true}>
			{shouldRenderNavIcons ? (
				<IconButton
					edge='start'
					onClick={handleClose}
					style={{ left: 20, position: 'absolute', top: 10 }}
				>
					<CloseIcon />
				</IconButton>
			) : null}
			{src ? (
				<img
					src={src}
					style={{
						maxHeight: '100%',
						maxWidth: '100%',
						objectFit: 'contain',
					}}
				/>
			) : null}
		</Dialog>
	);
};
