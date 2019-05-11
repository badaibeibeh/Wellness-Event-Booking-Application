import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import Axios from 'axios';
import './../styles/Styles.css';


export default class Login extends Component {

  state = {
    email: '',
    password: ''
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleAddState = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = () => {
    event.preventDefault();
    const { history } = this.props;
    (this.state.email, this.state.password);
    // this.props.history.push('/hr');

    Axios
      .post(`https://wellness-event-server.herokuapp.com/api/auth/login?email=${this.state.email}`, { email: this.state.email, password: this.state.password })
      .then(
        response => {
          const resp = response.data.data;
          console.log(response)
          const { token, user } = resp;
          localStorage.setItem('@MHC_TEST_TOKEN', token);

          switch (user.role) {
            case 'hr':
              history.push('/hr');
              break;
            case 'vendor':
              history.push('/vendor');
              break;
            default:
              break;
          }
        })
      .catch(err => {
        alert(err.response.data.message);
      })
  }

  render() {
    return (
      <div >
        <MDBContainer>
          <MDBRow className="login" >
            <MDBCol md="4"></MDBCol>
            <MDBCol md="4">
              <MDBCard>
                <MDBCardBody className="mx-4" >
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5">
                      <strong>LOG IN</strong>
                    </h3>
                  </div>
                  <MDBInput
                    id="email"
                    label="Your email"
                    group
                    type="email"
                    value={this.state.email}
                    onChange={this.handleAddState}
                  />
                  <MDBInput
                    id="password"
                    label="Your password"
                    group
                    type="password"
                    value={this.state.pass}
                    onChange={this.handleAddState}
                  />
                  <div className="text-center mb-3">
                    <MDBBtn
                      type="button"
                      gradient="blue"
                      rounded
                      className="btn-block z-depth-1a"
                      disabled={!this.validateForm()}
                      onClick={this.handleSubmit}
                    >
                      LOG IN
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4"></MDBCol>
        </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}
