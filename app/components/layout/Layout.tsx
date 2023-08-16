import { FC } from 'react';
import styles from './Layout.module.scss';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';

const Layout: FC = ({ children }) => {
	return (
		<>
			<div className={styles.bars}>
				<Navigation />
				<Sidebar />
			</div>
			<div className={styles.content}>{children}</div>
		</>
	);
};

export default Layout;
