## MHC - Wellness Event Booking Application
The idea for the project is creating web-based application to provide wellness event booking between vendors and company users with ReactJS

## Mock-up
This project have initial [Mock-up](https://www.figma.com/file/Elw3uGYJbXvInMH4XA5ytPWf/Mockup-MHC-Idrus-and-Winata).

## Stack Used
1. ReactJS
2. Axios
3. Bootstrap
4. MDB React
5. CSS
6. React Router Dom
7. History
8. Json Web Token

## Setting Prerequisites
1. git clone git@bitbucket.org:idrusandwinata/frontend.git
2. cd MHC-Wellness/frontend/frontend
3. npm install or yarn install
4. npm start or yarn star

## How it works
1. Login : 
2. As HR : hr@glints.com , pass : glints
3. As Vendor: vendor@glints.com , pass : glints
4. The login page validation have to fill email and password so the login button can be activated, its not the button is disabled
5. The login page use API from Dito because I got miss communication with Idrus that I just realized in the last day that the login used JWT Decode. So I have a lot difficulties in API integration because i still cant finish idrus API for login. The rest of This app used hardcoded.
6. The login page already able to redirect based on user role. But cant log out so used link instead
7. To access HR page use http://localhost:3000/hr
8. To access Vendor page use http://localhost:3000/vendor
9. The dashboard page already have modal pop up to create booking/event and also to view detail

## Deployment
This project is deployed to Heroku, you can access the web app below:
[mhc-wellness-event-booking](https://mhc-wellness-event-booking.herokuapp.com/)