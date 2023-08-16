import { FC } from 'react';
import Gallery from '@/ui/gallery/Gallery';
import Heading from '@/ui/heading/Heading';
import SubHeading from '@/ui/heading/SubHeading';
import Slider from '@/ui/slider/Slider';
import { Meta } from '@/utils/meta';
import { IHome } from './home.types';

const Home: FC<IHome> = ({ slides, trendingMovies }) => {
	return (
		<Meta
			title="Forget your passwords"
			description="Forget your qwerty passwords!"
		>
			<Heading
				title="Forget your passwords"
				className="text-gray-500 mb-8 text-xl"
			/>

			{/* {slides.length && <Slider slides={slides} />} */}

			<div className="my-10">
				<SubHeading title="Trending now" />
				{/* {trendingMovies.length && <Gallery items={trendingMovies} />} */}
			</div>

			<div>
				<SubHeading title="Best actors" />
				{/* {actors.length && <Gallery items={actors} />} */}
			</div>
		</Meta>
	);
};
export default Home;
