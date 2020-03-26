import React from 'react';
import './footerComponent.scss';
import { NavLink } from 'react-router-dom';
import friendsImg from './png/friendsImg.png'
import groupsImg from './png/groupsImg.png';
import plusImg from './png/plusImg.png';
import activityImg from './png/activityImg.png';
import accountImg from './png/accountImg.png'

const FooterComponent = () => (
	<footer className="footer">
		<NavLink to="/friends" className="navLink" activeClassName="is-active">
			<img className="imgbar" src={friendsImg} alt="newsbar" />
			<span>Friends</span>
		</NavLink>

		<NavLink to="/groups" className="navLink" activeClassName="is-active">
			<img className="imgbar" src={groupsImg} alt="barcrawlbar" />
			<span>Groups</span>
		</NavLink>

        <NavLink to="/add" exact className="navLink" activeClassName="is-active">
			<img className="imgbar add-button" src={plusImg} alt="randombar" />
			<span>Add</span>
		</NavLink>

		<NavLink to="/activity" exact className="navLink" activeClassName="is-active">
			<img className="imgbar" src={activityImg} alt="randombar" />
			<span>Activity</span>
		</NavLink>

		<NavLink to="/account" className="navLink" activeClassName="is-active">
			<img className="imgbar" src={accountImg} alt="mapbar" />
			<span>Account</span>
		</NavLink>
	</footer>
);

export default FooterComponent;
