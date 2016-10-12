import React from 'react';

import { PromoOptions } from 'appSettings';

const BgClick = (props) => (
	<a href={PromoOptions.bgClick} target="_blank" className={( (props.mixClass ? props.mixClass : '') + ' bgclick')}>
	</a>
);

BgClick.propTypes = {
	mixClass: React.PropTypes.string,
	
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default BgClick;
