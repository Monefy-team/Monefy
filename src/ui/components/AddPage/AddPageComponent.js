import React from "react";
import "./addPageComponent.scss";
import { func } from "prop-types";
import close from "./png/close.png";
import price from './png/price.svg'
import list from "./png/list.png";
import monefy from './png/monefy.png';

const propTypes = {
  AddItem: func,
  CloseClick: func,
  SaveClick: func,
  handleChangeName: func,
  handleChangeGrn: func,
  handleSubmit: func
};
// eslint-disable-next-line react/prop-types
const AddPageComponent = ({
  CloseClick,
  SaveClick,
  handleChangeName,
                            addItem,
  handleChangeValue,
  handleSubmit
}) => {
  return (
    <>
      <div className="nav-panel">
        <button type="button" className="close-btn" onClick={CloseClick}>
          <img className="close" src={close} alt="img" />
        </button>
        <p className="nav-txt">Add an expense</p>
        <button type="button" className="save-btn" onClick={SaveClick}>
          <p className="save">Save</p>
        </button>
      </div>

      <img alt='wof' src={monefy} className='form-logo-img'/>

      <section>
        <div className="wrapper-container">
          <form onSubmit={handleSubmit}>
            <div className='form-container'>
              <div className='name-container'>
                <img src={list} className='name-img' alt='wof'/>
                <input className='name-input' type="text"
                     placeholder='Enter name' onChange={handleChangeName}
                 />
              </div>
              <div className='price-container'>
                <img src={price} className='price-img' alt='wof'/>
                <input className='value-input' type="number"
                       placeholder='Enter price' onChange={handleChangeValue}
                       inputMode='numeric' />
              </div>
            <button
                className="submit-btn" onClick={addItem}>
              Send item
            </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

AddPageComponent.propTypes = propTypes;
export default AddPageComponent;
