export interface Album {
	photoUrls: string[];
	subtitle: string;
	title: string;
}

export interface Albums {
	[albumName: string]: Album;
}

export const albums: Albums = {
	norway2022: {
		photoUrls: [
			'https://i2.lensdump.com/i/tU6Lqo.jpg',
			'https://i3.lensdump.com/i/tU6o22.jpg',
			'https://i.lensdump.com/i/tUkcLH.jpg',
			'https://i.lensdump.com/i/tU68io.jpg',
			'https://i.lensdump.com/i/tU6VwA.jpg',
		],
		subtitle: 'Reinebringen, Ryten, and Å',
		title: 'Lofoten',
	},
	iceland2022: {
		photoUrls: [
			'https://i.imgur.com/OGPWwNq.jpg',
			'https://i.imgur.com/MVfhd9v.jpg',
			'https://i.imgur.com/cw7eTQu.jpg',
			'https://i.imgur.com/NoOfGp2.jpg',
			'https://i.imgur.com/N7r6npN.jpg',
		],
		subtitle: 'Reykjavík, Snæfellsnes, and  Sólheimajökull',
		title: 'Iceland',
	},
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
	newzealand2018: {
		photoUrls: [
			'https://i.imgur.com/Fknnwte.jpg',
			'https://i.imgur.com/qBCYVPL.jpg',
			'https://i.imgur.com/1BMkTu9.jpg',
			'https://i.imgur.com/NuZE2vb.jpg',
			'https://i.imgur.com/3NDCywQ.jpg',
			'https://i.imgur.com/6cvtiWe.jpg',
			'https://i.imgur.com/DJww6h8.jpg',
		],
		subtitle: 'The south island',
		title: 'New Zealand',
	},
};
