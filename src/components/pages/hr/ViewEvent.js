import React, { Component } from 'react';
import { MDBDataTable, MDBIcon, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";


export default class ViewEvent extends Component {
  render() {

    const data = {
      columns: [
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
          label: 'DATE CREATED',
          field: 'dateCreated'
        },
        {
          label: 'DATE CREATED',
          field: 'asd'
        },
        {
          label: 'STATUS',
          field: 'status'
        }
      ],
      rows: [
        {
          eventName: 'Blood Donation',
          vendorName: 'Bloody Love',
          confirmDate:
            <ul>
              <li>22 Mei 2019</li>
              <li>23 Mei 2019</li>
              <li>24 Mei 2019</li>
            </ul>,
          dateCreated: '1 Mei 2019',
          asd: '1 Mei 2019',
          status:
            <React.Fragment>
              <MDBBtn size="sm" color="blue-grey"> PENDING</MDBBtn>
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
              striped bordered 
              small
              searching={false}
              data={data}
            />
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn size="sm" color="red" onClick={this.props.toggle}>BACK</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    )
  }
}
