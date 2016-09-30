import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/common/Button';

import * as pageActions from '../../actions/page';

class TestIndex extends React.Component {

	componentWillMount(){
		const { props } = this;
	}

	render(){
		const { props } = this;

		return (

			<div className="test__inner">

				<h1 className="app__title test__title">
					Как провести выходные с ребёнком?
				</h1>

				<div className="test__text text">
					<p>
						Ответьте на вопросы о Вашем ребёнке и получите рекомендацию для организации семейного досуга.
					</p>
				</div>

				<div className="test__button-placeholder">

					<Button 
						size="l"
						color="red"
						type="button"
						onClickHandler={ (e) => {
							props.goTo('/quiz');
						}}
					>
						Пройти тест
					</Button>

				</div>

			</div>

		);
	}
}



const mapStateToProps = (state, ownProps) => ({
	profile: state.user.profile,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	goTo: (page) => dispatch(pageActions.setPage(page)),
});

TestIndex.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestIndex);
