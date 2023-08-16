import { FC } from 'react';
import PassesContainer from './PassesContainer/PassesContainer';
import Search from './Search/Search';
import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			{/* <PassesContainer /> */}
		</div>
	);
};
export default Sidebar;
