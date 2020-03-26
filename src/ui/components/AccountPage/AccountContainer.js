import React, {Component} from 'react';
import AccountComponent from './AccountComponent';

class AccountContainer extends Component {

    constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler = () => {
		console.log('piska');
		// this.props.push('/testing');
	};
    
    render () {
        return (
        <AccountComponent 
        // onClickHandler={this.onClickHandler}
        />
        ); 
    }
}


export default (AccountContainer);