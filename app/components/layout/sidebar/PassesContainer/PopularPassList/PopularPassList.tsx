import { FC } from 'react';
import { useQuery } from 'react-query';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';
import { PassService } from '@/services/pass/pass.service';
import PassList from '../PassList';

const PopularPassList: FC = () => {
	const { isLoading, data: popularPasses } = useQuery(
		'Most popular pass in sidebar',
		() => PassService.getMostPopularPasses(),
		{
			select: (data) => data.slice(0, 3),
		}
	);

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<PassList
			list={{
				link: '/trending',
				passes: popularPasses || [],
				title: 'Popular passes',
			}}
		/>
	);
};

export default PopularPassList;
