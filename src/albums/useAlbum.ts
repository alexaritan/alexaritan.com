import { albums } from '../constants/albums';

export const useAlbum = ({ albumName }: { albumName: string }) =>
	albums[albumName];
