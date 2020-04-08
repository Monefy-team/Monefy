import React, {Component} from "react";
import FriendComponent from "./FriendsComponent";
import {string, object, array} from "prop-types";
import profile from "./png/profile.png";
import {connect} from "react-redux";

const propTypes = {
    randomDataObject: object,
    name: string,
    value: string,
    data: array,
};

class FriendContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // тут стейта не треба через то шо ми маємо стейт
            // в адд компоненті а у цьому компоненті ми його отрисовуєм
            // беручи стейт через пропс
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler = () => {
        console.log(this.state.value);
    };

    render() {
        const elements = this.props.valueData.map(item => {
            if (item.name === undefined || item.value === undefined ) {
                return null;
            } else {
                return (
                    <div className="item-wrapper" key={item.id}>
                        <img src={profile} className="profile-img" alt="profileImg"/>
                        <p className="name">{item.name}</p>
                        <div className="oves-wrapper">
                            <p className="oves">oves you</p>
                            <p className="summa">{item.value} USD</p>
                        </div>
                        <div className="arrow">
                        </div>
                    </div>
                );
            }
        });
        return (
            <FriendComponent
                onClickHandler={this.onClickHandler}
                elements={elements}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        nameAddPage: state.addPageReducer.name,
        valueAddPage: state.addPageReducer.value,
        valueData: state.addPageReducer.data,
    };
};

FriendContainer.propTypes = propTypes;

export default connect(mapStateToProps, null) (FriendContainer);
