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

				<div className="app__header">

					<div className="app__logo-placeholder">

						<span className="app__logo">Кагоцел</span>

					</div>

					<div className="app__awards awards">

						<ul className="awards__list">

							<li className="awards__item">

								<span className="award-specialists award-specialists--inline">
									Выбор специалистов
								</span>

							</li>

							<li className="awards__item">

								<div className="award award--laureat">

									<div className="award__title">
										RUSSIAN PHARMA AWARDS
									</div>

									<div className="award__text">
										в&nbsp;номинации «Самый назначаемый
										препарат при&nbsp;профилактике
										и&nbsp;лечении ОРВИ и&nbsp;гриппа»**
									</div>

								</div>

							</li>

							<li className="awards__item">

								<div className="award award--best">

									<div className="award__title">
										ЛУЧШИЙ БЕЗРЕЦЕПТУРНЫЙ&nbsp;ПРЕПАРАТ
									</div>

									<div className="award__text">
										по версии премии Зеленый Крест 2015
									</div>

								</div>

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
