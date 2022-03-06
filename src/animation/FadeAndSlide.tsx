import { Typography } from '@mui/material';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';

export const FadeAndSlide = ({ words }: { words: string[] }) => {
	const [wordIndex, setWordIndex] = useState(0);
	const [fadingIn, setFadingIn] = useState(true);
	const boxRef = useRef(null);
	const fadingInRef = useRef(!fadingIn);

	useEffect(() => {
		if (wordIndex < words.length - 1) {
			if (fadingIn !== fadingInRef.current) {
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
			fadingInRef.current = fadingIn;
		}
	}, [fadingIn, fadingInRef, wordIndex, words.length]);

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
