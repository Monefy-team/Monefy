import React, {Component} from 'react';
import GroupsComponent from './GroupsComponent';

class GroupsContainer extends Component {

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
        <GroupsComponent 
        // onClickHandler={this.onClickHandler}
        />
        ); 
    }
}


export default (GroupsContainer);