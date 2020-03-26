import React, {Component} from "react";

import "./itemAdd.scss";

export default class ItemAdd extends Component {
    render() {
        return (
            <div className="item-add">
                <button className="submit-btn"
                        onClick={() => this.props.addItem("Vlad Kondr")}>
                    Add item
                </button>
            </div>
        );
    }
}
