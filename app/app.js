// @flow
import { hot } from "react-hot-loader/root";
import React from "react";
import { Provider } from 'react-redux';
import store from './store';

import "./app.global.css";
import ConfigContainer from './components/ConfigContainer';
import StatusContainer from './components/StatusContainer';
import { IntlProvider } from 'react-intl'; 

const App = () => {
	return (
		<Provider store={store}>
			<IntlProvider locale="pt">
				<div className="container">
					<ConfigContainer />
					<StatusContainer />
				</div>
			</IntlProvider>
		</Provider>
	)
};

export default module.hot ? hot(App) : App;
