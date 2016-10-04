'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import Root from './components/Root';

const store = configureStore(); 

const app = document.getElementById('app');

if (app){

	const store = configureStore(); 
	
	ReactDOM.render(
		<Root store={store} />,
		app
	);

}

