import { createContext } from 'react';
import { Albums } from '../../albums/constants/albums';

export const createAlbumsContext = (albums: Albums) => createContext(albums);
