import { TypeMaterialIconName } from './icon.types';

export interface IVault {
	_id: string;
	name: string;
	slug: string;
	description: string;
	icon: TypeMaterialIconName;
}

export interface IPass {
	_id: string;
	icon: string;
	title: string;
	vaults: IVault[];
	username: string;
	password: string;
	countOpened: number;
	info: string;
	slug: string;
}
