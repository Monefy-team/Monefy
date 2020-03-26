import React, {Component} from 'react';
import ActivityPageComponent from './ActivityPageComponent';

class ActivityPageContainer extends Component {

    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler = () => {
        console.log('piska');
        // this.props.push('/testing');
    };

    render() {
        return (
            <ActivityPageComponent
                // onClickHandler={this.onClickHandler}
            />
        );
    }
}


export default (ActivityPageContainer);