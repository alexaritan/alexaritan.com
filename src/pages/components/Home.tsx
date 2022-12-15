import { Box } from '@mui/material';
import { FadeAndSlide } from '../../animation/components/FadeAndSlide';

export const Home = () => (
	<Box style={{ marginTop: 100 }} textAlign='center'>
		<div>
			{/* <img src='https://i.imgur.com/UZ3FIxO.jpg' width={'100%'} /> */}
			<FadeAndSlide
				words={[
					'Queenstown',
					'Å',
					'Snæfellsnes',
					'Budapest',
					'Lauterbrunnen',
					'Bavaria',
					'Istanbul',
					'Where to next?',
				]}
			/>
		</div>
	</Box>
);
