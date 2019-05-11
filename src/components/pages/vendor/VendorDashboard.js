import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBDataTable, MDBBtn, MDBIcon } from "mdbreact";
import CreateBooking from './CreateEvent';
import ViewEvent from './ViewEvent';
import './../../../styles/Styles.css';

export default class VendorDashboard extends Component {

  state = {
    addModal: false,
    view: false
  }

  addToggle = () => {
    this.setState({
      addModal: !this.state.addModal
    });
  }

  viewToggle = () => {
    this.setState({
      view: !this.state.view
    });
  }

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
              <MDBBtn size="sm" color="info" toggle={this.props.toggle} onClick={this.viewToggle}><MDBIcon far icon="eye" /> VIEW</MDBBtn>
            </React.Fragment>
        }
      ]

    }

    return (
      <div className='vendor'>
        <MDBNavbar color="unique-color-dark" dark>
          <MDBNavbarBrand><MDBIcon icon="columns" />  Vendor Dashboard</MDBNavbarBrand>
          <MDBBtn size="sm" color="primary" onClick={this.addToggle}>
            <MDBIcon far icon="calendar-plus" />  CREATE EVENT
          </MDBBtn>
          <MDBBtn rounded size="sm" color="blue-grey">
            <MDBIcon icon="sign-out-alt" />  LOG OUT
          </MDBBtn>
        </MDBNavbar>
        <CreateBooking modal={this.state.addModal} toggle={this.addToggle} />
        <div style={{ margin: "40px" }}>
          <h3> Booking List </h3>
          <MDBDataTable
            hover
            small
            data={data}
          />
        </div>

        <ViewEvent modal={this.state.view} toggle={this.viewToggle} />
      </div>
    )
  }
}
