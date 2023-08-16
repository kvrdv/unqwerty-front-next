import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader';
import Menu from '../Menu';
import { useVaults } from './useVaults';

const VaultMenu = () => {
	const { isLoading, data } = useVaults();

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Menu
			menu={{
				title: 'Vaults',
				items: data || [],
			}}
		/>
	);
};

export default VaultMenu;
