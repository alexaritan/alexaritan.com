import { albums } from './constants/albums';

export const useAlbums = ({ albumName }: { albumName?: string } = {}) =>
	albumName ? albums[albumName] : albums;
