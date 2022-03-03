export interface Album {
	photoUrls: string[];
	subtitle: string;
	title: string;
}

export interface Albums {
	[albumName: string]: Album;
}

export const albums: Albums = {
	example: {
		photoUrls: [
			'https://i.imgur.com/MSCTOFy.jpg',
			'https://i.imgur.com/WJbOiGQ.png',
			'https://i.imgur.com/6kUOwrF.jpg',
			'https://i.imgur.com/MSCTOFy.jpg',
			'https://i.imgur.com/7ZbuWh1.jpg',
			'https://i.imgur.com/MSCTOFy.jpg',
			'https://i.imgur.com/WJbOiGQ.png',
			'https://i.imgur.com/6kUOwrF.jpg',
			'https://i.imgur.com/7ZbuWh1.jpg',
		],
		subtitle: 'Here is an example album',
		title: 'Example album',
	},
	secondAlbum: {
		photoUrls: [
			'https://i.imgur.com/MSCTOFy.jpg',
			'https://i.imgur.com/WJbOiGQ.png',
			'https://i.imgur.com/6kUOwrF.jpg',
			'https://i.imgur.com/MSCTOFy.jpg',
			'https://i.imgur.com/7ZbuWh1.jpg',
			'https://i.imgur.com/MSCTOFy.jpg',
			'https://i.imgur.com/WJbOiGQ.png',
			'https://i.imgur.com/6kUOwrF.jpg',
			'https://i.imgur.com/7ZbuWh1.jpg',
			'https://i.imgur.com/MSCTOFy.jpg',
			'https://i.imgur.com/WJbOiGQ.png',
			'https://i.imgur.com/6kUOwrF.jpg',
			'https://i.imgur.com/MSCTOFy.jpg',
			'https://i.imgur.com/7ZbuWh1.jpg',
			'https://i.imgur.com/MSCTOFy.jpg',
			'https://i.imgur.com/WJbOiGQ.png',
			'https://i.imgur.com/6kUOwrF.jpg',
			'https://i.imgur.com/7ZbuWh1.jpg',
			'https://i.imgur.com/MSCTOFy.jpg',
			'https://i.imgur.com/WJbOiGQ.png',
			'https://i.imgur.com/6kUOwrF.jpg',
			'https://i.imgur.com/MSCTOFy.jpg',
			'https://i.imgur.com/7ZbuWh1.jpg',
			'https://i.imgur.com/MSCTOFy.jpg',
			'https://i.imgur.com/WJbOiGQ.png',
			'https://i.imgur.com/6kUOwrF.jpg',
			'https://i.imgur.com/7ZbuWh1.jpg',
		],
		subtitle: 'Here is a longer album',
		title: 'Longer example album',
	},
};
