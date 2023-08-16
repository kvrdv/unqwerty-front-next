import { IMenu } from './menu.types';

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdAutoAwesomeMotion',
			link: '/',
			title: 'All items',
		},
		{
			icon: 'MdGrade',
			link: '/favorites',
			title: 'Favorites',
		},
		{
			icon: 'MdRefresh',
			link: '/recent',
			title: 'Recent',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/popular',
			title: 'Popular',
		},
		{
			icon: 'MdPostAdd',
			link: '/items',
			title: 'Add item',
		},
	],
};

export const userMenu: IMenu = {
	title: 'General',
	items: [],
};

export const menus: IMenu[] = [firstMenu, userMenu];
