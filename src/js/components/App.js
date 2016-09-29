import React from 'react';
import { connect } from 'react-redux';

import * as asyncActions from '../actions/async';

class App extends React.Component {

	componentWillMount(){
		const { props } = this;
		props.init();
	}

	render(){
		const { props } = this;
		
		if (!props.profile){
			return null;
		}

		return(

			<div className="app__page">

				<div className="app__logo-placeholder">

					<span className="app__logo">Кагоцел</span>

				</div>

				<div className="app__awards-placeholder">

					<span className="app__awards"></span>

				</div>

				<div className="app__wrap">

					{props.children}
			
				</div>
			
			</div>

		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	profile: state.user.profile,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	init: () => dispatch(asyncActions.init()), 
});

App.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
