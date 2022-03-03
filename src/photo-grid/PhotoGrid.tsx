import { Fab, ImageListItem } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { ScrollToTop } from './ScrollToTop';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { photoUrl } from '../utils/urls';

export const PhotoGrid = ({
	imageUrls,
	subtitle,
	title,
}: {
	imageUrls: string[];
	subtitle?: string;
	title: string;
}) => {
	const theme = useTheme();
	const shouldRenderMultipleColumns = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<div
			className='photoGrid'
			style={{ width: shouldRenderMultipleColumns ? 1000 : '100%' }}
		>
			<Typography component='h2' variant='h2'>
				{title}
			</Typography>
			<Typography component='div' variant='subtitle1'>
				{subtitle}
			</Typography>
			<ImageList
				cols={shouldRenderMultipleColumns ? 3 : 1}
				rowHeight={shouldRenderMultipleColumns ? 200 : 300}
			>
				{imageUrls.map((url, index) => (
					<Link to={`${photoUrl({ albumName: 'example' })}?src=${url}`}>
						<ImageListItem
							className='photo'
							key={`photo${index}`}
							style={{ overflow: 'hidden' }}
						>
							<img src={url} />
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
