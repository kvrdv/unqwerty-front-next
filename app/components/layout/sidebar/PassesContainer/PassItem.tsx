import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { MaterialIcon } from '@/components/ui/icons/MaterialIcon';
import { getVaultsListEach } from '@/utils/pass/getPassesList';
import { getVaultUrl, getPassUrl } from '@/configs/url.config';
import styles from './PassList.module.scss';
import { WidgetPass } from './pass.types';

const PassItem: FC<{ pass: IWidgetPass }> = ({ pass }) => {
	return (
		<div className={styles.item}>
			<Link href={getPassUrl(pass.slug)}>
				<a>
					<Image
						alt={pass.title}
						width={65}
						height={97}
						src={pass.icon}
						draggable={false}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{pass.title}</div>
					<div className={styles.vaults}>
						{pass.vaults.map(({ slug, name, _id }, idx) => (
							<Link key={_id} href={getVaultUrl(slug)}>
								<a>
									{getVaultsListEach(
										idx,
										pass.vaults.length,
										name
									)}
								</a>
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					{/* <span>{pass.rating.toFixed(1)}</span> */}
				</div>
			</div>
		</div>
	);
};
export default PassItem;
