import { Dialog } from '@mui/material';
import { useParams, useSearchParams } from 'react-router-dom';

export const FullPagePhoto = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const src = searchParams.get('src');

	return (
		<Dialog fullScreen open={true}>
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
