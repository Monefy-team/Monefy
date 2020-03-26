import React from "react";
import "./addPageComponent.scss";
import { func } from "prop-types";
import close from "./png/close.png";
import list from "./png/list.png";
import grn from "./png/grn.png";

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
      <header>
        <div className="group-name">
          <p>With you and: All of "Daun Hata" </p>
        </div>
      </header>
      <section>
        <div className="wrapper-container">
          <form onSubmit={handleSubmit}>
            <label>
              <img className="list-img" src={list} alt="kartinkalist" />
              <input type="text" onChange={handleChangeName} />
            </label>
            <label>
              <img className="grn-img" src={grn} alt="kartinkalist" />
              <input type="number" onChange={handleChangeValue} />
            </label>
            <button
                className="submit-btn" onClick={addItem}>
              Send item
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

AddPageComponent.propTypes = propTypes;
export default AddPageComponent;
