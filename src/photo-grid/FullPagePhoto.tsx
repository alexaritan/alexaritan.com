import { Dialog, useMediaQuery } from '@mui/material';
import { useCallback } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { albumUrl, parseAlbumFromUrl } from '../utils/urls';
import { useAlbum } from '../albums/useAlbum';

export const FullPagePhoto = () => {
	//Parse out URL contents to prepare navigation.
	const [searchParams, setSearchParams] = useSearchParams();
	const src = searchParams.get('src');
	const { pathname } = useLocation();
	const albumName = parseAlbumFromUrl({ path: pathname });
	const navigate = useNavigate();

	//Get info about the theme.
	const theme = useTheme();
	const shouldRenderNavIcons = useMediaQuery(theme.breakpoints.up('sm'));

	//Get the photos from the album.
	const { photoUrls } = useAlbum({ albumName });

	const handleClose = useCallback(
		() => navigate(albumUrl({ albumName })),
		[navigate]
	);

	const handleNext = useCallback(() => {
		const index = photoUrls.findIndex(url => url === src);
		if (index < photoUrls.length - 1)
			setSearchParams({ src: photoUrls[index + 1] });
	}, [photoUrls, src]);

	const handlePrevious = useCallback(() => {
		const index = photoUrls.findIndex(url => url === src);
		if (index > 0) setSearchParams({ src: photoUrls[index - 1] });
	}, [photoUrls, src]);

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

			{shouldRenderNavIcons ? (
				<IconButton
					edge='start'
					onClick={handlePrevious}
					style={{ left: 20, position: 'absolute', top: '47%' }}
				>
					<NavigateBeforeIcon />
				</IconButton>
			) : null}
			{shouldRenderNavIcons ? (
				<IconButton
					edge='start'
					onClick={handleNext}
					style={{ right: 20, position: 'absolute', top: '47%' }}
				>
					<NavigateNextIcon />
				</IconButton>
			) : null}
		</Dialog>
	);
};
