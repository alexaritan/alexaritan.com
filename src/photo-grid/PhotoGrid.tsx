import { ImageListItem } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const PhotoGrid = ({
	imageUrls,
	title,
}: {
	imageUrls: string[];
	title: string;
}) => {
	const theme = useTheme();
	const shouldRenderMultipleColumns = useMediaQuery(theme.breakpoints.up('sm'));
	return (
		<div
			className='photoGrid'
			style={{ width: shouldRenderMultipleColumns ? 1000 : '100%' }}
		>
			<h1>{title}</h1>
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
