import React, {Component} from "react";
import FriendComponent from "./FriendsComponent";
import {string, object} from "prop-types";
import profile from "./png/profile.png";
import {connect} from "react-redux";

const propTypes = {
    randomDataObject: object,
    name: string,
    value: string
};

class FriendContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: "",
            // value: "",
            addData: [{name: "Vlad Andree", value: 30.9, id: 1}]
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    maxId = 100;

    onClickHandler = () => {
        console.log(this.state.value);
    };

    addItem = () => {
        const newItem = {
            name: this.props.nameAddPage,
            value: this.props.valueAddPage,
            id: this.maxId++
        };

        this.setState(({addData}) => {
            const newArr = [...addData, newItem];
            return {
                addData: newArr
            };
        });
    };

    render() {
        const elements = this.state.addData.map(item => {
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
        });
        return (
            <FriendComponent
                onClickHandler={this.onClickHandler}
                addItem={this.addItem}
                elements={elements}
                name={this.props.nameAddPage}
                value={this.props.valueAddPage}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        nameAddPage: state.addPageReducer.name,
        valueAddPage: state.addPageReducer.value,
    };
};

FriendContainer.propTypes = propTypes;

export default connect(mapStateToProps, null) (FriendContainer);
