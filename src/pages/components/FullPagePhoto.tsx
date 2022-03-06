import { useCallback } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { FullPagePhoto as Photo } from '@alexaritan/photo-gallery';
import { albumUrl } from '../../utils/urls';
import { albums } from '../../albums/constants/albums';

export const FullPagePhoto = () => {
	const { albumName = '' } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const id =
		typeof searchParams.get('id') === 'string' &&
		!isNaN(+searchParams.get('id')!)
			? +searchParams.get('id')!
			: -1;
	const navigate = useNavigate();

	const { photoUrls } = albums[albumName];
	const src = photoUrls[id];

	const handleClose = useCallback(
		() => navigate(albumUrl({ albumName })),
		[albumName, navigate]
	);

	const handleNext = useCallback(() => {
		if (id < photoUrls.length - 1) setSearchParams({ id: `${id + 1}` });
	}, [id, photoUrls, setSearchParams]);

	const handlePrevious = useCallback(() => {
		if (id > 0) setSearchParams({ id: `${id - 1}` });
	}, [id, setSearchParams]);

	return (
		<Photo
			handleClose={handleClose}
			handleNext={handleNext}
			handlePrevious={handlePrevious}
			src={src}
		/>
	);
};
