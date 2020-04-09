import React from 'react';
import './loginPage.scss';
import logo from './png/logo.png'

const LoginPage
 = ({ handleSubmit, toLogin, toSignIn}) => {
	return (
		<>
			<img alt='wof' src={logo} className='logo-png'/>
			<form>
				<div className='btn-container'>
					<button onClick={toLogin} className='to-login'>
						Login
					</button>
					<button onClick={toSignIn} className='to-registration'>
						Sign in
					</button>
				</div>
			</form>
		</>
	);
};

export default LoginPage;