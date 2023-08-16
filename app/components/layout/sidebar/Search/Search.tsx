import { ChangeEvent, FC, useState } from 'react';
import { useQuery } from 'react-query';
import SearchField from '@/ui/search-field/SearchField';
import { useDebounce } from '@/hooks/useDebounce';
import { PassService } from '@/services/pass/pass.service';
import styles from './Search.module.scss';
import SearchList from './SearchList/SearchList';

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const { isSuccess, data: popularVaults } = useQuery(
		['search vault list', debouncedSearch],
		() => PassService.getPasses(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch,
		}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{/* {isSuccess && <SearchList passes={popularPasses || []} />} */}
		</div>
	);
};
export default Search;
