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

				<div className="login__sides">

					<div className="login__side login__side--1 side">

						<div className="side__item side__item--1-1">

							<span className="award-specialists">
								Выбор специалистов
							</span>

						</div>

						<div className="side__item side__item--1-2">

							<span className="award-leave">
								<span className="award-leave__text slogan">
									<span className="slogan__start">
										Осень —
									</span> <br />
									не время болеть
								</span>
							</span>

						</div>

						<div className="side__item side__item--1-3">

							<span className="girl">

								<div className="girl__girl"></div>
								<div className="girl__bag"></div>

							</span>

						</div>

						<div className="side__item side__item--1-4">

							<span className="award-laureate">
								**Кагоцел® стал лауреатом премии <br />
								«Russian Pharma Awards 2015»
							</span>

						</div>

					</div>

					<div className="login__side login__side--2 side">

						<div className="side__item side__item--2-1">

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

						</div>

						<div className="side__item side__item--2-2">

							<div className="award award--best">

								<div className="award__title">
									ЛУЧШИЙ БЕЗРЕЦЕПТУРНЫЙ&nbsp;ПРЕПАРАТ
								</div>

								<div className="award__text">
									по версии премии Зеленый Крест 2015
								</div>

							</div>

						</div>

						<div className="side__item side__item--2-3">

							<div className="award award--one">

								<div className="award__title">
									ДЛЯ ПРОФИЛАКТИКИ И&nbsp;ЛЕЧЕНИЯ ОРВИ*
								</div>

								<div className="award__text">
									* по данным маркетингового агентства «DSM Group»
								</div>

							</div>

						</div>

						<div className="side__item side__item--2-4">

							<span className="boy">

							</span>

						</div>

						<div className="side__item side__item--2-5">

							<div className="award award--age">

								<div className="award__title">
									Для взрослых <br />
									и детей с 3 лет
								</div>

							</div>

						</div>

					</div>

				</div>


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
