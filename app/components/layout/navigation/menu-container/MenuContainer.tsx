import { menus } from './menu.data'
import dynamic from 'next/dynamic';
import { FC } from 'react';
import Menu from './Menu';

// const DynamicGenreMenu = dynamic(() => import('./vaults/VaultMenu'), {
// 	ssr: false,
// });

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={menus[0]} />
			{/* <DynamicGenreMenu /> */}
			<Menu menu={{ title: 'Account', items: [] }} />
		</div>
	);
};

export default MenuContainer;
