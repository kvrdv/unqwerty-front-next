import { useQuery } from 'react-query';
import { UserService } from '@/services/user/user.service';

export const useFavorites = () => {
	const {
		isLoading,
		data: favoritesPasses,
		refetch,
	} = useQuery('Favorite passes', () => UserService.getFavorites(), {
		select: ({ data }) => data,
	});

	return { isLoading, favoritesPasses, refetch };
};
