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
			'/images/2019-hungary-austria-germany-switzerland/IMG_7323.jpg',
			'/images/2019-hungary-austria-germany-switzerland/IMG_7350.jpg',
			'/images/2019-hungary-austria-germany-switzerland/IMG_7373.jpg',
			'/images/2019-hungary-austria-germany-switzerland/IMG_7396.jpg',
			'/images/2019-hungary-austria-germany-switzerland/IMG_7397.jpg',
			'/images/2019-hungary-austria-germany-switzerland/IMG_7399.jpg',
			'/images/2019-hungary-austria-germany-switzerland/IMG_7407.jpg',
			'/images/2019-hungary-austria-germany-switzerland/IMG_7409bw.jpg',
			'/images/2019-hungary-austria-germany-switzerland/IMG_7410.jpg',
			'/images/2019-hungary-austria-germany-switzerland/IMG_7423.jpg',
			'/images/2019-hungary-austria-germany-switzerland/20190520_180318-01~2.jpeg',
			'/images/2019-hungary-austria-germany-switzerland/20190523_112154.jpg',
			'/images/2019-hungary-austria-germany-switzerland/20190523_143359.jpg',
			'/images/2019-hungary-austria-germany-switzerland/20190524_161615.jpg',
			'/images/2019-hungary-austria-germany-switzerland/20190526_091753-02.jpeg',
			'/images/2019-hungary-austria-germany-switzerland/20190526_093009-01.jpeg',
			'/images/2019-hungary-austria-germany-switzerland/20190527_164222-01.jpeg',
			'/images/2019-hungary-austria-germany-switzerland/20190528_174615~2.jpg',
		],
		subtitle: 'Hungary, Austria, Germany, Switzerland',
		title: 'European road trip',
	},
};
