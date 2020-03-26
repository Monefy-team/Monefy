/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './loginPage.scss';
import logo from './png/logo.png'

const LoginPage
 = ({ onClickHandler }) => {
	return (
		<div className="login_wrapper">
            <div className='logo-container'>
                <img src={logo} />
                <p>Splitwise</p>
            </div>
            <div className='btn-block'>
                <div className='log-in'>
                    LOG IN
                </div>
                <div className='sign-up'>
                    SIGN UP
                </div>
            </div>
            {/* <footer>
                <div className='footer-wrapper'>
                    <div className='terms'>
                        Terms
                    </div>
                    <div className='privacy-policy'>
                        Privacy Policy
                    </div>
                    <div className='contact-us'>
                        Contact us
                    </div>
                </div>
            </footer> */}
		</div>
	);
};

export default LoginPage;