import { useNavigate, useParams } from 'react-router-dom';
import { PhotoGrid } from '@alexaritan/photo-gallery';
import { albums } from '../../albums/constants/albums';
import { photoUrl } from '../../utils/urls';

export const Gallery = () => {
	const { albumName = '' } = useParams();
	const navigate = useNavigate();

	const { photoUrls, subtitle, title } = albums[albumName];

	return (
		<PhotoGrid
			imgUrls={photoUrls}
			onClick={id => navigate(`${photoUrl({ albumName })}?id=${id}`)}
			subtitle={subtitle}
			title={title}
		/>
	);
};
