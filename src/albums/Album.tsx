import { PhotoGrid } from '../photo-grid/PhotoGrid';
import { useAlbums } from './useAlbums';
import { Album as AlbumType } from '../albums/constants/albums';

export const Album = ({ albumName }: { albumName: string }) => {
	const { photoUrls, subtitle, title } = useAlbums({ albumName }) as AlbumType;
	return <PhotoGrid imageUrls={photoUrls} subtitle={subtitle} title={title} />;
};
