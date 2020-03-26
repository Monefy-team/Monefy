/* eslint-disable jsx-a11y/alt-text */
import React, {Fragment} from 'react';
import './notFound.scss';
// import img from './png/img.png'

const NotFound = () => {
    return (
        <Fragment>
            <div className="face">
                <div className="band">
                    <div className="red">
                    </div>
                    <div className="white">
                    </div>
                    <div className="blue">
                    </div>
                </div>
                <div className="eyes">
                </div>
                <div className="dimples">
                </div>
                <div className="mouth">
                </div>
            </div>
			<h1>
				Oops! Something went wrong!
			</h1>
			<div className='button'>
				return to home
			</div>
        </Fragment>
    );
};

export default NotFound;
