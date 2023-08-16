import { FC } from 'react';
import FavoritePassList from './FavoritePassList/FavoritePassList';
import PopularPassList from './PopularPassList/PopularPassList';

const PassesContainer: FC = () => {
	return (
		<div>
			<PopularPassList />
			<FavoritePassList />
		</div>
	);
};
export default PassesContainer;
