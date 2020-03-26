import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../common/footer';
import NotFound from '../components/NotFound';
import AccountContainer from '../components/AccountPage';
import ActivityPageContainer from '../components/Activity';
import AddPageContainer from '../components/AddPage';
import FriendsContainer from '../components/Friends';
import GroupsContainer from '../components/Groups';
// import LoginPage from '../components/LoginPage';

const ProtectedRoutes = () => (
	<div>
		<Switch>
			<Route exact path="/">
				<Redirect to="/groups" />
			</Route>
			<Route exact path="/groups">
				<GroupsContainer />
			</Route>
			<Route exact path="/account">
				<AccountContainer />
			</Route>
			<Route exact path="/activity">
				<ActivityPageContainer />
			</Route>
			<Route exact path="/add">
				<AddPageContainer />
			</Route>
			<Route exact path="/friends">
				<FriendsContainer />
			</Route>
			<Route component={NotFound} />
		</Switch>

		<Footer />

		{/* {{NotFound} ? null : <Footer />} */}

	</div>
);

export { ProtectedRoutes };
