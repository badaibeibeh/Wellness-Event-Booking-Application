import React, { Component } from 'react';
import { MDBDataTable, MDBIcon, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";


export default class ViewEvent extends Component {
  render() {

    const data = {
      columns: [
        {
          label: 'NO',
          field: 'no'
        },
        {
          label: 'EVENT NAME',
          field: 'eventName'
        },
        {
          label: 'VENDOR NAME',
          field: 'vendorName'
        },
        {
          label: 'CONFIRM DATE',
          field: 'confirmDate'
        },
        {
          label: 'STATUS',
          field: 'status'
        },
        {
          label: 'DATE CREATED',
          field: 'dateCreated'
        },
        {
          label: 'ACTION',
          field: 'action'
        }
      ],
      rows: [
        {
          no: '1',
          eventName: 'Blood Donation',
          vendorName: 'Bloody Love',
          confirmDate:
            <ul>
              <li>22 Mei 2019</li>
              <li>23 Mei 2019</li>
              <li>24 Mei 2019</li>
            </ul>,
          status: 'Pending',
          dateCreated: '1 Mei 2019',
          action:
            <React.Fragment>
              <MDBBtn size="sm" color="blue-grey" toggle={this.props.toggle} onClick={this.viewToggle}>CONFIRM</MDBBtn>
            </React.Fragment>
        }
      ]

    }

    return (
      <MDBContainer>
        <MDBModal fullHeight position="right" size="lg" isOpen={this.props.modal} toggle={this.props.toggle}>
          <MDBModalHeader toggle={this.props.toggle}>Detail Event</MDBModalHeader>

          <MDBModalBody>
            
            <MDBDataTable
              hover
              small
              searching={false}
              data={data}
            />
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn size="sm" color="success" type="submit" onClick={this.handleSubmit}>SAVE</MDBBtn>
            <MDBBtn size="sm" color="red" onClick={this.props.toggle}>BACK</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    )
  }
}
