import React, { Component } from "react";
import AddPageComponent from "./AddPageComponent";
import { push } from "connected-react-router";
import { func, string } from "prop-types";
import { connect } from "react-redux";
import {addPageComponent} from '../../../reduxStore/add/actions'
import {addPageReducer} from "../../../reduxStore/add/reducer";

const propTypes = {
  push: func,
  SaveClick: func,
  AddItem: func,
  CloseClick: func,
  handleChangeName: func,
  handleChangeGrn: func,
  name: string,
  value: string
};

class AddPAgeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: "",
      addData: [{name: "Vlad Andree", value: 30.9, id: 1}]
    };
    this.CloseClick = this.CloseClick.bind(this);
    this.SaveClick = this.SaveClick.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  maxId = 100;

  CloseClick = () => {
    console.log("piska Close");
  };

  SaveClick = () => {
    console.log("piska Save");
  };

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  addItem = () => {
    const newItem = {
      name: this.state.name,
      value: this.state.value,
      id: this.maxId++
    };

    this.setState(({addData}) => {
      const newArr = [...addData, newItem];
      return {
        addData: newArr
      };
    });
  };

  handleSubmit = () => {
    const { push, addPageComponent } = this.props;
    addPageComponent(
        this.state.name,
        this.state.value,
        this.state.addData,
    );
    // event.preventDefault();
    // // this.props.handleSubmit(this.state.name, this.state.value);
    console.log("-було надіслано: " + this.state.name);
    console.log("-було надіслано: " + this.state.value);
    console.log("-було надіслано: " + this.state.addData);
    push("/friends");
  };

  render() {
    return (
      <>
        <AddPageComponent
          SaveClick={this.SaveClick}
          CloseClick={this.CloseClick}
          handleChangeName={this.handleChangeName}
          handleChangeValue={this.handleChangeValue}
          handleSubmit={this.handleSubmit}
          addItem={this.addItem}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.addPageReducer.name,
    value: state.addPageReducer.value,
    addData: state.addPageReducer.data
  };
};
const mapDispatchToProps = {
  push,
  addPageComponent,
};

AddPageComponent.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AddPAgeContainer);
