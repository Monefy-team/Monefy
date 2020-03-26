import React from "react";
import "./activityPageComponent.scss";
import search from './png/search.png'
import list from './png/list.png'

// eslint-disable-next-line react/prop-types
const ActivityPageComponent = ({onClickHandler}) => {
    return (
        <div className="friends-wrapper">
            <header>
                <img src={search} alt='img'/>
            </header>
            <section>
                <h1>Recent activity</h1>
            </section>
            <section>
                <div className='activity-item-wrapper'>
                    <img className='activity-item-img' src={list} alt='img'/>
                    <div className='description-wrapper'>
                        <p className='description'>
                            You added "kyla" in "place"
                        </p>
                        <p className='cost-ove'>
                            You get beck $14.00
                        </p>
                        <p className='date'>
                            Thursday at 22:02
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ActivityPageComponent;
