import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Loading 		from '../components/loading/Loading';
import ErrorMessage from '../components/error/ErrorMessage';
import Login 		from '../components/pages/Login';
import App 			from '../components/App';
import Index 		from '../components/pages/Index';
import Kids 		from '../components/pages/Kids';
import Adults 		from '../components/pages/Adults';
import Admins 		from '../components/pages/Admins';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index} />
			<Route path="kids" component={Kids} />
			<Route path="adults" component={Adults} />
			<Route path="admins" component={Admins} />
		</Route>
		<Route path="/login" component={Login} />
	</Router>
);

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

