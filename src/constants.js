export const SortBy = {
	Heading: 'heading',
	Subheading: 'subheading',
	Price: 'price',
}

export const SortDirection = {
	Ascensing: 'ascending',
	Descending: 'descending',
}

export const SortOptions = Object.values(SortBy).reduce((options, sortBy) => ([
	...options,
	{
		sortBy,
		sortDirection: SortDirection.Ascensing,
	},
	{
		sortBy,
		sortDirection: SortDirection.Descending,
	},
]), []);