import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PhotoGrid } from './photo-grid/PhotoGrid.tsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<PhotoGrid
			imageUrls={[
				'https://i.imgur.com/MSCTOFy.jpg',
				'https://i.imgur.com/WJbOiGQ.png',
				'https://i.imgur.com/6kUOwrF.jpg',
				'https://i.imgur.com/7ZbuWh1.jpg',
			]}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
