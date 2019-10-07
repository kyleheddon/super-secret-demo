export function camelCaseKeys(obj) {
	return Object.entries(obj).reduce((obj, [key, value]) => ({
		...obj,
		[camelCase(key)]: value,
	}), {});
}

export function formatIntegerCurrency(num) {
	return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
		.format(num)
		.split('.')[0];
}

export function sortItems(items, sortBy, isAscending) {
	return items.sort((a, b) => {
		if (a[sortBy] < b[sortBy]) {
			return isAscending ? -1 : 1;
		} else {
			return isAscending ? 1 : -1;
		}
	});
}

function camelCase(str) {
	if (!str) {
		return str;
	}

	return str[0].toLowerCase() + (
		str.length > 1
			? str.substr(1)
			: ''
	);
}