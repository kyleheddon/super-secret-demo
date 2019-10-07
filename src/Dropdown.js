import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
	title,
	items,
	id,
	onSelect,
}) => {
	const [state, setState] = useState({
		isOpen: false,
	});

	const { isOpen } = state;
	const itemsStyle = isOpen ? { display: 'block' } : {};

	return (
		<div className="dropdown">
			<a
				className="btn btn-light text-capitalize"
				href="#"
				role="button"
				id={id}
				aria-haspopup="true"
				aria-expanded={isOpen.toString()}
				data-toggle="dropdown"
				onClick={(event) => {
					event.preventDefault();
					setState({
						isOpen: !isOpen,
					});
				}}
			>
				{title}
			</a>
			<div
				className="dropdown-menu"
				ariaLabelledby={id}
				style={itemsStyle}
			>
				{items.map(item =>
					<a
						key={item.id}
						className="dropdown-item"
						href="#"
						onClick={(event) => {
							event.preventDefault();
							onSelect(item);
							setState({
								isOpen: !isOpen,
							});
						}}
					>
						<span className="text-capitalize">{item.name}</span>
					</a>
				)}
			</div>
		</div>
	);
}

Dropdown.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	})),
	id: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
}

export default Dropdown;