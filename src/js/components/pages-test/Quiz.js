import React from 'react';
import { connect } from 'react-redux';

import { PromoOptions } from 'appSettings';

import Button from '../../components/common/Button';

import * as asyncActions from '../../actions/async';
import * as pageActions from '../../actions/page';


const questions = [
	{
		title: 'Чем Ваш ребёнок предпочитает заниматься в свободное время?',
		answers: [
			{
				title: 'Обычно увлечен своими делами в комнате: читает, рисует, собирает конструктор.',
				points: 1,
			},
			{
				title: 'Как только выдаётся свободная минутка, тут же просится к друзьям и одноклассникам.',
				points: 0,
			},
			{
				title: 'Старается чем-то занять себя рядом с нами: смотрит телевизор с папой, помогаетмаме на кухне.',
				points: 0,
			},
		],
		multi: true,
	},
	{
		title: 'Как зовут лучшего аиста в курьерской службе?',
		answers: [
			{
				title: 'Джуниор',
				points: 5,
			},
			{
				title: 'Джери',
				points: 0,
			},
			{
				title: 'Джаред',
				points: 0,
			},
		],
		multi: true,
	},
	{
		title: 'Как зовут его подругу?',
		answers: [
			{
				title: 'Лютик',
				points: 5,
			},
			{
				title: 'Цветик',
				points: 0,
			},
			{
				title: 'Василек',
				points: 0,
			},
		],
		multi: true,
	},
	{
		title: 'Раньше аисты доставляли детей. По сюжету мультфильма они поменяли квалификацию и теперь доставляют именно это. Что?',
		answers: [
			{
				title: 'Счастье',
				points: 0,
			},
			{
				title: 'Цветы',
				points: 0,
			},
			{
				title: 'Посылки',
				points: 5,
			},
		],
		multi: true,
	},
	{
		title: 'Мальчик в трейлере просит своих родителей перенести дымоход в другое место. Для чего?',
		answers: [
			{
				title: 'Чтобы удобнее было сидеть на крыше',
				points: 0,
			},
			{
				title: 'Чтобы аист принес ему братика',
				points: 5,
			},
			{
				title: 'Чтобы Санта-Клаусу было проще попасть в дом на Рождество',
				points: 0,
			},
		],
		multi: true,
	},
	{
		title: 'Отметь животных, которых ты увидел в трейлере! Ответов здесь несколько, и ты можешь заработать баллы за каждый верный ответ.',
		answers: [
			{
				title: 'Волк',
				points: 3,
			},
			{
				title: 'Белый медведь',
				points: 3,
			},
			{
				title: 'Обезьяна',
				points: 3,
			},
			{
				title: 'Кошка',
				points: 0,
			},
			{
				title: 'Пингвин',
				points: 5,
			},
			{
				title: 'Заяц',
				points: 0,
			},
			{
				title: 'Аист',
				points: 0,
			},
			{
				title: 'Попугай',
				points: 0,
			},
		],
		multi: true,
	},
];

class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			correctAnswers: 0,
			points: 0,
			startTime: 0,
			time: 0,
			showResults: false,
			currentQuestion: 1,
			modalVisible: true,
		};

	}

	componentWillMount(){
		const { props } = this;
	}

	componentWillUnmount(){
	}

	componentDidMount(){
	}

	_nextQuestion(){
		const { props, state } = this;

		if (state.currentQuestion === questions.length){
			//props.getResults(state.answers);

			this.setState({
				...this.state,
				...{
					showResults: true,
				}
			});

			props.setQuizData({
				points: state.points,
				time: state.time,
			});

		}else{
			this.setState({
				...this.state,
				...{
					currentQuestion: this.state.currentQuestion + 1,
				}
			});
		}
	}

	_addAnswerPoints(points){

		this.setState({
			...this.state,
			...{
				correctAnswers: this.state.correctAnswers + 1,
				points: this.state.points + points,
			}
		});

		console.log(this.state);
	}

	_selectAnswerHandler = (questionIndex, points) => (e) => {
		e.preventDefault();

		this._addAnswerPoints(points);

		setTimeout(() => { //hack for update state twice
		 	this._nextQuestion();
		}, 0);

	}
	_selectMultiAnswerHandler = (questionIndex) => (e) => {
		e.preventDefault();

		const checkedAnswers = this.refs.answers.querySelectorAll('.quiz-radio__input:checked');

		const points = [...checkedAnswers].reduce( (prev, answer) => {
			return prev + parseInt(answer.value);
		}, 0);


		this._addAnswerPoints(points);

		setTimeout(() => { //hack for update state twice
		 	this._nextQuestion();
		}, 0);

	}

	_goBackHandler = () => (e) => {
		e.preventDefault();
		this.props.goTo('/');
	}


	_question(questionIndex, question){
		const { props, state } = this;

		return(
			<div
				className={(
					'quiz__item '
					+ ( state.currentQuestion === questionIndex ? 'quiz__item--visible' : '')
					+ ' quiz-item'
					)}
				key={questionIndex}
				>

					<h3 className="quiz-item__title">
						{question.title}
					</h3>

					<ul className="quiz-item__answers" ref="answers">

						{question.answers.map( (answer, i) => {

							if (question.multi){

								return (
								<li className="quiz-item__answer quiz-item__answer--multi" key={questionIndex + i}>

									<label className="quiz-radio">
										<input 
											type="radio"
											className="quiz-radio__input"
											name={'question' + questionIndex}
											defaultChecked={(i === 0)}
											value={answer.points}
											//onChange={this._selectAnswerHandler(questionIndex, answer.points)}
										/>
										<span className="quiz-radio__text">
											{answer.title}
										</span>
									</label>

								</li>
								);
							}

							return (
							<li className="quiz-item__answer" key={questionIndex + i}>

								<button
									className="quiz-item__answer-button"
									onClick={this._selectAnswerHandler(questionIndex, answer.points)}
								>
									{answer.title}
								</button>

							</li>
							);

						})}

					</ul>

					{
						!question.multi
						? null
						:
						(

						<div className="quiz-item__button-placeholder">						

							<Button
								mixClass="quiz-item__button"
								size="l"
								color="red"
								type="button"
								onClickHandler={this._selectMultiAnswerHandler()}
							>
								<span className="button__text">Ответить</span>
							</Button>

						</div>	

						)

					}

			</div>
		);
	}


	render(){
		const { props, state } = this;


		return(
			
			<div className="quiz">
				{
					state.showResults
					?
					(
						<div className="quiz__results quiz-results">

							<div className="quiz-results__title">
								Результат
							</div>

							<div className="quiz-results__text text">

								<p>
									Похоже, Ваш ребёнок неплохо проводит время наединес собой. В этом случае Вы всегда можете быть уверены, что он сам найдет, чем себя занять в свободное время. Но любовь к уединению вовсе не означает, что ребёнку не придутся по душе семейные развлечения. Однако выбирая их, Вам стоит сделать упор на спокойные и умиротворяющие занятия, в которых ребёнок сможет одновременно и находиться в кругу семьи, и проявить свою индивидуальность. Вот несколько вариантов проведения семейного досуга для вас.
Концерт. Музыка способствует гармоничному развитию ребёнка: она успокаивает и расслабляет, развивает воображение, память, творческие способности и художественный вкус. Живой звук — это живая энергетика, которая вызывает сильные и приятные эмоции.
Творческий мастер-класс. С каждым годом появляется все больше увлекательных и непродолжительных занятий для всей семьи. Вы можете подобрать программу, подходящую именно вам: роспись по стеклу или керамике, лепка из глины, гончарное мастерство, кулинарные занятия, изготовление украшений из полимерной глины, валяние шерсти и многое другое. 
Настольные игры. Игры дают возможность сосредоточиться, проявить свои способности, потренировать мышление. Вы можете выбрать игру по мотивам любимого мультфильма ребёнка или в зависимости от его увлечений: логическую, творческую, интеллектуальную. Такое развлечение разнообразит семейные вечера. Кроме того, вы можете потренироватьнавыки командной игры, пригласив в качестве соперника семью ваших друзей с детьми. 

								</p>


							</div>	

							<div className="quiz-results__button-placeholder">						

								<Button
									mixClass="quiz-results__button"
									size="m"
									color="gray"
									type="button"
									onClickHandler={this._goBackHandler()}
								>
									<span className="button__text">Пройти заново</span>
								</Button>

							</div>	

						</div>
					)
					:
					(
						<div className="quiz__questions">

							{questions.map( (question, index) => (
								this._question(index + 1, question)
							))}

						</div>
					)
				}
			</div>
		);
	}
}



const mapStateToProps = (state, ownProps) => ({
	quiz: state.quiz,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	setQuizData: (data) => dispatch(asyncActions.setQuizData(data)),
	redirect: (page) => dispatch(pageActions.setPageWithoutHistory(page)),
	goTo: (page) => dispatch(pageActions.setPage(page)),
});

Quiz.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
