import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/common/Button';

//import * as asyncActions from '../../actions/async';
import * as pageActions from '../../../actions/page';


const bubbleTexts = {
	'text-1': {
		title: 'Желудок',
		text: 'Это желудок. Он отвечает за переваривание пищи. Когда пища поступает в желудок, он смешивает её с желудочным соком, расщепляет на более мелкие составляющие и превращает в густую пасту. Вместе с едой мы иногда глотаем и воздух. В пищеварительном тракте он превращается в газ, и наш организм пытается от него избавиться с помощью отрыжки. Кстати, ещё наш желудок умеет стесняться: когда ты краснеешь, краснеют и стенки желудка. ',
	},
	'text-2': {
		title: 'Кости',
		text: 'Это желудок. Он отвечает за переваривание пищи. Когда пища поступает в желудок, он смешивает её с желудочным соком, расщепляет на более мелкие составляющие и превращает в густую пасту. Вместе с едой мы иногда глотаем и воздух. В пищеварительном тракте он превращается  ',
	},
};

class KidsAnatomy extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			bubbleVisible: false,
			textId: 1,
		}
	}

	componentWillMount(){
		const { props } = this;

	}

	_openBubble(textId){
		this.setState({
			...this.state,
			...{
				textId: textId,
				bubbleVisible: true,
			}
		})
	}

	_closeBubble(){
		this.setState({
			...this.state,
			...{
				bubbleVisible: false,
			}
		})
	}

	_openBubbleHandler = (textId) => (e) =>{
		e.preventDefault();

		this._openBubble(textId);
	}

	_closeBubbleHandler = () => (e) =>{
		e.preventDefault();

		this._closeBubble();
	}

	render(){
		const { props, state } = this;

		return (

			<div className="anatomy anatomy--kids">

				<ul className="anatomy__list">

					<li className="anatomy__item anatomy-item anatomy-item--1">

						<a 
							href="#" 
							className="anatomy-item__href anatomy-item__href--1"
							onClick={this._openBubbleHandler(1)}
						>
							Позвоночник
						</a>


						<a 
							href="#" 
							className="anatomy-item__href anatomy-item__href--2"
							onClick={this._openBubbleHandler(2)}
						>
							Кости
						</a>

						
					</li>

					<li className="anatomy__item anatomy-item anatomy-item--2">

						<a 
							href="#" 
							className="anatomy-item__href anatomy-item__href--3"
							onClick={this._openBubbleHandler(3)}
						>
							Мышцы
						</a>

						
					</li>


					<li className="anatomy__item anatomy-item anatomy-item--3">

						<a 
							href="#" 
							className="anatomy-item__href anatomy-item__href--4"
							onClick={this._openBubbleHandler(4)}
						>
							Кровеносные<br/>
							сосуды
						</a>


						<a 
							href="#" 
							className="anatomy-item__href anatomy-item__href--5"
							onClick={this._openBubbleHandler(5)}
						>
							Легкие
						</a>


						<a 
							href="#" 
							className="anatomy-item__href anatomy-item__href--6"
							onClick={this._openBubbleHandler(6)}
						>
							Сердце
						</a>

						
					</li>


					<li className="anatomy__item anatomy-item anatomy-item--4">

						<a 
							href="#" 
							className="anatomy-item__href anatomy-item__href--7"
							onClick={this._openBubbleHandler(7)}
						>
							Мозг
						</a>

						
					</li>


					<li className="anatomy__item anatomy-item anatomy-item--5">

						<a 
							href="#" 
							className="anatomy-item__href anatomy-item__href--8"
							onClick={this._openBubbleHandler(8)}
						>
							Печень
						</a>

						<a 
							href="#" 
							className="anatomy-item__href anatomy-item__href--9"
							onClick={this._openBubbleHandler(9)}
						>
							Селезенка
						</a>

						<a 
							href="#" 
							className="anatomy-item__href anatomy-item__href--10"
							onClick={this._openBubbleHandler(10)}
						>
							Желудок
						</a>

						<a 
							href="#" 
							className="anatomy-item__href anatomy-item__href--11"
							onClick={this._openBubbleHandler(11)}
						>
							Кишечник
						</a>

						
					</li>

				</ul>

				<div className={'anatomy__bubble ' + (state.bubbleVisible ? 'anatomy__bubble--visible' : '') + ' anatomy-bubble bubble'}>

					<button 
						className="bubble__close button"
						onClick={this._closeBubbleHandler()}
					>x</button>

					<h3 className="anatomy-bubble__title">
						{bubbleTexts['text-' + state.textId ].title}
					</h3>

					<div className="anatomy-bubble__text text">
						<p>
							{bubbleTexts['text-' + state.textId ].text}
						</p>
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

KidsAnatomy.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(KidsAnatomy);
