export interface Album {
	photoUrls: string[];
	subtitle: string;
	title: string;
}

export interface Albums {
	[albumName: string]: Album;
}

export const albums: Albums = {
	europe2019: {
		photoUrls: [
			'https://i.imgur.com/cYNpi7h.jpg',
			'https://i.imgur.com/JjHgZAT.jpg',
			'https://i.imgur.com/0UusDJj.jpg',
			'https://i.imgur.com/PBqjLT5.jpg',
			'https://i.imgur.com/I1y9XcC.jpg',
			'https://i.imgur.com/WAAwYcq.jpg',
			'https://i.imgur.com/a8wwdPj.jpg',
			'https://i.imgur.com/xQbyFEp.jpg',
			'https://i.imgur.com/McNugPp.jpg',
			'https://i.imgur.com/j1RaKGU.jpg',
			'https://i.imgur.com/Wt491jA.jpg',
			'https://i.imgur.com/Zs2IZno.jpg',
			'https://i.imgur.com/nQYON1S.jpg',
			'https://i.imgur.com/TOtY2Eb.jpg',
			'https://i.imgur.com/khhAkRn.jpg',
			'https://i.imgur.com/eXHDXUY.jpg',
			'https://i.imgur.com/qpGluRh.jpg',
		],
		subtitle: 'Hungary, Austria, Germany, Switzerland',
		title: 'European road trip',
	},
};
