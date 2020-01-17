import React from 'react';
import Form from "./form";
import Joi from "joi-browser";

class RegisterForm extends Form {

    state = {
        data: { name:"",username:"", password:""},
        errors: {}
    };

    schema = {
        name:Joi.string().required().label("Name"),
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).max(15).label("Password")
    };

    doSubmit = () => {
        console.log("Submitted")
    };


    render() {
        return (
            <div>
                <h1>Register</h1>
                <div className="row mt-3">
                    <div className="col-sm-6 ml-auto mr-auto">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput("name","Name")}
                            {this.renderInput("username","Username")}
                            {this.renderInput("password","Password","password")}
                            {this.renderButton("Register")}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterForm;
