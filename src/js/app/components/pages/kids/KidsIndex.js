import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/common/Button';

//import * as asyncActions from '../../actions/async';
import * as pageActions from '../../../actions/page';

class KidsIndex extends React.Component {

	componentWillMount(){
		const { props } = this;

	}

	render(){
		const { props } = this;

		return (

			<div className="start start--kids">

				<div className="start__bubble bubble">

					<div className="start__text text">

						<p>
							Привет! Я Доктор Кагоцел. Я давно изучаю строение тела человека, исследую работу его органов, собираю интересные сведения и факты. Знаешь, к какому выводу я пришёл? Наш организм – загадочный и удивительный механизм. Я поделюсь с тобой несколькими наиболее поразительными фактами об особенностях человеческих органов. <br/>
							Начнём?
						</p>

					</div>

					<div className="start__button-placeholder">

						<Button 
							size="l"
							color="red"
							type="button"
							onClickHandler={ (e) => {
								props.goTo('/kids/anatomy');
							}}
						>
							Начать
						</Button>

					</div>

				</div>

			</div>

		);
	}
}



const mapStateToProps = (state, ownProps) => ({
	profile: state.user.profile,
	//results: state.results,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	//getUserResults: (userId) => dispatch(asyncActions.getUserResults(userId)),
	redirect: (page) => dispatch(pageActions.setPageWithoutHistory(page)),
	goTo: (page) => dispatch(pageActions.setPage(page)),
});

KidsIndex.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(KidsIndex);
