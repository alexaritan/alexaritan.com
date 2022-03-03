import { ImageListItem } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';

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
					<ImageListItem
						className='photo'
						key={`photo${index}`}
						style={{ overflow: 'hidden' }}
					>
						<img src={url} />
					</ImageListItem>
				))}
			</ImageList>
		</div>
	);
};
