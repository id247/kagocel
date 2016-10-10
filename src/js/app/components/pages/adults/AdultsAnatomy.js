import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/common/Button';

//import * as asyncActions from '../../actions/async';
import * as pageActions from '../../../actions/page';


const bubbleTexts = {
	'3-6': {
		'text-1': {
			title: 'Кровь',
			text: 'Когда вирус проникает в кровь, появляются первые симптомы заболевания: повышение температуры, озноб, общая слабость. Позже к ним добавляется кашель, боль в груди. Вирус также увеличивает проницаемость сосудов и расширяет их, замедляя ток крови. Для гриппозной инфекции типично снижение клеточного иммунитета против бактерий, что объясняет развитие осложнений. В возрасте 3-6 лет иммунитет ребёнка только формируется, поэтому очень важно правильно и эффективно лечить простуду и грипп, чтобы иммунитет не ослабился и в дальнейшем мог активнее противостоять вирусам.',
		},
		'text-2': {
			title: 'Бронхи',
			text: 'Органы дыхательной системы первыми принимают на себя удар при заражении простудой и гриппом. Вирусы гриппа размножаются в клетках трахеи и бронхах, при неправильном лечении это может привести к развитию острого бронхита, который проявляется кашлем, слабостью, повышенной утомляемостью и температурой. Дети в возрасте до 12 лет больше других подвержены заражению, поэтому очень важно уделять пристальное внимание правильному лечению, чтобы не спровоцировать развитие осложнений. Чтобы справиться с простудой быстро и максимально эффективно, рекомендуется использовать для лечения препарат Кагоцел.',
		},
		'text-3': {
			title: 'Лёгкие',
			text: 'После бронхов инфекция поражает непосредственно легочную ткань и может вызвать воспаление легких. У детей 3-6 лет крупное поражение легочной паренхимы появляется редко, но пневмонию можно диагностировать по жёсткому дыханию, хрипам и температуре, если она держится более 3 дней. При таких симптомах следует незамедлительно обращаться к врачу!',
		},
		'text-4': {
			title: 'Сердце',
			text: 'Вирус гриппа инфицирует и сердечную мышцу, на видимом уровне это проявляется сниженным давлением, слабостью, приглушенным ритмом сердечных тонов. В начале болезни пульс частый в результате повышения температуры тела, при этом кожные покровы бледные. Через 2–3 дня с момента начала заболевания вместе с разбитостью в теле и вялостью пульс становится редким, а кожа пациента краснеет. ',
		},
		'text-5': {
			title: 'Сосуды',
			text: 'Сосудистая система очень страдает от вирусов гриппа. Эпителиальные оболочки стенок сосудов разрушаются, поражаясь токсинами и изменяя свои свойства. Вирусы гриппа повышают ломкость сосудов и делают их более уязвимыми для посторонних микроорганизмов. В результате у ребёнка может возникать кровотечение из носа, сыпь, мелкие прыщи на слизистых оболочках. Это происходит потому, что внутренние органы перенасыщаются кровью. Для детей 3-6 лет характерна более высокая частота сердцебиений, а минутный объём крови на единицу массы тела относительно велик.',
		},
		'text-6': {
			title: 'Мозг',
			text: 'Вирус заражает токсинами рецепторы в местах сплетения сосудов головного мозга. И тогда жидкость спинного мозга производится в увеличенных количествах. От этого у ребёнка провоцируются расстройства нейроциркуляции: он может страдать от повышенного давления. Из-за того, что клетки головного мозга интенсивно поражаются вирусами, токсины влияют на весь организм, и он отвечает на такую атаку повышенной аллергенностью. Это тяжелейшее состояние, которое требует немедленной госпитализации. Очень важно вовремя реагировать на проявление симптомов, чтобы не допустить развития такого состояния. ',
		},
		'text-7': {
			title: 'Миндалины',
			text: 'Очень часто вирусные инфекции становятся причиной болей в горле. Общий характерный признак всех вирусных ангин — покраснение глоточного кольца и задней стенки горла. Если на миндалинах появляются гнойники или они сильно увеличиваются в размерах, это говорит о том, что необходимо срочно принимать меры. В некоторых случаях увеличение миндалин настолько ощутимо, что они не позволяют больному глотать пищу и дышать ртом. Поэтому не стоит ждать развития этих симптомов, и при первых признаках необходимо незамедлительно обращаться к врачу! Особенно внимательно нужно следить за состоянием горла у детей 3–6 лет, поскольку они еще не в состоянии правильно воспринимать сигналы бедствия от своего организма, а промедление в такой ситуации может привести к самым тяжелым последствиям.',
		},
		'text-8': {
			title: 'Слизистые оболочки',
			text: 'Слизистая оболочка – первый и главный барьер на пути проникновения инфекции в организм человека. Именно через слизистую носа и рта в организм попадает вирус. Очень важно в возрасте 3–6 лет следить за личной гигиеной ребёнка: мыть ему руки и полоскать нос после посещения улицы и общественных мест. Если слизистая не защищает организм, вирус попадает дальше и поражает другие органы тела. ',
		},
		'text-9': {
			title: 'Лимфатические узлы',
			text: 'Основная функция лимфатических узлов — фильтрация лимфы и «складирование» элементов иммунной системы, атакующих чужеродные вещества и микроорганизмы, попадающие в лимфу. Респираторные заболевания – наиболее частая причина увеличения лимфоузлов: они становятся плотными на ощупь, умеренно болезненными. Увеличенные лимфоузлы говорят о том, что иммунитету ребёнка нужна поддержка в борьбе с вирусами. В некоторых случаях может развиться лимфаденит — серьезное осложнение, для лечения которого требуется антибиотикотерапия и, в зависимости от состояния, госпитализация.',
		},
		'text-10': {
			title: 'Селезёнка',
			text: 'Селезёнка в организме человека отвечает за четкую регуляцию системы кроветворения, за постоянную фильтрацию крови. При неосложненной форме гриппа и простуды увеличения селезёнки не наблюдается, однако при тяжелой форме она может увеличиваться. Чтобы помочь детскому организму справиться с инфекцией и не допустить развития осложнений, рекомендуется применять препарат Кагоцел, который разрешен детям с 3 лет и помогает в борьбе с вирусами даже при запоздалом лечении. ',
		},
	},
	'7-12': {
		'text-1': {
			title: 'Кровь',
			text: 'Когда вирус проникает в кровь, появляются первые симптомы заболевания: повышение температуры, озноб, общая слабость. Позже к ним добавляется кашель, боль в груди. Вирус также увеличивает проницаемость сосудов и расширяет их, замедляя ток крови. Для гриппозной инфекции типично снижение клеточного иммунитета против бактерий, что объясняет развитие осложнений. В возрасте 7-12 лет иммунитет ребёнка ещё не сформирован, поэтому очень важно правильно и эффективно лечить простуду и грипп, чтобы он не ослабился и в дальнейшем мог активнее противостоять вирусам.',
		},
		'text-2': {
			title: 'Бронхи',
			text: 'Органы дыхательной системы первыми принимают на себя удар при заражении простудой и гриппом. Вирусы гриппа размножаются в клетках трахеи и бронхах, при неправильном лечении это может привести к развитию острого бронхита, который проявляется кашлем, слабостью, повышенной утомляемостью и температурой. Дети в возрасте до 12 лет больше других подвержены заражению, поэтому очень важно уделять пристальное внимание правильному лечению, чтобы не спровоцировать развитие осложнений. Для предотвращения осложнений рекомендуется применять для лечения простуды и гриппа препарат Кагоцел.',
		},
		'text-3': {
			title: 'Лёгкие',
			text: 'После бронхов инфекция поражает непосредственно легочную ткань и может вызвать воспаление легких. У детей 7-12 лет это заболевание развивается примерно в 10 случаях из 1000. Это связано с тем, что в этом возрасте происходит расширение контактов ребенка с окружающим миром, что и способствует развитию заболевания. Пневмонию можно диагностировать по жёсткому дыханию, хрипам и температуре, если она держится более 3 дней. При таких симптомах следует незамедлительно обращаться к врачу! ',
		},
		'text-4': {
			title: 'Сердце',
			text: 'Вирус гриппа инфицирует и сердечную мышцу, на видимом уровне это проявляется сниженным давлением, слабостью, приглушенным ритмом сердечных тонов. В начале болезни пульс частый в результате повышения температуры тела, при этом кожные покровы бледные. Через 2–3 дня с момента начала заболевания вместе с разбитостью в теле и вялостью пульс становится редким, а кожа пациента краснеет.',
		},
		'text-5': {
			title: 'Сосуды',
			text: 'Сосудистая система очень страдает от вирусов гриппа. Эпителиальные оболочки стенок сосудов разрушаются, поражаясь токсинами и изменяя свои свойства. Вирусы гриппа повышают ломкость сосудов и делают их более уязвимыми для посторонних микроорганизмов. В результате у ребёнка может возникать кровотечение из носа, сыпь, мелкие прыщи на слизистых оболочках. Это происходит потому, что внутренние органы перенасыщаются кровью.',
		},
		'text-6': {
			title: 'Мозг',
			text: 'Вирус заражает токсинами рецепторы в местах сплетения сосудов головного мозга. И тогда жидкость спинного мозга производится в увеличенных количествах. От этого у ребёнка провоцируются расстройства нейроциркуляции: он может страдать от повышенного давления. Из-за того, что клетки головного мозга интенсивно поражаются вирусами, токсины влияют на весь организм, и он отвечает на такую атаку повышенной аллергенностью. Это тяжелейшее состояние, которое требует немедленной госпитализации. Очень важно вовремя реагировать на проявление симптомов, чтобы не допустить развития такого состояния. ',
		},
		'text-7': {
			title: 'Миндалины',
			text: 'Очень часто вирусные инфекции становятся причиной болей в горле. Общий характерный признак всех вирусных ангин — покраснение глоточного кольца и задней стенки горла. Если на миндалинах появляются гнойники или они сильно увеличиваются в размерах, это говорит о том, что необходимо срочно принимать меры. В некоторых случаях увеличение миндалин настолько ощутимо, что они не позволяют больному глотать пищу и дышать ртом.  Поэтому не стоит ждать развития этих симптомов, и при первых признаках необходимо незамедлительно обращаться к врачу! ',
		},
		'text-8': {
			title: 'Слизистые оболочки',
			text: 'Слизистая оболочка – первый и главный барьер на пути проникновения инфекции в организм человека. Именно через слизистую носа и рта в организм попадает вирус. Очень важно в возрасте 7–12 лет напоминать ребёнку о личной гигиене: мытье рук и полоскании носа после посещения улицы и общественных мест. Если слизистая не защищает организм, вирус попадает дальше и поражает другие органы тела.',
		},
		'text-9': {
			title: 'Лимфатические узлы',
			text: 'Основная функция лимфатических узлов — фильтрация лимфы и «складирование» элементов иммунной системы, атакующих чужеродные вещества и микроорганизмы, попадающие в лимфу. Респираторные заболевания – наиболее частая причина увеличения лимфоузлов: они становятся плотными на ощупь, умеренно болезненными. В некоторых случаях может развиться лимфаденит — серьезное осложнение, для лечения которого требуется антибиотикотерапия и, в зависимости от состояния, госпитализация.',
		},
		'text-10': {
			title: 'Селезёнка',
			text: 'Селезёнка в организме человека отвечает за четкую регуляцию системы кроветворения, за постоянную фильтрацию крови. При неосложненной форме гриппа и простуды увеличения селезёнки не наблюдается, однако при тяжелой форме она может увеличиваться. Чтобы помочь детскому организму справиться с инфекцией, рекомендуется применять препарат Кагоцел, который разрешен детям с 3 лет и помогает в борьбе с вирусами даже при запоздалом лечении. ',
		},
	},
	'13-18': {
		'text-1': {
			title: 'Кровь',
			text: 'Когда вирус проникает в кровь, появляются первые симптомы заболевания: повышение температуры, озноб, общая слабость. Позже к ним добавляется кашель, боль в груди. Вирус также увеличивает проницаемость сосудов и расширяет их, замедляя ток крови. Для гриппозной инфекции типично снижение клеточного иммунитета против бактерий, что объясняет развитие осложнений.',
		},
		'text-2': {
			title: 'Бронхи',
			text: 'Органы дыхательной системы первыми принимают на себя удар при заражении простудой и гриппом. В переходном возрасте бронхи ребёнка интенсивно растут, и очень важно в этот период защитить их от негативного воздействия вирусов. Если организм ослаблен от простуды или недосыпания, собственные микробы нашего организма опускаются из ротовой полости в бронхи и начинают размножаться, что может привести к развитию бронхита. Для предотвращения осложнений рекомендуется применять препарат Кагоцел для профилактики и лечения простуды и гриппа. ',
		},
		'text-3': {
			title: 'Лёгкие',
			text: 'После бронхов инфекция поражает непосредственно лёгочную ткань и может вызвать воспаление легких. У детей 13-18 ещё высок риск развития этого заболевания, поскольку в этом возрасте происходит эндокринологическая и иммунологическая перестройка организма. Пневмонию можно диагностировать по жёсткому дыханию, хрипам и температуре, если она держится более 3 дней.   При таких симптомах следует незамедлительно обращаться к врачу!',
		},
		'text-4': {
			title: 'Сердце',
			text: 'Вирус гриппа инфицирует и сердечную мышцу, на видимом уровне это проявляется сниженным давлением, слабостью, приглушенным ритмом сердечных тонов. В начале болезни пульс частый в результате повышения температуры тела, при этом кожные покровы бледные. Через 2–3 дня с момента начала заболевания вместе с разбитостью в теле и вялостью пульс становится редким, а кожа пациента краснеет.',
		},
		'text-5': {
			title: 'Сосуды',
			text: 'Сосудистая система очень страдает от вирусов гриппа. Эпителиальные оболочки стенок сосудов разрушаются, поражаясь токсинами и изменяя свои свойства. Вирусы гриппа повышают ломкость сосудов и делают их более уязвимыми для посторонних микроорганизмов. В результате у ребёнка может возникать кровотечение из носа, сыпь, мелкие прыщи на слизистых оболочках. Это происходит потому, что внутренние органы перенасыщаются кровью.',
		},
		'text-6': {
			title: 'Мозг',
			text: 'Вирус заражает токсинами рецепторы в местах сплетения сосудов головного мозга. И тогда жидкость спинного мозга производится в увеличенных количествах. От этого у ребёнка провоцируются расстройства нейроциркуляции: он может страдать от повышенного давления. Из-за того, что клетки головного мозга интенсивно поражаются вирусами, токсины влияют на весь организм, и он отвечает на такую атаку повышенной аллергенностью. Это тяжелейшее состояние, которое требует немедленной госпитализации. Очень важно вовремя реагировать на проявление симптомов, чтобы не допустить развития такого состояния. ',
		},
		'text-7': {
			title: 'Миндалины',
			text: 'Очень часто вирусные инфекции становятся причиной болей в горле. Общий характерный признак всех вирусных ангин — покраснение глоточного кольца и задней стенки горла. Если на миндалинах появляются гнойники или они сильно увеличиваются в размерах, это говорит о том, что необходимо срочно принимать меры. В некоторых случаях увеличение миндалин настолько ощутимо, что они не позволяют больному глотать пищу и дышать ртом.  Поэтому не стоит ждать развития этих симптомов, и при первых признаках необходимо незамедлительно обращаться к врачу!',
		},
		'text-8': {
			title: 'Слизистые оболочки',
			text: 'Слизистая оболочка – первый и главный барьер на пути проникновения инфекции в организм человека. Именно через слизистую носа и рта в организм попадает вирус. В возрасте 13–18 лет иммунитет ребёнка уже достаточно силен, чтобы справляться с вирусами, но необходимо напоминать школьнику о профилактике заболевания: мытье рук после посещения улицы и общественных мест.',
		},
		'text-9': {
			title: 'Лимфатические узлы',
			text: 'Основная функция лимфатических узлов — фильтрация лимфы и «складирование» элементов иммунной системы, атакующих чужеродные вещества и микроорганизмы, попадающие в лимфу. Респираторные заболевания – наиболее частая причина увеличения лимфоузлов: они становятся плотными на ощупь, умеренно болезненными. В некоторых случаях может развиться лимфаденит — серьезное осложнение, для лечения которого требуется антибиотикотерапия и, в зависимости от состояния, госпитализация.',
		},
		'text-10': {
			title: 'Селезёнка',
			text: 'Селезёнка в организме человека отвечает за четкую регуляцию системы кроветворения, за постоянную фильтрацию крови. При неосложненной форме гриппа и простуды увеличения селезёнки не наблюдается, однако при тяжелой форме она может увеличиваться. Чтобы помочь детскому организму справиться с инфекцией, рекомендуется применять препарат Кагоцел, который разрешен детям с 3 лет и помогает в борьбе с вирусами даже при запоздалом лечении.',
		},
	},
};

class AdultsAnatomy extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			bubbleVisible: false,
			textId: false,
			ageId: this._getAgeId(),
		}
	}

	componentWillMount(){
		const { props } = this;

	}

	_getAgeId(){
		const { age } = this.props;

		switch (true){
			case (age < 7):
				return '3-6';
			case (age < 13):
				return '7-12';
			case (age >= 13):
				return '13-18';
		}
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

			<div className="anatomy anatomy--adults">

				<ul className="anatomy__list">


					<li className="anatomy__item anatomy-item">

						<div className="anatomy-item__image anatomy-item__image--7">

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 1 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--7'}
								onClick={this._openBubbleHandler(1)}
							>
								Кровь
							</a>

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 2 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--2-2'}
								onClick={this._openBubbleHandler(2)}
							>
								Бронхи
							</a>


							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 3 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--2-3'}
								onClick={this._openBubbleHandler(3)}
							>
								Легкие
							</a>


							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 4 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--2-4'}
								onClick={this._openBubbleHandler(4)}
							>
								Сердце
							</a>


							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 5 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--2-5'}
								onClick={this._openBubbleHandler(5)}
							>
								Сосуды
							</a>

						</div>

						
					</li>


					<li className="anatomy__item anatomy-item">

						<div className="anatomy-item__image anatomy-item__image--4">

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 6 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--7'}
								onClick={this._openBubbleHandler(6)}
							>
								Мозг
							</a>

						</div>

					</li>


					<li className="anatomy__item">

						<div className="anatomy-item__image anatomy-item__image--6">

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 7 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--2-6'}
								onClick={this._openBubbleHandler(7)}
							>
								Миндалины
							</a>

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 8 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--2-7'}
								onClick={this._openBubbleHandler(8)}
							>
								Слизистые оболочки
							</a>

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 9 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--2-8'}
								onClick={this._openBubbleHandler(9)}
							>
								Лимфатические узлы

							</a>

							<a 
								href="#" 
								className={'anatomy-item__href ' + ( state.textId === 10 ? 'anatomy-item__href--active' : '' ) + ' anatomy-item__href--2-9'}
								onClick={this._openBubbleHandler(10)}
							>
								Селезенка
							</a>

						</div>
						
					</li>

				</ul>

				<div className={'anatomy__bubble anatomy__bubble--adults ' + (state.bubbleVisible ? 'anatomy__bubble--visible' : '') + ' anatomy-bubble'}>

					<div className="anatomy__bubble-inner anatomy__bubble-inner--adults bubble">

						<button 
							className="bubble__close button"
							onClick={this._closeBubbleHandler()}
						>x</button>

						<h3 className="anatomy-bubble__title">
							{state.textId && bubbleTexts[state.ageId]['text-' + state.textId ].title}
						</h3>

						<div className="anatomy-bubble__text text">
							<p>
								{state.textId && bubbleTexts[state.ageId]['text-' + state.textId ].text}
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
	age: state.age,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	//getUserResults: (userId) => dispatch(asyncActions.getUserResults(userId)),
	redirect: (page) => dispatch(pageActions.setPageWithoutHistory(page)),
	goTo: (page) => dispatch(pageActions.setPage(page)),
});

AdultsAnatomy.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdultsAnatomy);
