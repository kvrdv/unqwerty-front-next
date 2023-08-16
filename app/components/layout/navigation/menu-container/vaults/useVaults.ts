import { useQuery } from 'react-query';
import { VaultService } from '@/services/vault/vault.service';
import { toastError } from '@/utils/api/withToastrErrorRedux';
import { getVaultUrl } from '@/configs/url.config';
import { IMenuItem } from '../menu.types';

export const useVaults = () => {
	const queryData = useQuery(
		'vaults menu',
		() => VaultService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(vault): IMenuItem => ({
							icon: vault.icon,
							link: getVaultUrl(vault.slug),
							title: vault.name,
						})
					),
					// .splice(0, 3),
			onError(error) {
				toastError(error, "Can't get vaults");
			},
		}
	);

	return queryData;
};
