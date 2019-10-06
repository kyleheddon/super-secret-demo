import React from 'react';
import './Card.scss';
import BlankImage from './BlankImage';
import BridgeImage from './BridgeImage';
import { formatIntegerCurrency } from './util';

const Card = ({
	heading,
	subheading,
	price,
	showBridge,
	id,
}) => (
	<div className="item card">
		{showBridge ? <BridgeImage /> : <BlankImage />}
		<div className="card-body">
			<h5 className="card-title">{heading}</h5>
			<h6 className="card-subtitle mb-2 text-muted">{subheading}</h6>
		</div>
		<div className="card-footer text-right px-2 pt-0">
			<div className="border-top mx-2 mb-2" />
			<span className="price">
				{ formatIntegerCurrency(price) }
			</span>
		</div>
	</div>
);

export default Card;