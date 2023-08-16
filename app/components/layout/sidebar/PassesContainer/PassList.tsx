import Link from 'next/link';
import { FC } from 'react';
import { IPassList } from './pass.types';
import PassItem from './PassItem';
import styles from './PassList.module.scss';

const PassList: FC<{ list: IPassList }> = ({
	list: { link, passes, title },
}) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{passes.map((pass) => (
				<PassItem key={pass._id} pass={pass} />
			))}
			<Link href={link}>
				<a className={styles.button}>See more</a>
			</Link>
		</div>
	);
};
export default PassList;
