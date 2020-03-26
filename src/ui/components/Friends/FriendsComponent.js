import React from "react";
import search from "./png/search.png";
import "./friendsComponent.scss";
import {object, string} from "prop-types";
import ItemAdd from "../itemAdd";
import profile from "./png/profile.png";

const propTypes = {
    randomDataObject: object,
    name: string,
    value: string
};

// eslint-disable-next-line react/prop-types
const FriendComponent = ({onClickHandler, addItem, elements, name, value}) => {
    return (
        <div className="friends-wrapper">
            <header>
                <div className="header-container">
                    <img src={search} alt="kartinka"/>
                    <button className="button" onClick={onClickHandler}>
                        Add friends
                    </button>
                </div>
            </header>
            <p className="friends">Friends</p>
            <section>
                <div className="total-balance">
                    <div className="photo-block">
                        <img src={profile} alt="kartinachka"/>
                    </div>
                    <div className="balance-block">
                        <p className="label-paragraph">Total balance</p>
                        <p className="you-owe">You are oved $56 GRN</p>
                        {/* <p className='you-are-owed'>$54.54</p> */}
                    </div>
                </div>
            </section>
            <section>{elements}</section>
            <ItemAdd addItem={addItem}/>
            <label > {name} </label>
            <label > {value} </label>
        </div>
    );
};

FriendComponent.propTypes = propTypes;

export default FriendComponent;
