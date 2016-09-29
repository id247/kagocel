import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/common/Button';

//import * as asyncActions from '../../actions/async';
import * as pageActions from '../../actions/page';

class Admins extends React.Component {

	componentWillMount(){
		const { props } = this;

		if (props.profile.roles.indexOf('System') === -1){
			props.redirect('/');
		}

	}

	render(){
		const { props } = this;

		return (
			<div className="app__page">

				<Button 
					size="m"
					color="red"
					type="button"
					onClickHandler={ (e) => {
						props.redirect('/kids');
					}}
				>
					Дети
				</Button>
				
				&nbsp;

				<Button 
					size="m"
					color="red"
					type="button"
					onClickHandler={ (e) => {
						props.redirect('/adults');
					}}
				>
					Взрослые
				</Button>

			</div>
		)
	}
}



const mapStateToProps = (state, ownProps) => ({
	profile: state.user.profile,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	redirect: (page) => dispatch(pageActions.setPageWithoutHistory(page)),
});

Admins.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admins);
