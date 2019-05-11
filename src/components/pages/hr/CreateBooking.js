import React, { Component } from 'react';
import {
  MDBIcon, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,
  MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption
}
  from "mdbreact";

export default class CreateBooking extends Component {

  state = {
    proposeDates1: '',
    proposeDates2: '',
    proposeDates3: '',
    selectEvent: ''
  }

  handleAddState = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.modal} >
          <MDBModalHeader toggle={this.props.toggle}>Create Booking</MDBModalHeader>

          <MDBModalBody>
            <form>
              <label htmlFor="proposeDates" className="grey-text">
                Propose Dates 1
              </label>
              <input
                type="date"
                id="proposeDates1"
                className="form-control"
                required
                value={this.state.proposeDates1}
                onChange={this.handleAddState}
              />

              <label htmlFor="proposeDates" className="grey-text">
                Propose Dates 2
              </label>
              <input
                type="date"
                id="proposeDates2"
                className="form-control"
                required
                value={this.state.proposeDates2}
                onChange={this.handleAddState}
              />

              <label htmlFor="proposeDates" className="grey-text">
                Propose Dates 3
              </label>
              <input
                type="date"
                id="proposeDates3"
                className="form-control"
                required
                value={this.state.proposeDates3}
                onChange={this.handleAddState}
              />

              <label htmlFor="chooseEvents" className="grey-text mt-2">
                Select Events
              </label>
              <select className="browser-default custom-select"
                id="selectEvent"
                required
                value={this.state.selectEvent}
                onChange={this.handleAddState}
              >
                <option >Select your events</option>
                <option value="Blood Donation">Blood Donation</option>
                <option value="Health Talk">Health Talk</option>
                <option value="Eye Check Up">Eye Check Up</option>
              </select>
            </form>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn size="sm" color="success" type="submit" onClick={this.handleSubmit}>SUBMIT</MDBBtn>
            <MDBBtn size="sm" color="red" onClick={this.props.toggle}>CANCEL</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    )
  }
}
