import { PhotoGrid } from '../photo-grid/PhotoGrid';
import { useAlbum } from './useAlbum';

export const Example = () => {
	const { photoUrls, subtitle, title } = useAlbum({ albumName: 'example' });
	return <PhotoGrid imageUrls={photoUrls} subtitle={subtitle} title={title} />;
};
