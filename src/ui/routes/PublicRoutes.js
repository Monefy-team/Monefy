import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';

const PublicRoutes = () => (
	<div>
		<Switch>
			<Route exact path="/login">
				<LoginPage />
			</Route>
		</Switch>
	</div>
);

export { PublicRoutes };
