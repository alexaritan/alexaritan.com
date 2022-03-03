import { PhotoGrid } from '../photo-grid/PhotoGrid';
import { useAlbums } from './useAlbums';
import { Album as AlbumType } from '../albums/constants/albums';
import { useParams } from 'react-router-dom';

export const Album = () => {
	const { albumName } = useParams();
	const { photoUrls, subtitle, title } = useAlbums({ albumName }) as AlbumType;
	return (
		<PhotoGrid
			albumName={albumName as string}
			imageUrls={photoUrls}
			subtitle={subtitle}
			title={title}
		/>
	);
};
