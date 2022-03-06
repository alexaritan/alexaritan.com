import { Fab, ImageListItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { ScrollToTop } from './ScrollToTop';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { photoUrl } from '../utils/urls';
import { useAlbums } from '../albums/hooks/useAlbums';
import { Album as AlbumType } from '../albums/constants/albums';

export const PhotoGrid = () => {
	const { albumName } = useParams();
	const {
		photoUrls: imageUrls,
		subtitle,
		title,
	} = useAlbums({ albumName }) as AlbumType;
	const theme = useTheme();
	const shouldRenderMultipleColumns = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<div className='photoGrid'>
			<Typography component='h2' variant='h2'>
				{title}
			</Typography>
			<Typography component='div' variant='subtitle1'>
				{subtitle}
			</Typography>
			<ImageList
				cols={shouldRenderMultipleColumns ? 3 : 1}
				rowHeight={shouldRenderMultipleColumns ? 250 : 300}
			>
				{imageUrls.map((url, index) => (
					<Link to={`${photoUrl({ albumName })}?id=${index}`} key={index}>
						<ImageListItem
							className='photo'
							key={`photo${index}`}
							style={{ overflow: 'hidden' }}
						>
							<img alt='' src={url} />
						</ImageListItem>
					</Link>
				))}
			</ImageList>
			<ScrollToTop>
				<Fab aria-label='scroll-to-top' color='primary'>
					<KeyboardArrowUp />
				</Fab>
			</ScrollToTop>
		</div>
	);
};
