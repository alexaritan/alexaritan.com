import { Typography } from '@mui/material';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';

export const FadeAndSlide = ({ words }: { words: string[] }) => {
	const [wordIndex, setWordIndex] = useState(0);
	const [fadingIn, setFadingIn] = useState(true);
	const boxRef = useRef(null);

	useEffect(() => {
		if (wordIndex < words.length - 1) {
			setTimeout(
				() => {
					if (!fadingIn) {
						setWordIndex((wordIndex + 1) % words.length);
					}
					setFadingIn(!fadingIn);
				},
				fadingIn ? 1500 : 200
			);
		}
	}, [fadingIn]);

	return (
		<Box ref={boxRef}>
			<Slide
				container={boxRef.current}
				direction='up'
				in={fadingIn}
				mountOnEnter
				unmountOnExit
			>
				<div>
					<Fade in={fadingIn}>
						<Typography color='primary' component='h2' variant='h2'>
							{words[wordIndex]}
						</Typography>
					</Fade>
				</div>
			</Slide>
		</Box>
	);
};
