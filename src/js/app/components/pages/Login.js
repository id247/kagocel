import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/common/Button';

import * as asyncActions from '../../actions/async';
import * as pageActions from '../../actions/page';

class Login extends React.Component {

	componentWillMount(){
		const { props } = this;		
		if (props.profile){
			props.redirect('/');
		}
	}

	render(){
		const { props } = this;

		return (
			<div className="app__page login">

				<div className="login__wrap app__wrap">

					<div className="login__logo-placeholder">

						<span className="login__logo">Кагоцел</span>

					</div>

					<h1 className="login__title">
						Занимательная анатомия<br/>
						для всей семьи
					</h1>

					<div className="login__button-placeholder">

						<Button 
							size="xl"
							color="red"
							type="button"
							onClickHandler={props.login}
						>
							ОТКРЫТЬ ПРИЛОЖЕНИЕ
						</Button>
					
					</div>

					<div className="login__awards awards">

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

			</div>
		);
	}
}

Login.propTypes = {
	mixClass: React.PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
	profile: state.user.profile,
});

const mapDispatchToProps = (dispatch, ownProps) => ({ 
	login: () => dispatch(asyncActions.login()),
	init: () => dispatch(asyncActions.init()), 
	redirect: (page) => dispatch(pageActions.setPageWithoutHistory(page)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
