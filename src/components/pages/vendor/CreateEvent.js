import React, { Component } from 'react';
import { MDBIcon, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

export default class CreateEvent extends Component {

  state = {
    proposeDates: '',
    selectEvent: ''
  }

  handleAddState = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.modal} >
          <MDBModalHeader toggle={this.props.toggle}>Create Event</MDBModalHeader>

          <MDBModalBody>
            <form>
              <label htmlFor="name" className="grey-text">
                Propose Dates
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                pattern="^(?!\s*$).+"
                required
                value={this.state.proposeDates}
                onChange={this.handleAddState}
              />

              <label htmlFor="chooseEvents" className="grey-text mt-2">
                Select Events
              </label>
              <select className="browser-default custom-select"
                id="chooseEvents"
                required
                value={this.state.selectEvent}
                onChange={this.handleAddState}
              >
                <option >Select your events</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
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
