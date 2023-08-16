import { IPass } from '@/shared/types/pass.types';

export interface IWidgetPass
	extends Pick<
		IPass,
		'_id' | 'vaults' | 'icon' | 'title' | 'username' | 'password' | 'info' | 'slug'
	> {}

export interface IPassList {
	title: string;
	link: string;
	passes: IWidgetPass[];
}
