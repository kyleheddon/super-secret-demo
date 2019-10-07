import React, { useState } from 'react';
import Card from './Card';
import Dropdown from './Dropdown';
import {
	SortBy,
	SortDirection,
	SortOptions,
} from './constants';
import { sortItems } from './util';

function Home(props) {
	const [state, setState] = useState({
		sort: null,
	});

	const { sort } = state;

	const items = sort
		? sortItems(props.items, sort.sortBy, sort.sortDirection === SortDirection.Ascensing)
		: props.items;

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Dropdown
					items={SortOptions.map((item) => ({
						...item,
						id: item.sortBy + '_' + item.sortDirection,
						name: `Sort by: ${item.sortBy} - ${item.sortDirection}`,
					}))}
					title={sort ? sort.name : 'Sort by'}
					id="sort_by"
					onSelect={(item) => {
						setState({
							sort: item
						});
					}}
				/>
			</nav>
			<div className="container">
				<div className="row">
					{items.map((item, i) =>
						<div
							className="col-lg-2 col-md-5 col-sm-10 mb-3"
							key={item.id}
						>
							<Card {...item} />
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Home;
