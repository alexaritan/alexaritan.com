import ImageList from '@mui/material/ImageList';

export const PhotoGrid = ({ imageUrls }: { imageUrls: string[] }) => {
	return (
		<ImageList cols={3} rowHeight={500} sx={{ height: 500, width: 500 }}>
			{imageUrls.map(url => (
				<img src={url} />
			))}
		</ImageList>
	);
};
