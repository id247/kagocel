import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/common/Button';

//import * as asyncActions from '../../actions/async';
import * as pageActions from '../../../actions/page';


const bubbleTexts = {
	'text-1': {
		title: 'Позвоночник',
		text: 'Удивительно, но из-за особенностей его строения наш рост может изменяться в течение дня на 1–2 см! Пока мы сидим в школе или ходим, на позвоночник давит сила нашего собственного веса.  Это ведет к небольшому уменьшению роста. После тренировок с гирей или штангой рост может уменьшиться даже на 2–3 см! Но когда мы спим, на позвоночник ничего не давит, и наш рост восстанавливается. Кстати, рост человека может меняться до 26 лет.',
	},
	'text-2': {
		title: 'Кости',
		text: 'При рождении у нас примерно 300 костей, но в процессе взросления их количество уменьшается до 206. Так происходит потому, что в ходе взросления наши кости срастаются и становятся тверже. А зуб — единственная часть человеческого тела, которая не умеет восстанавливаться. Поверхность зуба покрыта эмалью, которая не является живой тканью. И это означает, что восстановиться она не может, что и обеспечивает стоматологов работой.',
	},
	'text-3': {
		title: 'Мышцы',
		text: 'Благодаря им мы можем двигаться и совершать физические усилия. В нашем теле около 640 мышц. Чтобы сделать один шаг, мы задействуем примерно 200 мышц. Самая сильная наша мышца — язык. Около 25% всех мышечных волокон сосредоточены на лице и шее человека. Поэтому наша мимика может быть такой разнообразной и красноречивой. При разговоре в теле человека синхронно действуют около 100 мышц. А самая короткая мышца – стременная – та, что напрягает барабанную перепонку. Её длина – всего 1,27 мм.',
	},
	'text-4': {
		title: 'Кровеносные сосуды',
		text: 'По ним кровь поступает к клеткам и органам нашего тела, а углекислый газ и другие отходы жизнедеятельности – выводятся. Если сложить длину всех кровеносных сосудов в нашем организме, то получится сеть длиной 200 тысяч километров! А это, между прочим, половина  расстояния до луны. Ещё в кровеносной системе есть капилляры – самые маленькие сосуды. Они примерно в 50 раз тоньше человеческого волоса. ',
	},
	'text-5': {
		title: 'Лёгкие',
		text: 'Благодаря им в наш организм поступает кислород. А задумывался ли ты, почему лёгкие получили такое название? Это единственный орган, который способен держаться на поверхности воды, все остальные тонут. Каждый день через наши лёгкие проходит около 10 000 литров воздуха, а в день человек в среднем делает 20 000–25 000 вдохов и выдохов. У новорожденных лёгкие бледно-розового цвета, но со временем они заметно темнеют из-за вдыхаемой пыли.',
	},
	'text-6': {
		title: 'Сердце',
		text: 'Это сердце. Работая непрерывно, оно выполняет важнейшую функцию: качает кровь к клеткам и органам нашего тела. За нашу жизнь сердце успевает накачать почти 200 цистерн крови!  Кстати, знаешь, почему оно стучит? Этот звук раздаётся тогда, когда захлопываются сердечные клапаны. ',
	},
	'text-7': {
		title: 'Мозг',
		text: 'Мозг – орган, который отвечает за все процессы в нашем организме. Средняя масса человеческого мозга — 1400–1500 грамм, но чем больше мозг тренировать, тем больше он становится! Не зря говорят, что дети всё «впитывают как губка»: самое интенсивное интеллектуальное развитие происходит у детей в возрасте 2–12 лет. Кстати, знаешь, почему мы зеваем по утрам? Наш мозг таким образом пытается получить больше кислорода: это помогает ему проснуться. ',
	},
	'text-8': {
		title: 'Печень',
		text: 'Это печень. Её главная функция – обезвреживать аллергены, яды, токсины, хранить запас витаминов. Печень – второй по величине орган в нашем теле. Её средний вес – около 1,5 килограммов. Печень является одним из немногих органов, способных к регенерации. Это значит, что она может восстановить свой первоначальный размер, если по какой-то причине часть органа была удалена. Именно поэтому в медицине сегодня возможна пересадка части печени от одного человека к другому, после которой живой донор не теряет в качестве жизни. ',
	},
	'text-9': {
		title: '',
		text: '',
	},
	'text-10': {
		title: 'Желудок',
		text: 'Он отвечает за переваривание пищи. Когда пища поступает в желудок, он смешивает её с желудочным соком, расщепляет на более мелкие составляющие и превращает в густую пасту. Вместе с едой мы иногда глотаем и воздух. В пищеварительном тракте он превращается в газ, и наш организм пытается от него избавиться с помощью отрыжки. Кстати, ещё наш желудок умеет стесняться: когда ты краснеешь, краснеют и стенки желудка. ',
	},
	'text-11': {
		title: 'Кишечник',
		text: 'Это кишечник. С его помощью наш организм усваивает питательные вещества из пищи и избавляется от ненужного. Длина тонкой кишки – около 7 метров, а площадь его поверхности — около 250 м2. Почти как теннисный корт! Стенки тонкого кишечника состоят из множества складок и ворсинок, покрытых микроскопическими выступами. Эти особенности позволяют ему лучше усваивать пищу, а также делают площадь его поверхности такой большой.',
	},
};

class KidsAnatomy extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			bubbleVisible: false,
			textId: false,
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
				//textId: false,
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

					<li className="anatomy__item anatomy-item">

						<div className="anatomy-item__image anatomy-item__image--1">

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 1 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--1'}
								onClick={this._openBubbleHandler(1)}
							>
								Позвоночник
							</a>


							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 2 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--2'}
								onClick={this._openBubbleHandler(2)}
							>
								Кости
							</a>
							
						</div>

					</li>

					<li className="anatomy__item anatomy-item">

						<div className="anatomy-item__image anatomy-item__image--2">

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 3 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--3'}
								onClick={this._openBubbleHandler(3)}
							>
								Мышцы
							</a>
							
						</div>

						
					</li>


					<li className="anatomy__item anatomy-item">

						<div className="anatomy-item__image anatomy-item__image--3">

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 4 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--4'}
								onClick={this._openBubbleHandler(4)}
							>
								Кровеносные<br/>
								сосуды
							</a>


							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 5 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--5'}
								onClick={this._openBubbleHandler(5)}
							>
								Легкие
							</a>


							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 6 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--6'}
								onClick={this._openBubbleHandler(6)}
							>
								Сердце
							</a>
							
						</div>

						
					</li>


					<li className="anatomy__item anatomy-item">

						<div className="anatomy-item__image anatomy-item__image--4">

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 7 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--7'}
								onClick={this._openBubbleHandler(7)}
							>
								Мозг
							</a>
							
						</div>

						
					</li>


					<li className="anatomy__item anatomy-item">
						
						<div className="anatomy-item__image anatomy-item__image--5">

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 9 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--8'}
								onClick={this._openBubbleHandler(8)}
							>
								Печень
							</a>

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 10 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--10'}
								onClick={this._openBubbleHandler(10)}
							>
								Желудок
							</a>

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 11 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--11'}
								onClick={this._openBubbleHandler(11)}
							>
								Кишечник
							</a>

						</div>
						
					</li>

				</ul>

				<div className={'anatomy__bubble anatomy__bubble--kids ' + (state.bubbleVisible ? 'anatomy__bubble--visible' : '') + ' anatomy-bubble'}>

					<div className="anatomy__bubble-inner anatomy__bubble-inner--kids bubble">
						
						<button 
							className="bubble__close button"
							onClick={this._closeBubbleHandler()}
						>x</button>

						<h3 className="anatomy-bubble__title">
							{state.textId && bubbleTexts['text-' + state.textId ].title}
						</h3>

						<div className="anatomy-bubble__text text">
							<p>
								{state.textId && bubbleTexts['text-' + state.textId ].text}
							</p>
						</div>

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
