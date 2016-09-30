import React from 'react';
import { connect } from 'react-redux';

import * as asyncActions from '../actions/async';

class Test extends React.Component {

	componentWillMount(){
	//	const { props } = this;
	}

	render(){
		const { props } = this;

		if (!props.profile){
			return null;
		}

		return(

			<div className="app__page app__page--test">

				<div className="app__header">

					<div className="app__logo-placeholder">

						<span className="app__logo">Кагоцел</span>

					</div>

					<div className="app__awards awards">

						<ul className="awards__list">

							<li className="awards__item awards__item--1">



							</li>

							<li className="awards__item awards__item--2">



							</li>

							<li className="awards__item awards__item--3">



							</li>

						</ul>

					</div>

				</div>

				<div className="app__wrap">

					{props.children}

				</div>


				<div className="app__disc">
					ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, ПЕРЕД ПРИМЕНЕНИЕМ ОЗНАКОМЬТЕСЬ С ИНСТРУКЦИЕЙ ИЛИ ПРОКОНСУЛЬТИРУЙТЕСЬ  СО СПЕЦИАЛИСТОМ
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

Test.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
