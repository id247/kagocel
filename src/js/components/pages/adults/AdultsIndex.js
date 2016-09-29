import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/common/Button';

//import * as asyncActions from '../../actions/async';
import * as ageActions from '../../../actions/age';
import * as pageActions from '../../../actions/page';

class AdultsIndex extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			ageError: false,
		}
	}

	componentWillMount(){
		const { props } = this;

	}

	_setError(errorState){
		this.setState({
			...this.state,
			...{
				ageError: errorState,
			}
		})
	}

	_ageChange(age){

		const { props, state } = this;

		if (!Number.isInteger(age) || age < 1 || age > 18){
			this._setError(true);
			return false;
		}

		if (state.ageError){
			this._setError(false);
		}

		props.ageSet(age);
	}

	_ageChangeHandler = () => (e) => {
		this._ageChange(parseInt(e.target.value));
	}

	render(){
		const { props, state } = this;

		return (

			<div className="start start--adults">

				<div className="start__bubble bubble">

					<div className="start__text text">

						<p>
							Здравствуйте! Я Доктор Кагоцел. Я исследую работу органов человеческого тела и изучаю, как влияют на них простудные заболевания, вирусы и грипп. Когда мы болеем, практически каждый орган подвергается негативному воздействию. Если не лечить простуду должным образом, заболевание может распространиться по всему нашему телу.
						</p>
						<p>
							Отметьте возраст Вашего ребёнка, чтобы узнать характерные особенности воздействия инфекции на детские органы.
						</p>

					</div>

					<div className="start__age start-age">

						<div className="start-age__title">
							{state.ageError ? 'Укажите корректный возраст в диапазоне от 1 до 18 лет:' : 'Укажите, сколько ребенку полных лет:'}
						</div>

						<div className="start-age__item">

							<input type="number" name="age" 
								className="start-age__input" 
								onChange={this._ageChangeHandler()}
								value={props.age}
							/>

						</div>

						<div className="start-age__item">

							<Button 
								size="l"
								color="red"
								type="button"
								onClickHandler={ (e) => {
									props.goTo('/adults/anatomy');
								}}
							>
								Получить рекомендацию
							</Button>

						</div>

					</div>

				</div>

			</div>

		);
	}
}



const mapStateToProps = (state, ownProps) => ({
	profile: state.user.profile,
	age: state.age,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	ageSet: (age) => dispatch(ageActions.set(age)),
	redirect: (page) => dispatch(pageActions.setPageWithoutHistory(page)),
	goTo: (page) => dispatch(pageActions.setPage(page)),
});

AdultsIndex.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdultsIndex);
