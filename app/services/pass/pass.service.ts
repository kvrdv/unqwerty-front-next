import axios, { axiosClassic } from 'api/interceptors';
import { IPassEditInput } from '@/components/screens/admin/pass/pass-edit.interface';
import { IPass } from '@/shared/types/pass.types';
import { getPassesUrl as getPassesUrl } from '@/configs/api.config';

export const PassService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<IPass>(getPassesUrl(`/by-slug/${slug}`));
	},

	async getByVaults(vaultIds: string[]) {
		return axiosClassic.post<IPass[]>(getPassesUrl(`/by-vaults`), {
			vaultIds,
		});
	},

	async create() {
		return axios.post<string>(getPassesUrl(''));
	},

	async updateCountOpened(slug: string) {
		return axiosClassic.post(getPassesUrl('/update-count-opened'), {
			slug,
		});
	},

	async update(_id: string, data: IMovieEditInput) {
		return axios.put<string>(getPassesUrl(`/${_id}`), data);
	},

	async delete(_id: string) {
		return axios.delete<string>(getPassesUrl(`/${_id}`));
	},

	async getPasses(searchTerm?: string) {
		return axiosClassic.get<IPass[]>(getPassesUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	async getById(_id: string) {
		return axios.get<IPassEditInput>(getPassesUrl(`/${_id}`));
	},

	async getMostPopularPasses() {
		const { data: passes } = await axiosClassic.get<IPass[]>(
			getPassesUrl('/most-popular')
		);

		return passes;
	},
};
