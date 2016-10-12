import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Loading 			from '../components/loading/Loading';
import ErrorMessage 	from '../components/error/ErrorMessage';

import App 				from '../components/App';
import Test 			from '../components/Test';

import Login 			from '../components/pages/Login';
import AppIndex 		from '../components/pages/Index';

import Kids 			from '../components/pages/Kids';
import KidsIndex		from '../components/pages/kids/KidsIndex';
import KidsAnatomy		from '../components/pages/kids/KidsAnatomy';

import Adults 			from '../components/pages/Adults';
import AdultsIndex		from '../components/pages/adults/AdultsIndex';
import AdultsAnatomy	from '../components/pages/adults/AdultsAnatomy';
import AdultsForbidden	from '../components/pages/adults/AdultsForbidden';

import Admins 			from '../components/pages/Admins';


import TestIndex 		from '../components/pages-test/TestIndex';
import Quiz 			from '../components/pages-test/Quiz';

let routes;


if (location.href.indexOf('kagocel-2016-app-parents') > -1 ){

	routes = (
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={AdultsIndex} />
				<Route path="anatomy" component={AdultsAnatomy} />
				<Route path="forbidden" component={AdultsForbidden} />
			</Route>
			<Route path="/login" component={Login} />
		</Router>
	);

}else if (location.href.indexOf('kagocel-2016-app') > -1 ){

	routes = (
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={KidsIndex} />
				<Route path="anatomy" component={KidsAnatomy} />
			</Route>
			<Route path="/login" component={Login} />
		</Router>
	);

}else{
	routes = (
		<Router history={hashHistory}>
			<Route path="/" component={Test}>
				<IndexRoute component={TestIndex} />
				<Route path="quiz" component={Quiz} />
			</Route>
		</Router>
	);
}

class Root extends React.Component {

	render() {		
		return (
			<Provider store={this.props.store}>		
				<div className="app">
					{routes}
					
					<Loading 
						mixClass="app__loader"
						visibleClass="loader--visible"
					/>
					
					<ErrorMessage 
						mixClass="app__error"
					/>
				</div>
			</Provider>
		);
	}
}

export default Root;

