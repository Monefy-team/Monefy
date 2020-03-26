import React, { Component } from "react";
import AddPageComponent from "./AddPageComponent";
import { push } from "connected-react-router";
import { func, string } from "prop-types";
import { connect } from "react-redux";
import {addPageComponent} from '../../../reduxStore/add/actions'
import {addPageReducer} from "../../../reduxStore/add/reducer";
// import SendItem from "../SendItem";

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
      value: ""
    };
    // this.AddItem = this.AddItem.bind(this);
    this.CloseClick = this.CloseClick.bind(this);
    this.SaveClick = this.SaveClick.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   console.log('old props:', prevProps);
  // }

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

  handleSubmit = event => {
    const { push, addPageComponent } = this.props;
    addPageComponent(this.state.name, this.state.value);
    // event.preventDefault();
    // // this.props.handleSubmit(this.state.name, this.state.value);
    console.log("-було надіслано: " + this.state.name);
    console.log("-було надіслано: " + this.state.value);

    push("/friends");
  };

  render() {
    return (
      <>
        <AddPageComponent
          onClickHandler={this.onClickHandler}
          SaveClick={this.SaveClick}
          CloseClick={this.CloseClick}
          handleChangeName={this.handleChangeName}
          handleChangeValue={this.handleChangeValue}
          name={this.state.name}
          value={this.state.value}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

// const mapStateToProps = propTypes => {
//   return{

//   }
// };

const mapStateToProps = state => {
  return {
    name: state.addPageReducer.name,
    value: state.addPageReducer.value,
  };
};
const mapDispatchToProps = {
  push,
  addPageComponent,
};

AddPageComponent.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AddPAgeContainer);
