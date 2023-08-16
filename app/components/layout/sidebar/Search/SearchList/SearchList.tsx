import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IWidgetPass } from '../../PassContainer/pass.types';
import styles from './SearchList.module.scss';

const SearchList: FC<{ passes: IWidgetPass[] }> = ({ passes }) => {
	return (
		<div className={styles.list}>
			{passes.length ? (
				passes.map((pass) => (
					<Link key={pass._id} href={`/pass/${pass.slug}`}>
						<a>
							<Image
								src={pass.poster || ''}
								width={50}
								height={50}
								objectFit="cover"
								objectPosition="top"
								alt={pass.title}
								draggable={false}
							/>
							<span>{pass.title}</span>
						</a>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">
					Passes not found!
				</div>
			)}
		</div>
	);
};

export default SearchList;
