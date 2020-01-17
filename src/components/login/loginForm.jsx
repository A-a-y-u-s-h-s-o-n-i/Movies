import React from 'react';
import Joi from 'joi-browser';
import Form from "./form";

class LoginForm extends Form {

    state = {
        data: { username:"", password:""},
        errors: {}
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    };

    doSubmit = () => {
        console.log("Submitted")
    };


    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="row mt-3">
                    <div className="col-sm-6 ml-auto mr-auto">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput("username","Username")}
                            {this.renderInput("password","Password","password")}
                            {this.renderButton("Login")}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;
