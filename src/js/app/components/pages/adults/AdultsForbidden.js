import React from 'react';
import { connect } from 'react-redux';

import { PromoOptions } from 'appSettings';

import Button from '../../../components/common/Button';

import * as pageActions from '../../../actions/page';

class AdultsForbidden extends React.Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
		const { props } = this;
	}

	render(){
		const { props, state } = this;

		return (

			<div className="start">

				<div className="start__text text">
					<p>
						Доступ в этот раздел только для ролителей.
					</p>

					<p>
						<a href={PromoOptions.url}>Вернитесь на главную страницу</a>
					</p>

				</div>

			</div>

		);
	}
}



const mapStateToProps = (state, ownProps) => ({
	profile: state.user.profile,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	redirect: (page) => dispatch(pageActions.setPageWithoutHistory(page)),
	goTo: (page) => dispatch(pageActions.setPage(page)),
});

AdultsForbidden.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdultsForbidden);
