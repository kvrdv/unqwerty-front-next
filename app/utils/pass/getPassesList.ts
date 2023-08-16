export const getVaultsListEach = (
	index: number,
	length: number,
	name: string
) => (index + 1 === length ? name : name + ', ')

interface IArrayItem {
	name: string
}

export const getVaultsList = (array: IArrayItem[]) =>
	array.map(i => i.name).join(', ')
