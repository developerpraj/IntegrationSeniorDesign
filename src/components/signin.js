import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Fade  } from 'reactstrap';
import _ from 'lodash';
import ReactLoginMS from "react-ms-login";


const logo = require('./logo.png'); 
const lo = require('./o365.png'); 


class ButtonContent extends React.Component {
    render(){
        return (
        <span>
            Login with O365
        </span>)
    }
}
 
export default class Login extends Component {
 
 

    login = (event) => {
 
        event.preventDefault();

 
    }

    render() {
        return (

            <div className="container">
                 <img src={logo} />
                <Form id="loginForm" method="post" onSubmit={this.login}>
                    <ReactLoginMS
                         clientId="3e6f7b8a-c950-489f-af64-19b575aa4ca4" // required: 'application id/client id' obtained from https://apps.dev.microsoft.com for your app
                         redirectUri="https://developerpraj.github.io/seniorproject/" // required: redirectUri registered in https://apps.dev.microsoft.com for your app
                         scopes={["user.read"]} //optional: defaults to "user.read" full list is present https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference
                         responseType="token" //optional: valid values are "token" for `Implicite OAuth flow` and "code" for `Authorization Code flow` defaults to "token"
                         cssClass="some-css-class" // optional: space separated class names which are applied on the html Button element
                         btnContent={ButtonContent} // optional: can be string or a valid react component which can be rendered inside html Button element
                         handleLogin={(data) => console.log(data)}// required: callback to receive token/code after successful login
                    />
                </Form>
            </div>
            
        );
    }
}
